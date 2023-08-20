import Role from "./models/Role.model";
import User from "./models/User.model";
import UserInRole from "./models/UserInRole.model";
import MenuItem from "./models/MenuItem.model";
import Category from "./models/Category.model";
import MenuCategory from "./models/MenuCategory.model";
import Order from "./models/Order.model";
import PaySetting from "./models/PaySetting.model";
import Package from "./models/Package.model";
import { json } from "express";
const { GraphQLScalarType, Kind } = require("graphql");
const mongoose = require("mongoose");
const crypto = require("crypto");

//subscriptions test
import { PubSub } from "graphql-subscriptions";
//import { GooglePubSub } from '@axelspringer/graphql-google-pubsub';// For Production
import { RedisPubSub } from "graphql-redis-subscriptions"; // For Production
import Mailbox from "./models/Mailbox.model";
import ShippingAddress from "./models/ShippingAddress";
import OrderRejection from "./models/OrderRejection.model";
import OrderBilling from "./models/OrderBilling.model";

const pubsub = new RedisPubSub({
  connection: {
    host: process.env.REDIS_DOMAIN_NAME,
    port: 6379,
    retryStrategy: (times) => {
      // reconnect after
      return Math.max(times * 100, 3000);
    },
  },
});
// const pubsub = new RedisPubSub({
//                     connection: {
//                         host: process.env.REDIS_DOMAIN_NAME as any || "localhost",
//                         port: process.env.PORT_NUMBER as any || "6379",
//                         password: process.env.REDIS_PASSWORD as any || "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81"
//                         // retryStrategy: options => {
//                         //   // reconnect after
//                         //   return Math.max(options.attempt * 100, 3000);
//                         // }
//                       }
//                 });
//const pubsubProd = new GooglePubSub();
//subscriptions test

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
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
  name: "Json",
  description: "Json custom scalar type",
  serialize(value) {
    return value; // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return json(value); // Convert incoming integer to Date
  },
});

const ORDER_CREATED = "ORDER_CREATED";

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
      return "Hello World!";
    },
    getAllRoles: async () => {
      return await Role.find();
    },
    getCategories: async () => {
      return await Category.find();
    },

    getOrders: async () => {
      return await Order.find()
        .sort({ OrderDate: -1 })
        .populate("Rider")
        .populate("Restaurant");
    },

    getOrdersByRiderId: async (_, { Rider }) => {
      return await Order.find()
        .populate("Rider")
        .populate("Restaurant")
        .where("Rider")
        .equals(Rider)
        .where("OrderStatus")
        .ne("Delivered");
    },

    getOrdersByRestaurantId: async (_, { Restaurant }) => {
      return await Order.find()
        .populate("Rider")
        .populate("Restaurant")
        .where("Restaurant")
        .equals(Restaurant)
        .where("OrderStatus")
        .ne("Delivered");
    },

    getOrdersByDateAndTime: async (_, { StartDate, EndDate }) => {
      // console.log(StartDate);
      // console.log(EndDate);
      let startConverted = new Date(StartDate);
      let endConverted = new Date(EndDate);
      //console.log("StartDate", StartDate)
      //console.log("EndDate",EndDate)
      //console.log("endConverted", endConverted)
      //console.log("start",startConverted.toISOString());
      //console.log("End",endConverted.toISOString());
      let res = await Order.find({ OrderDate: { $gte: startConverted } })
        .populate("Rider")
        .populate("Restaurant")
        .populate("BillingInfo")
        .where("OrderDate")
        .lte(endConverted);
      //console.log(res.length);
      return res;
    },

    getPaySettings: async () => {
      return await PaySetting.find();
    },
  },

  Mutation: {
    //Hash
    createHash: (
      _,
      {
        authenticateTransaction,
        bname,
        baddr1,
        baddr2,
        bcountry,
        bstate,
        sname,
        saddr1,
        saddr2,
        sstate,
        scountry,
        chargetotal,
        checkoutoption,
        currency,
        email,
        hash_algorithm,
        language,
        hashExtended,
        paymentMethod,
        phone,
        responseFailURL,
        responseSuccessURL,
        sharedsecret,
        storename,
        timezone,
        transactionNotificationURL,
        txndatetime,
        txntype,
      }
    ) => {
      // string to be hashed
      // authenticateTransaction +
      // "|" +
      // "|" +
      //   sharedsecret +
      // "|" +
      //   transactionNotificationURL +
      // "|" +
      // hashExtended +
      //   "|" +
      // responseFailURL +
      // "|" +
      // responseSuccessURL +
      // "|" +

      const str =
        baddr1 +
        "|" +
        baddr2 +
        "|" +
        bcountry +
        "|" +
        bname +
        "|" +
        bstate +
        "|" +
        chargetotal +
        "|" +
        checkoutoption +
        "|" +
        currency +
        "|" +
        email +
        "|" +
        hash_algorithm +
        "|" +
        language +
        "|" +
        paymentMethod +
        "|" +
        phone +
        "|" +
        responseFailURL +
        "|" +
        responseSuccessURL +
        "|" +
        saddr1 +
        "|" +
        saddr2 +
        "|" +
        scountry +
        "|" +
        sname +
        "|" +
        sstate +
        "|" +
        storename +
        "|" +
        timezone +
        "|" +
        txndatetime +
        "|" +
        txntype;
      //console.log(str);
      // secret or salt to be hashed with
      const secret = process.env.SECRET;
      //console.log(secret);

      // create a sha-256 hasher
      const sha256Hasher = crypto.createHmac("sha256", secret);

      // hash the string
      // and set the output format
      const hash = sha256Hasher.update(str).digest("base64");
      console.log(hash);
      // A unique sha256 hash 😃
      return { hash: hash };
    },

    //Roles
    createRole: (_, { description }) => {
      const identification = new Role({ description });
      return identification.save();
    },

    getRole: async (_, { _id }) => {
      return await Role.findOne({ _id });
    },

    getUserInRole: async (_, { UserID }) => {
      return await UserInRole.findOne({ UserID });
    },

    addUserToRole: async (_, { UserID, RoleID }) => {
      const checkRole = await UserInRole.findOne({ UserID });
      // console.log("checkRole is ", checkRole);
      if (checkRole === null) {
        const userPermision = new UserInRole({ UserID, RoleID });
        return userPermision.save();
      } else {
        return checkRole;
      }
    },

    //Users
    createUser: async (
      _,
      {
        Id,
        FirstName,
        LastName,
        Email,
        AddressLine1,
        AddressLine2,
        City,
        ContactNumber,
        OpeningHrs,
        category,
        MenuItems,
      }
    ) => {
      const checkUser = await User.findOne({ Id });
      // console.log(checkUser);
      if (checkUser === null) {
        const user = new User({
          Id,
          FirstName,
          LastName,
          Email,
          AddressLine1,
          AddressLine2,
          City,
          ContactNumber,
          OpeningHrs,
          category,
          MenuItems,
        });
        return user.save();
      } else {
        return checkUser;
      }
    },

    updateUser: async (
      _,
      {
        _id,
        FirstName,
        LastName,
        Email,
        AddressLine1,
        AddressLine2,
        City,
        ContactNumber,
      }
    ) => {
      const newUser = {
        _id,
        FirstName,
        LastName,
        Email,
        AddressLine1,
        AddressLine2,
        City,
        ContactNumber,
      };
      const user = await User.findOne({ _id });
      Object.assign(user, newUser);
      return user.save();
    },

    createRestaurant: (
      _,
      {
        Id,
        FirstName,
        LastName,
        Email,
        AddressLine1,
        AddressLine2,
        City,
        ContactNumber,
        OpeningHrs,
        category,
        MenuItems,
        ImageName,
      }
    ) => {
      const user = new User({
        Id,
        FirstName,
        LastName,
        Email,
        AddressLine1,
        AddressLine2,
        City,
        ContactNumber,
        OpeningHrs,
        category,
        MenuItems,
        ImageName,
      });
      return user.save();
    },

    createStaff: async (
      _,
      {
        Id,
        FirstName,
        LastName,
        Email,
        AddressLine1,
        AddressLine2,
        City,
        ContactNumber,
        MenuItems,
        isAvailable,
        disabled,
        ImageName,
        Position,
      }
    ) => {
      const checkUser = await User.findOne({ Id });
      if (checkUser === null) {
        const user = new User({
          Id,
          FirstName,
          LastName,
          Email,
          AddressLine1,
          AddressLine2,
          City,
          ContactNumber,
          MenuItems,
          isAvailable,
          disabled,
          ImageName,
          Position,
        });
        return user.save();
      } else {
        return checkUser;
      }
    },

    updateStaff: async (
      _,
      {
        _id,
        MenuItems,
        FirstName,
        LastName,
        Email,
        AddressLine1,
        AddressLine2,
        City,
        ContactNumber,
        isAvailable,
        disabled,
        ImageName,
        Position,
      }
    ) => {
      const newUser = {
        _id,
        MenuItems,
        FirstName,
        LastName,
        Email,
        AddressLine1,
        AddressLine2,
        City,
        ContactNumber,
        isAvailable,
        disabled,
        ImageName,
        Position,
      };
      const user = await User.findOne({ _id });
      Object.assign(user, newUser);
      return user.save();
    },

    getUser: async (_, { Id }) => {
      return await User.findOne({ Id }).populate({
        path: "categories",
        model: "category",
      });
    },

    //Categories
    createCategory: (_, { Id, Name }) => {
      const category = new Category({ Id, Name });
      return category.save();
    },

    getMenucategories: async (_, { Id }) => {
      return await User.findOne({ Id });
    },

    //Menus
    createMenuItem: (
      _,
      { RetaurantID, MenuCategory, ItemName, ItemCost, ItemDescription }
    ) => {
      const menuItem = new MenuItem({
        RetaurantID,
        MenuCategory,
        ItemName,
        ItemCost,
        ItemDescription,
      });
      return menuItem.save();
    },

    createMenuCategory: (_, { restaurant, Category }) => {
      const menuCategory = new MenuCategory({ restaurant, Category });
      return menuCategory.save();
    },

    //Orders
    createOrder: async (
      _,
      {
        Id,
        OrderItems,
        OrderStatus,
        OrderTotal,
        OrderDate,
        Rider,
        BillingInfo,
        DeliveryAddress,
        PaymentMethod,
        AdditionalInfo,
        DeliveryFee,
        GCT,
        ServiceCharge,
        CartTotal,
        OrderType,
        Restaurant,
      }
    ) => {
      const orderItem = new Order({
        Id,
        OrderItems,
        OrderStatus,
        OrderTotal,
        OrderDate,
        Rider,
        BillingInfo,
        DeliveryAddress,
        PaymentMethod,
        AdditionalInfo,
        DeliveryFee,
        GCT,
        ServiceCharge,
        CartTotal,
        OrderType,
        Restaurant,
      });
      const newOrder = await orderItem.save();
      const orderId = newOrder._id;
      // console.log(newOrder)
      // console.log(orderId);

      const finalOrder = await Order.find()
        .where("_id")
        .equals(orderId)
        .populate("Rider")
        .populate("Restaurant")
        .populate("BillingInfo");
      //console.log(finalOrder);
      pubsub.publish(ORDER_CREATED, { orderCreated: finalOrder[0] });

      return finalOrder[0];
    },

    //Billing
    createOrderBilling: async (
      _,
      {
        oId,
        txndate,
        ccbin,
        processor,
        saddr2,
        saddr1,
        cccountry,
        Expmonth,
        hashalgorithm,
        endpointTransactionId,
        currency,
        processorresponse_code,
        chargetotal,
        email,
        terminalid,
        associationResponseCode,
        approvalcode,
        expyear,
        responsehash,
        responsecode3dsecure,
        bstate,
        schemeTransactionId,
        tdate,
        installmentsinterest,
        bname,
        phone,
        ccbrand,
        sname,
        sstate,
        refnumber,
        txntype,
        paymentMethod,
        txndatetime,
        cardnumber,
        ipgTransactionId,
        scountry,
        baddr1,
        bcountry,
        baddr2,
        status,
      }
    ) => {
      console.log("oId is", oId);
      console.log("order date is ", txndate);
      const orderBilling = new OrderBilling({
        oId,
        txndate,
        ccbin,
        processor,
        saddr2,
        saddr1,
        cccountry,
        Expmonth,
        hashalgorithm,
        endpointTransactionId,
        currency,
        processorresponse_code,
        chargetotal,
        email,
        terminalid,
        associationResponseCode,
        approvalcode,
        expyear,
        responsehash,
        responsecode3dsecure,
        bstate,
        schemeTransactionId,
        tdate,
        installmentsinterest,
        bname,
        phone,
        ccbrand,
        sname,
        sstate,
        refnumber,
        txntype,
        paymentMethod,
        txndatetime,
        cardnumber,
        ipgTransactionId,
        scountry,
        baddr1,
        bcountry,
        baddr2,
        status,
      });
      const newBilling = await orderBilling.save();
      const billingId = newBilling._id;
      // console.log(newOrder)
      // console.log(orderId);

      const finalBilling = await OrderBilling.find()
        .where("_id")
        .equals(billingId)
        .populate("OrderInfo");

      return finalBilling[0];
    },

    getOrdersByUserId: async (_, { Id }) => {
      return await Order.find()
        .sort({ OrderDate: -1 })
        .populate("Rider")
        .populate("Restaurant")
        .where("Id")
        .equals(Id);
    },

    getOrdersByRiderId: async (_, { Rider }) => {
      return await Order.find()
        .populate("Rider")
        .populate("Restaurant")
        .where("Rider")
        .equals(Rider)
        .where("OrderStatus")
        .ne("Delivered");
    },

    getOrdersByRiderIdAnDate: async (_, { Rider, StartDate, EndDate }) => {
      //console.log(StartDate);
      //console.log(EndDate);
      // console.log(Rider);
      let startConverted = new Date(StartDate);
      let endConverted = new Date(EndDate);

      let res = await Order.find({ OrderDate: { $gte: startConverted } })
        .where("Rider")
        .equals(Rider)
        .where("OrderStatus")
        .equals("Delivered")
        .where("OrderDate")
        .lte(endConverted);
      //console.log(res);
      return res;
    },

    getOrders: async () => {
      return await Order.find().populate("Rider").populate("Restaurant");
    },

    updateOrder: async (
      _,
      {
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
        OrderType,
      }
    ) => {
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
        OrderType,
      };
      //console.log(newOrder);
      const order = await Order.findOne({ _id });
      if (order.OrderStatus === "Cancelled") {
        console.log("Already Cancelled");
        return order;
      }
      const user = await User.findOne({ Id });
      Object.assign(order, newOrder);
      order.save();
      const order2 = await Order.find()
        .populate("Rider")
        .where("_id")
        .equals(_id);
      //console.log(order2);
      if (
        newOrder.OrderStatus === "Cancelled" &&
        (order.OrderStatus === "Pending" ||
          order.OrderStatus === "Not Assigned")
      ) {
        return {
          _id: order._id,
          Id: order.Id,
          OrderItems: order.OrderItems,
          OrderStatus: order.OrderStatus,
          OrderTotal: order.OrderTotal,
          OrderDate: order.OrderDate,
          Rider: order2[0].Rider,
          DeliveryAddress: order.DeliveryAddress,
          PaymentMethod: order.PaymentMethod,
          AdditionalInfo: order.AdditionalInfo,
          DeliveryFee: order.DeliveryFee,
          GCT: order.GCT,
          ServiceCharge: order.ServiceCharge,
          CartTotal: order.CartTotal,
          OrderType: order.OrderType,
          userName: user.FirstName,
          userEmail: user.Email,
        };
      } else {
        // console.log("unchanged", order.OrderStatus);
        // console.log("Rider", order.Rider);
        return {
          _id: order._id,
          Id: order.Id,
          OrderItems: order.OrderItems,
          OrderStatus: order.OrderStatus,
          OrderTotal: order.OrderTotal,
          OrderDate: order.OrderDate,
          Rider: order2[0].Rider,
          DeliveryAddress: order.DeliveryAddress,
          PaymentMethod: order.PaymentMethod,
          AdditionalInfo: order.AdditionalInfo,
          DeliveryFee: order.DeliveryFee,
          GCT: order.GCT,
          ServiceCharge: order.ServiceCharge,
          CartTotal: order.CartTotal,
          OrderType: order.OrderType,
          userName: user.FirstName,
          userEmail: user.Email,
        };
      }
    },

    getPaySettings: async () => {
      return await PaySetting.find();
    },

    updatePaySetting: async (
      _,
      { _id, perDeliveryEnabled, percentagePerOrderTotal, value }
    ) => {
      let newPaySetting = {
        _id,
        perDeliveryEnabled,
        percentagePerOrderTotal,
        value,
      };
      //console.log(newPaySetting);
      const paySetting = await PaySetting.findOne({ _id });
      Object.assign(paySetting, newPaySetting);
      return paySetting.save();
    },

    //Reastaurants
    getRestaurants: async () => {
      return await User.find()
        .populate("category")
        .where("OpeningHrs")
        .ne(null)
        .where("category")
        .ne(null);
      //console.log(res);
      //return res;
    },

    getRestaurant: async (_, { _id }) => {
      return await User.findOne({ _id }).populate("category");
      //console.log(res);
      //return res;
    },

    //Riders
    getRiders: async () => {
      return await User.find()
        .where("isAvailable")
        .ne(null)
        .where("disabled")
        .ne(null)
        .where("Position")
        .equals("Rider");
      //console.log(res);
      //return res;
    },

    //Staff
    getStaff: async () => {
      return await User.find()
        .where("isAvailable")
        .ne(null)
        .where("disabled")
        .ne(null);
      //console.log(res);
      //return res;
    },

    getRider: async (_, { _id }) => {
      return await User.findOne({ _id })
        .where("isAvailable")
        .ne(null)
        .where("disabled")
        .ne(null);
      //console.log(res);
      //return res;
    },

    updateRiderStatus: async (_, { _id, isAvailable, disabled }) => {
      //console.log(newPaySetting);
      const user = await User.findOne({ _id });
      user.isAvailable = isAvailable;
      user.disabled = disabled;
      return user.save();
    },

    //Packages
    getPackageById: async (_, { TrackingNumber }) => {
      let packFound = await Package.findOne({ TrackingNumber }).populate(
        "Customer"
      );
      //console.log('pack found is')
      //console.log(packFound);
      return packFound;
    },

    addPackage: async (
      _,
      { PackageInfo, Customer, TrackingNumber, Pickup, Deliver }
    ) => {
      //console.log('im here');
      let id = new mongoose.Types.ObjectId(Customer);
      //console.log(id)
      const Pack = new Package({
        PackageInfo,
        Customer: id,
        TrackingNumber,
        Pickup,
        Deliver,
      });
      const newPack = await Pack.save();

      const packId = newPack._id;
      //console.log(newPack)
      //console.log(packId);

      const finalPack = await Package.find()
        .where("_id")
        .equals(packId)
        .populate("Customer");
      //console.log(finalPack);

      return finalPack[0];
    },

    updateContactAndAddress: async (
      _,
      { _id, ALine1, ALine2, City, Contact }
    ) => {
      let newUser = {
        _id,
        FirstName: "",
        LastName: "",
        Email: "",
        AddressLine1: ALine1,
        AddressLine2: ALine2,
        City: City,
        ContactNumber: Contact,
      };
      //console.log(newPaySetting);
      const user = await User.findOne({ _id });
      newUser.FirstName = user.FirstName;
      newUser.LastName = user.LastName;
      newUser.Email = user.LastName;
      Object.assign(user, newUser);
      return user.save();
    },

    //Mailbox
    getMailboxById: async (_, { Uid }) => {
      let mBoxFound = await Mailbox.findOne({ Uid }).populate("Uid");
      //console.log('mailbox found is')
      //console.log(mBoxFound);
      return mBoxFound;
    },

    addMailbox: async (_, { Status, Uid, MailboxNum }) => {
      let mBoxFound = await Mailbox.findOne({ Uid }).populate("Uid");
      if (mBoxFound === null) {
        //console.log('im here');
        let id = new mongoose.Types.ObjectId(Uid);
        //console.log(id)
        const mBox = new Mailbox({ Status, Uid: id, MailboxNum });
        const newmBox = await mBox.save();

        const mBoxId = newmBox._id;
        //console.log(newmBox)
        //console.log(mBoxId);

        const finalMBox = await Mailbox.find()
          .where("_id")
          .equals(mBoxId)
          .populate("Uid");
        //console.log(finalMBox);

        return finalMBox[0];
      } else {
        return mBoxFound;
      }
    },

    getMailboxByMbox: async (_, { MailboxNum }) => {
      let mBoxFound = await Mailbox.findOne({ MailboxNum }).populate("Uid");
      // console.log('mailbox found is')
      // console.log(mBoxFound);
      return mBoxFound;
    },

    updateRestaurantById: async (
      _,
      {
        _id,
        Id,
        FirstName,
        LastName,
        Email,
        AddressLine1,
        AddressLine2,
        City,
        ContactNumber,
        OpeningHrs,
        category,
        MenuItems,
        ImageName,
      }
    ) => {
      let newRestaurantUser = {
        _id,
        Id,
        FirstName,
        LastName,
        Email,
        AddressLine1,
        AddressLine2,
        City,
        ContactNumber,
        OpeningHrs,
        category,
        MenuItems,
        ImageName,
      };
      //console.log(newRestaurantUser);
      const user = await User.findOne({ _id });
      Object.assign(user, newRestaurantUser);
      return user.save();
    },

    updateShippingAddress: async (_, { _id, AirFreight, SeaFreight }) => {
      let newShippingAddress = {
        _id: _id,
        AirFreight: AirFreight,
        SeaFreight: SeaFreight,
      };

      //console.log(newShippingAddress);

      const shippingAddress = await ShippingAddress.findOne({ _id });
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

    createOrderRejection: async (_, { OrderId, RejectionList }) => {
      // console.log(RejectionList)
      let orderrejection = new OrderRejection({ OrderId, RejectionList });
      return await orderrejection.save();
    },

    updateOrderRejection: async (_, { _id, OrderId, RejectionList }) => {
      //console.log('im here', _id)
      let orderrejection = await OrderRejection.findOne({ _id });
      //console.log(orderrejection)
      let refListUpdated = orderrejection.RejectionList.concat(
        RejectionList[RejectionList.length - 1]
      );
      orderrejection.RejectionList = refListUpdated;
      //console.log(orderrejection);
      return await orderrejection.save();
    },

    getOrderRejection: async (_, { OrderId }) => {
      return await OrderRejection.findOne({ OrderId });
    },
  },
};

export default resolvers;
// module.exports = resolvers;
