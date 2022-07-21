import Role from './models/Role.model';
import User from './models/User.model';
import UserInRole from './models/UserInRole.model';
import MenuItem from './models/MenuItem.model';
import Category from './models/Category.model';
import MenuCategory from './models/MenuCategory.model';
import Order from './models/Order.model';
import PaySetting from './models/PaySetting.model';
import Package from './models/Package.model';
import { json } from 'express';
const { GraphQLScalarType, Kind } = require('graphql');
const mongoose = require('mongoose');

//subscriptions test 
import { PubSub } from 'graphql-subscriptions';
//import { GooglePubSub } from '@axelspringer/graphql-google-pubsub';// For Production
import { RedisPubSub } from 'graphql-redis-subscriptions'; // For Production
import Mailbox from './models/MailBox.model';
import ShippingAddress from './models/ShippingAddress';
import OrderRejection from './models/OrderRejection.model';
// const pubsub = new RedisPubSub(
//                 process.env.NODE_ENV === "production"
//                 ? {
//                     connection: {
//                         host: process.env.REDIS_DOMAIN_NAME as any,
//                         port: process.env.PORT_NUMBER as any,
//                         // retryStrategy: options => {
//                         //   // reconnect after
//                         //   return Math.max(options.attempt * 100, 3000);
//                         // }
//                       }
//                 }
//                 : {});
const pubsub = new RedisPubSub({
                    connection: {
                        host: process.env.REDIS_DOMAIN_NAME as any || "localhost",
                        port: process.env.PORT_NUMBER as any || "6379",
                        // retryStrategy: options => {
                        //   // reconnect after
                        //   return Math.max(options.attempt * 100, 3000);
                        // }
                      }
                });
//const pubsubProd = new GooglePubSub();
//subscriptions test 

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const jsonScalar = new GraphQLScalarType({
    name: 'Json',
    description: 'Json custom scalar type',
    serialize(value) {
      return value; // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
      return json(value); // Convert incoming integer to Date
    },
  });

const ORDER_CREATED = 'ORDER_CREATED';

const resolvers = {
    Subscription: {
        orderCreated: {
          // More on pubsub below
          subscribe: () => pubsub.asyncIterator(ORDER_CREATED),
        },
    },
    Json: jsonScalar, 
    Query: {
        hello: () => {
            return "Hello World!"
        },
        getAllRoles: async () => {
            return await Role.find();
        },
        getCategories: async () => {
            return await Category.find();
        },

        getOrders: async () => {
            return await Order.find().sort({OrderDate: -1}).populate("Rider").populate("Restaurant");
        },

        getOrdersByRiderId: async (_,{Rider}) => {
            return await Order.find().populate("Rider").populate("Restaurant").where("Rider").equals(Rider)
            .where("OrderStatus").ne("Delivered"); 
        },

        getOrdersByRestaurantId: async (_,{Restaurant}) => {
            return await Order.find().populate("Rider").populate("Restaurant").where("Restaurant").equals(Restaurant)
            .where("OrderStatus").ne("Delivered"); 
        },

        

        getOrdersByDateAndTime: async (_,{StartDate, EndDate}) => {
            // console.log(StartDate);
            // console.log(EndDate);
            let startConverted = new Date(StartDate);
            let endConverted = new Date(EndDate);
            // console.log(startConverted.toISOString());
            // console.log(endConverted.toISOString());
            let res = await Order.find({"OrderDate": {"$gte": startConverted}});
            //console.log(res);
            return res;
        },

        getPaySettings: async () => {
            return await PaySetting.find();
        },

        
    },

    Mutation: {
        //Roles
        createRole: (_, {description}) => {
            const identification = new Role({ description });
            return identification.save();
        },

        getRole: async (_,{_id}) => {
            return await Role.findOne({_id}); 
        },

        getUserInRole: async (_, {UserID}) => {
            return await UserInRole.findOne({UserID});
        },

        addUserToRole: (_, {UserID, RoleID}) => {
            const userPermision = new UserInRole({UserID, RoleID});
            return userPermision.save();
        },

        //Users
        createUser: (_, {Id, FirstName, LastName, Email, AddressLine1, AddressLine2, City, ContactNumber, OpeningHrs, category, MenuItems}) => {
            const user = new User({Id, FirstName, LastName, Email, AddressLine1, AddressLine2, City, ContactNumber, OpeningHrs, category, MenuItems});
            return user.save();
        },

        createRestaurant: (_, {Id, FirstName, LastName, Email, AddressLine1, AddressLine2, City, ContactNumber, OpeningHrs, category, MenuItems, ImageName}) => {
            const user = new User({Id, FirstName, LastName, Email, AddressLine1, AddressLine2, City, ContactNumber, OpeningHrs, category, MenuItems, ImageName});
            return user.save();
        },

        getUser: async (_,{Id}) => {
            return await User.findOne({Id}).populate({path: "categories", model: "category"}); 
        },

        //Categories
        createCategory: (_, {Id , Name}) => { 
            const category = new Category({Id, Name});
            return category.save();
        },

        getMenucategories: async (_,{Id}) => {
            return await User.findOne({Id});
        },

        //Menus
        createMenuItem: (_,{ RetaurantID, MenuCategory,ItemName,ItemCost, ItemDescription}) => {
            const menuItem =  new MenuItem({RetaurantID, MenuCategory,ItemName,ItemCost, ItemDescription});
            return menuItem.save();
        },

        createMenuCategory: (_,{restaurant, Category}) => {
            const menuCategory = new MenuCategory({restaurant, Category});
            return menuCategory.save();
        },

        //Orders
        createOrder: async(_,{Id,OrderItems,OrderStatus,OrderTotal,OrderDate,Rider, DeliveryAddress, PaymentMethod, AdditionalInfo, DeliveryFee, GCT, ServiceCharge, CartTotal, OrderType, Restaurant}) => {
            const orderItem = new Order({Id, OrderItems, OrderStatus, OrderTotal, OrderDate, Rider, DeliveryAddress, PaymentMethod, AdditionalInfo, DeliveryFee, GCT, ServiceCharge, CartTotal, OrderType, Restaurant});
            const newOrder = await orderItem.save();
            const orderId = newOrder._id;
            // console.log(newOrder)
            // console.log(orderId);
            
            const finalOrder = await Order.find().where("_id").equals(orderId).populate("Rider").populate("Restaurant");
            //console.log(finalOrder);
            pubsub.publish(ORDER_CREATED, {orderCreated: finalOrder[0]});
            
            return finalOrder[0];
        },

        getOrdersByUserId: async (_,{Id}) => {
            return await Order.find().sort({OrderDate: -1}).populate("Rider").populate("Restaurant").where("Id").equals(Id);    
        },

        getOrdersByRiderId: async (_,{Rider}) => {
            return await Order.find().populate("Rider").populate("Restaurant").where("Rider").equals(Rider)
            .where("OrderStatus").ne("Delivered"); 
        },

        getOrdersByRiderIdAnDate: async (_,{Rider, StartDate, EndDate}) => {
            // console.log(StartDate);
            // console.log(EndDate);
            // console.log(Rider);
            let startConverted = new Date(StartDate);
            let endConverted = new Date(EndDate);

            let res = await Order.find({"OrderDate": {"$gte": startConverted}}).where("Rider").equals(Rider)
            .where("OrderStatus").equals("Delivered"); 
            //console.log(res);
            return res;
        },

        getOrders: async () => {
            return await Order.find().populate("Rider").populate("Restaurant");
        },

        updateOrder: async (_, {_id,Id,OrderItems,OrderStatus,OrderTotal,OrderDate,Rider, DeliveryAddress, PaymentMethod, AdditionalInfo, DeliveryFee, GCT, ServiceCharge, CartTotal, OrderType}) => {
            let newOrder = {
                _id,
                Id,
                OrderItems,
                OrderStatus,
                OrderTotal,
                OrderDate,
                Rider,
                DeliveryAddress,
                PaymentMethod, 
                AdditionalInfo, 
                DeliveryFee, 
                GCT, 
                ServiceCharge, 
                CartTotal,
                OrderType
            }
            //console.log(newOrder);
            const order = await Order.findOne({_id});
            const user = await User.findOne({Id}).populate("Rider");
            Object.assign(order, newOrder);
            order.save();
            return {
                _id : order._id,
                Id: order.Id,
                OrderItems: order.OrderItems, 
                OrderStatus: order.OrderStatus,
                OrderTotal: order.OrderTotal,
                OrderDate: order.OrderDate,
                Rider: order.Rider,
                DeliveryAddress: order.DeliveryAddress, 
                PaymentMethod: order.PaymentMethod,
                AdditionalInfo: order.AdditionalInfo,
                DeliveryFee: order.DeliveryFee,
                GCT: order.GCT,
                ServiceCharge: order.ServiceCharge,
                CartTotal: order.CartTotal,
                OrderType: order.OrderType,
                userName: user.FirstName, 
                userEmail: user.Email
            }
        },

        getPaySettings: async () => {
            return await PaySetting.find();
        },

        updatePaySetting: async(_, {_id, perDeliveryEnabled, percentagePerOrderTotal, value}) => {
            let newPaySetting = {
                _id,
                perDeliveryEnabled,
                percentagePerOrderTotal,
                value
            }
            //console.log(newPaySetting);
            const paySetting = await PaySetting.findOne({_id});
            Object.assign(paySetting, newPaySetting);
            return paySetting.save(); 
        },
        
        //Reastaurants
        getRestaurants: async () => {
            return await User.find().populate("category").where('OpeningHrs').ne(null).where('category').ne(null);
            //console.log(res);
            //return res;
        },

        getRestaurant: async (_,{_id}) => {
            return await User.findOne({_id}).populate("category");
            //console.log(res);
            //return res;
        },

        //Riders
        getRiders: async () => {
            return await User.find().where('isAvailable').ne(null).where('disabled').ne(null);
            //console.log(res);
            //return res;
        },

        getRider: async (_,{_id}) => {
            return await User.findOne({_id}).where('isAvailable').ne(null).where('disabled').ne(null);
            //console.log(res);
            //return res;
        },

        updateRiderStatus: async (_,{_id, isAvailable, disabled}) => {
           
            //console.log(newPaySetting);
            const user = await User.findOne({_id});
            user.isAvailable = isAvailable;
            user.disabled = disabled;
            return user.save();
        },

        //Packages
        getPackageById: async (_,{TrackingNumber}) => {
            let packFound = await Package.findOne({TrackingNumber}).populate('Customer'); 
            //console.log('pack found is')  
            //console.log(packFound);
            return packFound; 
        },

        addPackage: async (_,{PackageInfo, Customer, TrackingNumber, Pickup, Deliver}) => {
            //console.log('im here');
            let id = new mongoose.Types.ObjectId(Customer);
            //console.log(id)
            const Pack = new Package({PackageInfo, Customer: id, TrackingNumber, Pickup, Deliver});
            const newPack =  await Pack.save();

            const packId = newPack._id;
            //console.log(newPack)
            //console.log(packId);
            
            const finalPack = await Package.find().where("_id").equals(packId).populate("Customer");
            //console.log(finalPack);
            
            return finalPack[0];
        },

        updateContactAndAddress: async(_, {_id, ALine1, ALine2, City, Contact}) => {
            let newUser = {
                _id,
                FirstName: '',
                LastName: '',
                Email: '',
                AddressLine1: ALine1,
                AddressLine2: ALine2,
                City: City,
                ContactNumber: Contact
            }
            //console.log(newPaySetting);
            const user = await User.findOne({_id});
            newUser.FirstName = user.FirstName;
            newUser.LastName = user.LastName;
            newUser.Email = user.LastName;
            Object.assign(user, newUser);
            return user.save(); 
        },

        //Mailbox
        getMailboxById: async(_,{Uid}) => {
            let mBoxFound = await Mailbox.findOne({Uid}).populate('Uid'); 
            //console.log('mailbox found is')  
            //console.log(mBoxFound);
            return mBoxFound;
        },
        
        addMailbox: async(_,{Status, Uid, MailboxNum}) => {
            //console.log('im here');
            let id = new mongoose.Types.ObjectId(Uid);
            //console.log(id)
            const mBox = new Mailbox({Status, Uid: id, MailboxNum});
            const newmBox =  await mBox.save();

            const mBoxId = newmBox._id;
            //console.log(newmBox)
            //console.log(mBoxId);
            
            const finalMBox = await Mailbox.find().where("_id").equals(mBoxId).populate("Uid");
            //console.log(finalMBox);
            
            return finalMBox[0];
        },

        updateRestaurantById: async(_, {
            _id, Id, FirstName, LastName, Email, AddressLine1, 
            AddressLine2, City, ContactNumber, OpeningHrs, 
            category, MenuItems, ImageName
        }) => {
            let newRestaurantUser = {
                _id, Id, FirstName,
                LastName, Email, AddressLine1,
                AddressLine2, City, ContactNumber,
                OpeningHrs, category, MenuItems,
                ImageName
            }
            //console.log(newRestaurantUser);
            const user = await User.findOne({_id});
            Object.assign(user, newRestaurantUser);
            return user.save(); 
        },

        updateShippingAddress: async(_,{
            _id,AirFreight,SeaFreight
        }) => {
            let newShippingAddress = {
                _id: _id,
                AirFreight: AirFreight,
                SeaFreight: SeaFreight
            }

            //console.log(newShippingAddress);
            

            const shippingAddress = await ShippingAddress.findOne({_id});
            //console.log(shippingAddress);
            shippingAddress.AirFreight = newShippingAddress.AirFreight;
            shippingAddress.SeaFreight = newShippingAddress.SeaFreight;
            return shippingAddress.save(); 
        },

        fetchShippingAddress: async () => {
            return await ShippingAddress.find();
        },

        getCategories: async () => {
            return await Category.find();
        },

        createOrderRejection: async(_, {
            OrderId, RejectionList}) => {
               // console.log(RejectionList)
            let orderrejection = new OrderRejection({OrderId, RejectionList});
            return await orderrejection.save();
        },

        updateOrderRejection: async(_, {
            _id, OrderId, RejectionList}) => {
            //console.log('im here', _id)
            let orderrejection = await OrderRejection.findOne({_id});
            //console.log(orderrejection)
            let refListUpdated = orderrejection.RejectionList.concat(RejectionList[RejectionList.length - 1]);
            orderrejection.RejectionList = refListUpdated;
            //console.log(orderrejection);
            return await orderrejection.save();
        }, 

        getOrderRejection: async (_,{OrderId}) => {
            return await OrderRejection.findOne({OrderId});
        } 
    }
};

export default resolvers;
// module.exports = resolvers;