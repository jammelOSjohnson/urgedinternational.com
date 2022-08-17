import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
    mutation createUser(
        $Id: String! ,$FirstName: String!, 
        $LastName: String!, $Email: String!, 
        $AddressLine1: String, $AddressLine2: String, 
        $City: String, $ContactNumber: String) {
        createUser(
            Id: $Id ,FirstName: $FirstName, LastName: $LastName, Email: $Email, 
            AddressLine1: $AddressLine1, AddressLine2: $AddressLine2, City: $City,
            ContactNumber: $ContactNumber
        ){
            _id
            Id
            FirstName 
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
        }
    }
`

export const UPDATE_USER_MUTATION = gql`
    mutation updateUser(
        $_id: String! ,$FirstName: String!, 
        $LastName: String!, $Email: String!, 
        $AddressLine1: String, $AddressLine2: String, 
        $City: String, $ContactNumber: String) {
            updateUser(
            _id: $_id ,FirstName: $FirstName, LastName: $LastName, Email: $Email, 
            AddressLine1: $AddressLine1, AddressLine2: $AddressLine2, City: $City,
            ContactNumber: $ContactNumber
        ){
            _id
            FirstName 
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
        }
    }
`

export const GET_USER_MUTATION = gql`
    mutation getUser($Id: String!) {
        getUser(Id: $Id){
            _id
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
        }
    }
`

export const GET_USER_IN_ROLE = gql`
    mutation getUserInRole($UserID: String!) {
        getUserInRole(UserID: $UserID){
            UserID
            RoleID
        }
    }
`

export const GET_ROLE = gql`
    mutation getRole($_id: String!) {
        getRole(_id: $_id){
            _id
            description
        }
    }
`

export const CREATE_ROLE = gql`
    mutation addUserToRole($UserID: String!, $RoleID: String!) {
        addUserToRole(UserID: $UserID, RoleID: $RoleID){
            UserID
            RoleID
        }
    }
`

export const CREATE_RESTAURANT_MUTATION = gql`
    mutation createRestaurant(
        $MenuItems: JSONObject,
        $Id: String! ,$FirstName: String!, 
        $LastName: String!, $Email: String!, 
        $AddressLine1: String, $AddressLine2: String, 
        $City: String, $ContactNumber: String, $OpeningHrs: JSONObject, 
        $category: ID, $ImageName: String) {
        createRestaurant(
            MenuItems: $MenuItems, Id: $Id ,FirstName: $FirstName, LastName: $LastName, Email: $Email, 
            AddressLine1: $AddressLine1, AddressLine2: $AddressLine2, City: $City,
            ContactNumber: $ContactNumber, OpeningHrs: $OpeningHrs, category: $category, ImageName: $ImageName
        ){
            _id
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
            OpeningHrs{
                Sunday
                Monday
                Tuesday
                Wednesday
                Thursday
                Friday
                Saturday
            }
            category{
                _id
                Name
                Id
            }
            MenuItems{
                MenuCategory
                ItemName
                ItemCost
                ItemDescription
                ImageName
            }
            ImageName
        }
    }
`

export const GET_RESTAURANTS = gql`
    mutation getRestaurants {
        getRestaurants{
            _id
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
            OpeningHrs{
            Sunday
            Monday
            Tuesday
            Wednesday
            Thursday
            Friday
            Saturday
            }
            category{
                _id
                Name
                Id
            }
            MenuItems{
                MenuCategory
                ItemName
                ItemCost
                ItemDescription
                ImageName
            }
            ImageName
        }
    }
`

export  const GET_RIDERS = gql`
     mutation getRiders {
        getRiders{
            _id
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
            isAvailable
            disabled
            ImageName
        }
    }
`

export  const GET_RIDER = gql`
     mutation getRider($_id: String!) {
        getRider(_id: $_id){
            _id
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
            isAvailable
            disabled
            ImageName
        }
    }
`

export  const GET_RESTAURANT = gql`
     mutation getRestaurant($_id: String!) {
        getRestaurant(_id: $_id){
            _id
            MenuItems{
                MenuCategory
                ItemName
                ItemCost
                ItemDescription
                ImageName
            }
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
            OpeningHrs{
                Sunday
                Monday
                Tuesday
                Wednesday
                Thursday
                Friday
                Saturday
            }
            category{
                _id
                Name
                Id
            }
            ImageName
        }
    }
`

export  const UPDATE_RIDER_STATUS = gql`
     mutation updateRiderStatus(
        $_id: String!,
        $isAvailable: Boolean,
        $disabled: Boolean
        ) {
        updateRiderStatus(
            _id: $_id,
            isAvailable: $isAvailable,
            disabled: $disabled
        ){
            _id
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
            isAvailable
            disabled
            ImageName
        }
    }
`

export const GET_MENU_CATEGORIES = gql`
    mutation getMenucategories($Id: String!) {
        getMenucategories(Id: $Id){
            MenuItems{
                MenuCategory
            }
        }
    }
`


export const CREATE_ORDER = gql`
    #scalar GraphQLDateTime

    

    mutation createOrder(
        $Id: String!, 
        $OrderItems: JSONObject,
        $OrderStatus: String,
        $OrderTotal: Float,
        $OrderDate: String,
        $Rider: String ,
        $DeliveryAddress: String, 
        $PaymentMethod: String, 
        $AdditionalInfo: String,
        $DeliveryFee: Float,
        $GCT: Float,
        $ServiceCharge: Float,
        $CartTotal: Float,
        $OrderType: String,
        $Restaurant: String
        ) {
            createOrder(
                Id: $Id, 
                OrderItems: $OrderItems, 
                OrderStatus: $OrderStatus,
                OrderTotal: $OrderTotal,
                OrderDate: $OrderDate,
                Rider: $Rider,
                DeliveryAddress: $DeliveryAddress, 
                PaymentMethod: $PaymentMethod, 
                AdditionalInfo: $AdditionalInfo,
                DeliveryFee: $DeliveryFee,
                GCT: $GCT,
                ServiceCharge: $ServiceCharge,
                CartTotal: $CartTotal,
                OrderType: $OrderType,
                Restaurant: $Restaurant
                ){
                    _id
                    Id
                    OrderItems 
                    OrderStatus
                    OrderTotal
                    OrderDate
                    Rider{
                        _id
                        Id 
                        FirstName 
                        LastName 
                        Email
                        AddressLine1
                        AddressLine2
                        City 
                        ContactNumber
                        ImageName
                        isAvailable
                        disabled
                    }
                    DeliveryAddress 
                    PaymentMethod
                    AdditionalInfo
                    DeliveryFee
                    GCT
                    ServiceCharge
                    CartTotal
                    OrderType
                    Restaurant{
                        _id
                        Id
                        FirstName 
                        LastName
                        Email
                        AddressLine1
                        AddressLine2
                        City
                        ContactNumber
                    }
                }
    }
`

export const GET_ORDERS_BY_USERID = gql`
    mutation getOrdersByUserId($Id: String!) {
        getOrdersByUserId(Id: $Id){
            _id
            Id
            OrderItems 
            OrderStatus
            OrderTotal
            OrderDate
            Rider{
                _id
                Id 
                FirstName 
                LastName 
                Email
                AddressLine1
                AddressLine2
                City 
                ContactNumber
                ImageName
                isAvailable
                disabled
            }
            DeliveryAddress 
            PaymentMethod
            AdditionalInfo
            DeliveryFee
            GCT
            ServiceCharge
            CartTotal
            OrderType
        }
    }
`

export const GET_ORDERS_BY_RIDERID = gql`
    mutation getOrdersByRiderId($Rider: ID!) {
        getOrdersByRiderId(Rider: $Rider){
            _id
            Id
            OrderItems 
            OrderStatus
            OrderTotal
            OrderDate
            Rider{
                _id
                Id 
                FirstName 
                LastName 
                Email
                AddressLine1
                AddressLine2
                City 
                ContactNumber
                ImageName
                isAvailable
                disabled
            }
            DeliveryAddress 
            PaymentMethod
            AdditionalInfo
            DeliveryFee
            GCT
            ServiceCharge
            CartTotal
            OrderType
            Restaurant{
                _id
                Id
                FirstName 
                LastName
                Email
                AddressLine1
                AddressLine2
                City
                ContactNumber
            }
        }
    }
`

export const GET_ORDER_REJECTLIST_BY_ORDERID = gql`
    mutation getOrderRejection($OrderId: Float!) {
        getOrderRejection(OrderId: $OrderId){
            _id,
        OrderId,
        RejectionList
        }
    }
`

export const CREATE_ORDER_REJECTLIST = gql`
    mutation createOrderRejection($OrderId: Float!, $RejectionList: [String]) {
        createOrderRejection(OrderId: $OrderId, RejectionList: $RejectionList){
            _id,
        OrderId,
        RejectionList
        }
    }
`

export const UPDATE_ORDER_REJECTLIST = gql`
    mutation updateOrderRejection($_id: String, $OrderId: Float!, $RejectionList: [String]) {
        updateOrderRejection(_id: $_id, OrderId: $OrderId, RejectionList: $RejectionList){
            _id,
        OrderId,
        RejectionList
        }
    }
`

export const GET_ORDERS_BY_RIDERID_AND_DATE = gql`
    mutation getOrdersByRiderIdAnDate($Rider: ID!, $StartDate: String!, $EndDate: String!) {
        getOrdersByRiderIdAnDate(Rider: $Rider, StartDate: $StartDate, EndDate: $EndDate){
            _id
            Id
            OrderItems 
            OrderStatus
            OrderTotal
            OrderDate
            Rider{
                _id
                Id 
                FirstName 
                LastName 
                Email
                AddressLine1
                AddressLine2
                City 
                ContactNumber
                ImageName
                isAvailable
                disabled
            }
            DeliveryAddress 
            PaymentMethod
            AdditionalInfo
            DeliveryFee
            GCT
            ServiceCharge
            CartTotal
            OrderType
        }
    }
`

export const GET_ORDERS = gql`
    mutation getOrders {
        getOrders{
            _id
            Id
            OrderItems 
            OrderStatus
            OrderTotal
            OrderDate
            Rider{
                _id
                Id 
                FirstName 
                LastName 
                Email
                AddressLine1
                AddressLine2
                City 
                ContactNumber
                ImageName
                isAvailable
                disabled
            }
            DeliveryAddress 
            PaymentMethod
            AdditionalInfo
            DeliveryFee
            GCT
            ServiceCharge
            CartTotal
            OrderType
            Restaurant{
                _id
                Id
                FirstName 
                LastName
                Email
                AddressLine1
                AddressLine2
                City
                ContactNumber
            }
        }
    }
`

export const UPDATE_ORDER = gql`
    #scalar GraphQLDateTime

    mutation updateOrder(
        $_id: ID!
        $Id: String!, 
        $OrderItems: JSONObject,
        $OrderStatus: String,
        $OrderTotal: Float,
        $OrderDate: String,
        $Rider: String ,
        $DeliveryAddress: String, 
        $PaymentMethod: String, 
        $AdditionalInfo: String,
        $DeliveryFee: Float,
        $GCT: Float,
        $ServiceCharge: Float,
        $CartTotal: Float,
        $OrderType: String
    ) {
        updateOrder(
            _id: $_id,
            Id: $Id, 
            OrderItems: $OrderItems, 
            OrderStatus: $OrderStatus,
            OrderTotal: $OrderTotal,
            OrderDate: $OrderDate,
            Rider: $Rider,
            DeliveryAddress: $DeliveryAddress, 
            PaymentMethod: $PaymentMethod, 
            AdditionalInfo: $AdditionalInfo,
            DeliveryFee: $DeliveryFee,
            GCT: $GCT,
            ServiceCharge: $ServiceCharge,
            CartTotal: $CartTotal,
            OrderType: $OrderType
        ){
            _id
            Id
            OrderItems 
            OrderStatus
            OrderTotal
            OrderDate
            Rider{
                _id
                Id 
                FirstName 
                LastName 
                Email
                AddressLine1
                AddressLine2
                City 
                ContactNumber
                ImageName
                isAvailable
                disabled
            }
            DeliveryAddress 
            PaymentMethod
            AdditionalInfo
            DeliveryFee
            GCT
            ServiceCharge
            CartTotal
            OrderType,
            userName,
            userEmail
        }
    }
`

export const UPDATE_PAY_SETTING = gql`
    #scalar GraphQLDateTime
    mutation updatePaySetting(
        $_id: ID!
        $perDeliveryEnabled: Boolean!, 
        $percentagePerOrderTotal: Boolean!,
        $value: Float!,
    ) {
        updatePaySetting(
            _id: $_id,
            perDeliveryEnabled: $perDeliveryEnabled, 
            percentagePerOrderTotal: $percentagePerOrderTotal, 
            value: $value,
        ){
            _id
            perDeliveryEnabled
            percentagePerOrderTotal 
            value
        }
    }
`

export const GET_PAY_SETTINGS = gql`
    mutation  getPaySettings {
        getPaySettings{
            _id
            perDeliveryEnabled
            percentagePerOrderTotal
            value
        }
    }
`

export const FETCH_SHIPPING_ADDRESS = gql`
    mutation  fetchShippingAddress {
        fetchShippingAddress{
            _id
            AirFreight
            SeaFreight
        }
    }
`

export const UPDATE_SHIPPING_ADDRESS = gql`
    #scalar GraphQLDateTime
    mutation updateShippingAddress(
        $_id: ID!
        $AirFreight: JSONObject!, 
        $SeaFreight: JSONObject!
    ) {
        updateShippingAddress(
            _id: $_id,
            AirFreight: $AirFreight, 
            SeaFreight: $SeaFreight
        ){
            _id
            AirFreight
            SeaFreight
        }
    }
`

export const ADD_PACKAGE_MUTATION = gql`
mutation addPackage($PackageInfo: JSONObject! ,$Customer: ID!,
                    $TrackingNumber: String!, $Pickup: Boolean, 
                    $Deliver: Boolean) {
                        addPackage(PackageInfo: $PackageInfo ,Customer: $Customer,
                            TrackingNumber: $TrackingNumber, Pickup: $Pickup, Deliver: $Deliver){
                            PackageInfo,
                            Customer{
                                _id
                                Id
                                FirstName
                                LastName
                                Email
                                AddressLine1
                                AddressLine2
                                City
                                ContactNumber
                            },
                            TrackingNumber,
                            Pickup,
                            Deliver
                        }
}
`

export const GET_PACKAGE_BYID_MUTATION = gql`
mutation getPackageById($TrackingNumber: String!) {
    getPackageById(TrackingNumber: $TrackingNumber){
        PackageInfo,
        Customer{
            _id
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
        },
        Pickup,
        Deliver
    }
}
`

export const UPDATE_CONTACT_AND_ADDRESS_BYID_MUTATION = gql`
mutation updateContactAndAddress($_id: ID!, $ALine1: String, $ALine2: String,
                                $Contact: String, $City: String,) {
    updateContactAndAddress(_id: $_id, ALine1: $ALine1, ALine2: $ALine2,
                            Contact: $Contact, City: $City,){
        _id
        Id
        FirstName
        LastName
        Email
        AddressLine1
        AddressLine2
        City
        ContactNumber
    }
}
`

export const ADD_MAILBOXNUM_MUTATION = gql`
mutation addMailbox($Status: String, $Uid: ID!, $MailboxNum: String) {
    addMailbox(Status: $Status, Uid: $Uid, MailboxNum: $MailboxNum){
        Status
        Uid{
            _id
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
        }
        MailboxNum
    }
}
`

export const GET_MAILBOX_BYID_MUTATION = gql`
mutation getMailboxById($Uid: ID!) {
    getMailboxById(Uid: $Uid){
        Status
        Uid{
            _id
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
        }
        MailboxNum
    }
}
`

export const GET_MAILBOX_BYMBOX_MUTATION = gql`
mutation getMailboxByMbox($MailboxNum: String!) {
    getMailboxByMbox(MailboxNum: $MailboxNum){
        Status
        Uid{
            _id
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
        }
        MailboxNum
    }
}
`

export const UPDATE_RESTAURANT_BYID = gql`
    mutation updateRestaurantById(
        $_id: ID, $Id: String!, $FirstName: String!, 
        $LastName: String!, $Email: String!, 
        $AddressLine1: String, $AddressLine2: String, 
        $City: String, $ContactNumber: String, 
        $OpeningHrs: JSONObject, $category: ID, 
        $MenuItems: JSONObject, $ImageName: String

    ) {
        updateRestaurantById(_id: $_id, Id:$Id, FirstName:$FirstName, 
            LastName:$LastName, Email:$Email, 
            AddressLine1:$AddressLine1, AddressLine2:$AddressLine2, 
            City:$City, ContactNumber:$ContactNumber, 
            OpeningHrs:$OpeningHrs, category:$category, 
            MenuItems:$MenuItems, ImageName:$ImageName){
            Id
            FirstName
            LastName
            Email
            AddressLine1
            AddressLine2
            City
            ContactNumber
            OpeningHrs{
            Sunday
            Monday
            Tuesday
            Wednesday
            Thursday
            Friday
            Saturday
            }
            category{
                _id
                Name
                Id
            }
            MenuItems{
                MenuCategory
                ItemName
                ItemCost
                ItemDescription
                ImageName
            },
            ImageName
        }
    }
`

export const GET_CATEGORIES = gql`
    mutation getCategories{
        getCategories {
            _id
            Id
            Name
        }
    }
`
