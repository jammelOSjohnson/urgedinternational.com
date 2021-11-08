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

export const GET_USER_MUTATION = gql`
    mutation getUser($Id: String!) {
        getUser(Id: $Id){
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
    mutation getRole($id: String!) {
        getRole(id: $id){
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

export const GET_RESTAURANTS = gql`
    mutation getRestaurants {
        getRestaurants{
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
        $CartTotal: Float
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
                CartTotal: $CartTotal
                ){
                    Id
                    OrderItems 
                    OrderStatus
                    OrderTotal
                    OrderDate
                    Rider
                    DeliveryAddress 
                    PaymentMethod
                    AdditionalInfo
                    DeliveryFee
                    GCT
                    ServiceCharge
                    CartTotal
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
            Rider
            DeliveryAddress 
            PaymentMethod
            AdditionalInfo
            DeliveryFee
            GCT
            ServiceCharge
            CartTotal
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
            Rider
        }
    }
`