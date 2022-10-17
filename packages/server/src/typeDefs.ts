import { ApolloServer } from 'apollo-server';
import { json } from 'express';


const typeDefs = /* GraphQL */`
    scalar GraphQLDateTime
    scalar JSONObject  
    scalar Json

    type Role {
        _id: ID
        description: String!
    }

    type UserInRole {
        id: ID!
        UserID: String
        RoleID: String
    }

    type Category {
        _id: ID
        Id: String,
        Name: String    
    }

    type MenuItem {
        MenuCategory:  String
        ItemName:String
        ItemCost: Float
        ItemDescription: String
        ImageName: String
    }

    input MenuItem2 {
        MenuCategory:  String
        ItemName:String
        ItemCost: Float
        ItemDescription: String
        ImageName: String
    }

    type OpeningHrs {
        Sunday: String
        Monday: String
        Tuesday: String
        Wednesday: String
        Thursday: String
        Friday: String
        Saturday: String
    }

    input OpeningHrs2 {
        Sunday: String
        Monday: String
        Tuesday: String
        Wednesday: String
        Thursday: String
        Friday: String
        Saturday: String
    }

    type Rider {
        _id: ID,
        Id: String 
        FirstName: String 
        LastName: String 
        Email: String 
        AddressLine1: String 
        AddressLine2: String 
        City: String 
        ContactNumber: String
        ImageName: String
        isAvailable: Boolean
        disabled: Boolean
    }

    input Rider2 {
        _id: ID,
        Id: String 
        FirstName: String 
        LastName: String 
        Email: String 
        AddressLine1: String 
        AddressLine2: String 
        City: String 
        ContactNumber: String
        ImageName: String
        isAvailable: Boolean
        disabled: Boolean
    }

    type User {
        _id: ID,
        Id: String! 
        FirstName: String 
        LastName: String 
        Email: String! 
        AddressLine1: String 
        AddressLine2: String 
        City: String 
        ContactNumber: String
        OpeningHrs: OpeningHrs
        category: Category
        MenuItems: [MenuItem]
        ImageName: String
        isAvailable: Boolean
        disabled: Boolean
    }

    type User2 {
        _id: ID,
        Id: String! 
        FirstName: String 
        LastName: String 
        Email: String! 
        AddressLine1: String 
        AddressLine2: String 
        City: String 
        ContactNumber: String
        OpeningHrs: OpeningHrs
        category: Category
        MenuItems: [MenuItem]
        ImageName: String
        isAvailable: Boolean
        disabled: Boolean
        Position: String
    }

    type OrderRejection {
        _id: ID,
        OrderId: Float!,
        RejectionList: [String]!
    }

    type MenuCategory {
        _id: ID
        restaurant: String
        Category: String
    }

    


    type Restaurant {
        Id: String
        FirstName: String
        LastName: String
        Email: String
        AddressLine1: String
        AddressLine2: String
        City: String
        ContactNumber: String
        OpeningHrs: OpeningHrs
        category: ID
    }


    type RestaurantsByCategories {
        Restaurant: Restaurant
        Category: Category
    }

    type OrderItem {
        itemName: String
        chickenFlavour1: String
        chickenFlavour2: String
        drink: String
        otherIntructions: String
        itemCost: Float
        imageName: String
    }

    input OrderItem2 {
        itemName: String
        chickenFlavour1: String
        chickenFlavour2: String
        drink: String
        otherIntructions: String
        itemCost: Float
        imageName: String
    }

    type Order{
        _id: Float
        Id: String,
        OrderItems: JSONObject 
        OrderStatus:  String
        OrderTotal: Float
        OrderDate: String
        Rider: Rider,
        DeliveryAddress: String,
        PaymentMethod: String,
        AdditionalInfo: String
        DeliveryFee: Float,
        GCT: Float,
        ServiceCharge: Float,
        CartTotal: Float,
        OrderType: String,
        Restaurant: User
    }

    type OrderUpdated{
        _id: Float
        Id: String,
        userName: String,
        userEmail: String
        OrderItems: JSONObject 
        OrderStatus:  String
        OrderTotal: Float
        OrderDate: String
        Rider: Rider,
        DeliveryAddress: String,
        PaymentMethod: String,
        AdditionalInfo: String
        DeliveryFee: Float,
        GCT: Float,
        ServiceCharge: Float,
        CartTotal: Float,
        OrderType: String,
        Restaurant: User
    }

    type PaySetting {
        _id: ID,
        perDeliveryEnabled: Boolean,
        percentagePerOrderTotal: Boolean,
        value: Float,
        closed: Boolean,
        badWeather: Boolean,
        holiday: Boolean,
        message: String
    }

    type Package {
        PackageInfo: JSONObject,
        Customer: User,
        TrackingNumber: String,
        Pickup: Boolean,
        Deliver: Boolean
    }

    type Mailbox {
        Status: String,
        Uid: User,
        MailboxNum: String
    }

    type ShippingAddress {
        _id: ID,
        AirFreight: JSONObject,
        SeaFreight: JSONObject
    }

    type Query {
        hello: String

        getAllRoles: [Role!]!

        getCategories: [Category!]!

        getOrders: [Order]

        getOrdersByRiderId(
            Rider: ID
        ): [Order]

        getOrdersByRestaurantId(
            Restaurant: ID
        ): [Order]

        getOrdersByDateAndTime(
            StartDate: String,
            EndDate: String,
        ): [Order]

        getPaySettings: [PaySetting!]!

    }

    type Subscription {
        orderCreated: Order
    }

    type Mutation {
        createRole(description: String): Role!

        getRole(_id: String): Role

        getUserInRole(UserID: String): UserInRole

        addUserToRole(UserID: String, RoleID: String): UserInRole

        createUser(
            Id: String, FirstName: String, LastName: String, 
            Email: String, AddressLine1: String, AddressLine2: String, 
            City: String, ContactNumber: String, OpeningHrs: OpeningHrs2,
            category: ID, MenuItems: [MenuItem2]
            ): User!

        updateUser(
            _id: String, FirstName: String, LastName: String, 
            Email: String, AddressLine1: String, AddressLine2: String, 
            City: String, ContactNumber: String,
            ): User!

        getUser(Id: String): User

        createOrderRejection(
            OrderId: Float, RejectionList: [String]
        ): OrderRejection

        updateOrderRejection(
            _id: String, OrderId: Float, RejectionList: [String]
        ): OrderRejection

        getOrderRejection(OrderId: Float): OrderRejection

        

        getMenucategories(Id: String): User
        
        createRestaurant(
            Id: String, FirstName: String, LastName: String, 
            Email: String, AddressLine1: String, AddressLine2: String, 
            City: String, ContactNumber: String, OpeningHrs: JSONObject,
            category: ID, MenuItems: JSONObject, ImageName: String
            ): User!

        createStaff(
            Id: String, FirstName: String, LastName: String, 
            Email: String, AddressLine1: String, AddressLine2: String, 
            City: String, ContactNumber: String, MenuItems: JSONObject, 
            isAvailable: Boolean, disabled: Boolean, ImageName: String,
            Position: String
            ): User!

        updateStaff(
            _id: String, MenuItems: JSONObject, FirstName: String, LastName: String, 
            Email: String, AddressLine1: String, AddressLine2: String, 
            City: String, ContactNumber: String, isAvailable: Boolean,
            disabled: Boolean, ImageName: String, Position: String
            ): User!

        getRestaurants: [User!]!

        getRiders: [User2!]!

        getStaff: [User2!]!

        getRider(_id: String): User!

        getRestaurant(_id: String): User!

        updateRiderStatus(
            _id: String,
            isAvailable: Boolean,
            disabled: Boolean
        ): User!

        createMenuItem(
            RetaurantID: String,
            MenuCategory:  String,
            ItemName:String,
            ItemCost: String,
            ItemDescription: String,
            ): MenuItem!
        
        createCategory(
            Id: String,
            Name: String
        ): Category

        createMenuCategory(
            restaurant: String,
            Category: String
        ): MenuCategory

        createOrder(
            Id: String,
            OrderItems: JSONObject ,
            OrderStatus:  String,
            OrderTotal: Float,
            OrderDate: String,
            Rider: String,
            DeliveryAddress: String,
            PaymentMethod: String,
            AdditionalInfo: String,
            DeliveryFee: Float,
            GCT: Float,
            ServiceCharge: Float,
            CartTotal: Float,
            OrderType: String,
            Restaurant: String
        ): Order

        getOrdersByUserId(
            Id: String
        ): [Order]

        getOrdersByRiderId(
            Rider: ID
        ): [Order]

        getOrdersByRiderIdAnDate(
            Rider: ID,
            StartDate: String,
            EndDate: String,
        ):[Order]

        getOrders: [Order]
        
        updateOrder(
            _id: ID
            Id: String,
            OrderItems: JSONObject ,
            OrderStatus:  String,
            OrderTotal: Float,
            OrderDate: String,
            Rider: String,
            DeliveryAddress: String,
            PaymentMethod: String,
            AdditionalInfo: String,
            DeliveryFee: Float,
            GCT: Float,
            ServiceCharge: Float,
            CartTotal: Float,
            OrderType: String): OrderUpdated
        
        getPaySettings: [PaySetting!]!
        
        updatePaySetting(
            _id: ID
            perDeliveryEnabled: Boolean,
            percentagePerOrderTotal: Boolean,
            value: Float): PaySetting

        fetchRestaurantsByCategory(
            categoryID: String
        ): RestaurantsByCategories

        addPackage(
            PackageInfo: JSONObject,
            Customer: ID,
            TrackingNumber: String,
            Pickup: Boolean,
            Deliver: Boolean
            ): Package
            
        getPackageById(TrackingNumber: String): Package 

        updateContactAndAddress(
            _id: ID,
            ALine1: String,
            ALine2: String,
            Contact: String,
            City: String
        ): User

        fetchShippingAddress: [ShippingAddress!]!

        updateShippingAddress(
            _id: ID,
            AirFreight: JSONObject,
            SeaFreight: JSONObject
        ): ShippingAddress

        getMailboxById(Uid: ID): Mailbox

        addMailbox(
            Status: String,
            Uid: ID,
            MailboxNum: String
        ): Mailbox

        getMailboxByMbox(
            MailboxNum: String
        ): Mailbox

        updateRestaurantById (
            _id: ID, Id: String! , FirstName: String!, 
            LastName: String!, Email: String!, 
            AddressLine1: String, AddressLine2: String, 
            City: String, ContactNumber: String, 
            OpeningHrs: JSONObject, category: ID, 
            MenuItems: JSONObject, ImageName: String
        ): User

        getCategories: [Category!]!
    }
`;

export default typeDefs;