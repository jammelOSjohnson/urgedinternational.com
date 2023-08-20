import { gql } from "@apollo/client";

export const GET_ALL_ROLES = gql`
  query {
    getAllRoles {
      id
      description
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    getCategories {
      Id
      Name
    }
  }
`;

export const GET_ORDERS = gql`
  query getOrders {
    getOrders {
      _id
      Id
      OrderItems
      OrderStatus
      OrderTotal
      OrderDate
      Rider {
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
      Restaurant {
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
`;

export const GET_ORDERS_BY_RIDERID = gql`
  query getOrdersByRiderId($Rider: ID!) {
    getOrdersByRiderId(Rider: $Rider) {
      _id
      Id
      OrderItems
      OrderStatus
      OrderTotal
      OrderDate
      Rider {
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
      Restaurant {
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
`;

export const GET_ORDERS_BY_RESTAURANTID = gql`
  query getOrdersByRestaurantId($Restaurant: ID!) {
    getOrdersByRestaurantId(Restaurant: $Restaurant) {
      _id
      Id
      OrderItems
      OrderStatus
      OrderTotal
      OrderDate
      Rider {
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
      Restaurant {
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
`;

export const GET_ORDERS_BY_DATE_AND_TYPE = gql`
  query getOrdersByDateAndTime($StartDate: String!, $EndDate: String!) {
    getOrdersByDateAndTime(StartDate: $StartDate, EndDate: $EndDate) {
      _id
      Id
      OrderItems
      OrderStatus
      OrderTotal
      OrderDate
      Rider {
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
      BillingInfo {
        oId
        txndate
        ccbin
        processor
        saddr2
        saddr1
        cccountry
        Expmonth
        hashalgorithm
        endpointTransactionId
        currency
        processorresponsecode
        chargetotal
        email
        terminalid
        associationResponseCode
        approvalcode
        expyear
        responsehash
        responsecode3dsecure
        bstate
        schemeTransactionId
        tdate
        installmentsinterest
        bname
        phone
        ccbrand
        sname
        sstate
        refnumber
        txntype
        paymentMethod
        txndatetime
        cardnumber
        ipgTransactionId
        scountry
        baddr1
        bcountry
        baddr2
        status
      }
      DeliveryAddress
      PaymentMethod
      AdditionalInfo
      DeliveryFee
      GCT
      ServiceCharge
      CartTotal
      OrderType
      Restaurant {
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
`;

export const GET_PAY_SETTINGS = gql`
  query getPaySettings {
    getPaySettings {
      _id
      perDeliveryEnabled
      percentagePerOrderTotal
      value
    }
  }
`;
