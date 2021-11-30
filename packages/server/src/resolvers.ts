import Role from './models/Role.model';
import User from './models/User.model';
import UserInRole from './models/UserInRole.model';
import MenuItem from './models/MenuItem.model';
import Category from './models/Category.model';
import MenuCategory from './models/MenuCategory.model';
import Order from './models/Order.model';
import { json } from 'express';
const { GraphQLScalarType, Kind } = require('graphql');

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
const resolvers = {
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

        getUser: async (_,{Id}) => {
            return await User.findOne({Id}).populate({path: "categories", model: "category"});; 
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
        createOrder: (_,{Id,OrderItems,OrderStatus,OrderTotal,OrderDate,Rider, DeliveryAddress, PaymentMethod, AdditionalInfo, DeliveryFee, GCT, ServiceCharge, CartTotal}) => {
            const orderItem = new Order({Id, OrderItems, OrderStatus, OrderTotal, OrderDate, Rider, DeliveryAddress, PaymentMethod, AdditionalInfo, DeliveryFee, GCT, ServiceCharge, CartTotal});
            return orderItem.save();
        },

        getOrdersByUserId: async (_,{Id}) => {
            return await Order.find().populate("Rider").where("Id").equals(Id);    
        },

        getOrdersByRiderId: async (_,{Rider}) => {
            return await Order.find().populate("Rider").where("Rider").equals(Rider)
            .where("OrderStatus").ne("Delivered"); 
        },

        getOrders: async () => {
            return await Order.find().populate("Rider");
        },

        updateOrder: async (_, {_id,Id,OrderItems,OrderStatus,OrderTotal,OrderDate,Rider, DeliveryAddress, PaymentMethod, AdditionalInfo, DeliveryFee, GCT, ServiceCharge, CartTotal}) => {
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
                CartTotal
            }
            //console.log(newOrder);
            const order = await Order.findOne({_id});
            Object.assign(order, newOrder);
            return order.save();
        },
        
        //Reastaurants
        getRestaurants: async () => {
            return await User.find().populate("category").where('OpeningHrs').ne(null).where('category').ne(null);
            //console.log(res);
            //return res;
        },

        //Riders
        getRiders: async () => {
            return await User.find().where('isAvailable').ne(null).where('disabled').ne(null);
            //console.log(res);
            //return res;
        }
    }
};

export default resolvers;
// module.exports = resolvers;