import { gql } from '@apollo/client';

export const ORDERS_SUBSCRIPTION = gql`
    subscription OnOrderCreated {
        orderCreated{
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