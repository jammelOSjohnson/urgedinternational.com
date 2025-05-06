import { gql } from "@apollo/client";

export const GET_ORDERS_BY_RIDERID = gql`
  mutation getOrdersByRiderId($Rider: ID!) {
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

export const UPDATE_ORDER = gql`
  #scalar GraphQLDateTime

  mutation updateOrder(
    $_id: ID!
    $Id: String!
    $OrderItems: JSONObject
    $OrderStatus: String
    $OrderTotal: Float
    $OrderDate: String
    $Rider: String
    $DeliveryAddress: String
    $PaymentMethod: String
    $AdditionalInfo: String
    $DeliveryFee: Float
    $GCT: Float
    $ServiceCharge: Float
    $CartTotal: Float
    $OrderType: String
  ) {
    updateOrder(
      _id: $_id
      Id: $Id
      OrderItems: $OrderItems
      OrderStatus: $OrderStatus
      OrderTotal: $OrderTotal
      OrderDate: $OrderDate
      Rider: $Rider
      DeliveryAddress: $DeliveryAddress
      PaymentMethod: $PaymentMethod
      AdditionalInfo: $AdditionalInfo
      DeliveryFee: $DeliveryFee
      GCT: $GCT
      ServiceCharge: $ServiceCharge
      CartTotal: $CartTotal
      OrderType: $OrderType
    ) {
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
      userName
      userEmail
    }
  }
`;

export const CREATE_ORDER = gql`
  #scalar GraphQLDateTime

  mutation createOrder(
    $Id: String!
    $OrderItems: JSONObject
    $OrderStatus: String
    $OrderTotal: Float
    $OrderDate: String
    $Rider: String
    $BillingInfo: String
    $DeliveryAddress: String
    $PaymentMethod: String
    $AdditionalInfo: String
    $DeliveryFee: Float
    $GCT: Float
    $ServiceCharge: Float
    $CartTotal: Float
    $OrderType: String
    $Restaurant: String
  ) {
    createOrder(
      Id: $Id
      OrderItems: $OrderItems
      OrderStatus: $OrderStatus
      OrderTotal: $OrderTotal
      OrderDate: $OrderDate
      Rider: $Rider
      BillingInfo: $BillingInfo
      DeliveryAddress: $DeliveryAddress
      PaymentMethod: $PaymentMethod
      AdditionalInfo: $AdditionalInfo
      DeliveryFee: $DeliveryFee
      GCT: $GCT
      ServiceCharge: $ServiceCharge
      CartTotal: $CartTotal
      OrderType: $OrderType
      Restaurant: $Restaurant
    ) {
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

export const GET_ORDERS = gql`
  mutation getOrders {
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

export const GET_ORDER_REJECTLIST_BY_ORDERID = gql`
  mutation getOrderRejection($OrderId: Float!) {
    getOrderRejection(OrderId: $OrderId) {
      _id
      OrderId
      RejectionList
    }
  }
`;

export const CREATE_ORDER_REJECTLIST = gql`
  mutation createOrderRejection($OrderId: Float!, $RejectionList: [String]) {
    createOrderRejection(OrderId: $OrderId, RejectionList: $RejectionList) {
      _id
      OrderId
      RejectionList
    }
  }
`;

export const UPDATE_ORDER_REJECTLIST = gql`
  mutation updateOrderRejection(
    $_id: String
    $OrderId: Float!
    $RejectionList: [String]
  ) {
    updateOrderRejection(
      _id: $_id
      OrderId: $OrderId
      RejectionList: $RejectionList
    ) {
      _id
      OrderId
      RejectionList
    }
  }
`;

export const GET_PACKAGE_BYID_MUTATION = gql`
  mutation getPackageById($TrackingNumber: String!) {
    getPackageById(TrackingNumber: $TrackingNumber) {
      PackageInfo
      Customer {
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
      Pickup
      Deliver
    }
  }
`;

export const ADD_PACKAGE_MUTATION = gql`
  mutation addPackage(
    $PackageInfo: JSONObject!
    $Customer: ID!
    $TrackingNumber: String!
    $Pickup: Boolean
    $Deliver: Boolean
  ) {
    addPackage(
      PackageInfo: $PackageInfo
      Customer: $Customer
      TrackingNumber: $TrackingNumber
      Pickup: $Pickup
      Deliver: $Deliver
    ) {
      PackageInfo
      Customer {
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
      TrackingNumber
      Pickup
      Deliver
    }
  }
`;

export const UPDATE_CONTACT_AND_ADDRESS_BYID_MUTATION = gql`
  mutation updateContactAndAddress(
    $_id: ID!
    $ALine1: String
    $ALine2: String
    $Contact: String
    $City: String
  ) {
    updateContactAndAddress(
      _id: $_id
      ALine1: $ALine1
      ALine2: $ALine2
      Contact: $Contact
      City: $City
    ) {
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
`;

export const ADD_MAILBOXNUM_MUTATION = gql`
  mutation addMailbox($Status: String, $Uid: ID!, $MailboxNum: String) {
    addMailbox(Status: $Status, Uid: $Uid, MailboxNum: $MailboxNum) {
      Status
      Uid {
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
`;

export const GET_MAILBOX_BYID_MUTATION = gql`
  mutation getMailboxById($Uid: ID!) {
    getMailboxById(Uid: $Uid) {
      Status
      Uid {
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
`;

export const GET_MAILBOX_BYMBOX_MUTATION = gql`
  mutation getMailboxByMbox($MailboxNum: String!) {
    getMailboxByMbox(MailboxNum: $MailboxNum) {
      Status
      Uid {
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
`;

export const FETCH_SHIPPING_ADDRESS = gql`
  mutation FetchShippingAddress {
    fetchShippingAddress {
      _id
      Id
      Address
    }
  }
`;

export const UPDATE_SHIPPING_ADDRESS = gql`
  mutation UpdateShippingAddress($address: ShippingAddressInput!) {
    updateShippingAddress(address: $address) {
      _id
      Id
      Address
    }
  }
`;

export const CREATE_ORDER_BILLING = gql`
  mutation createOrderBilling(
    $oId: String
    $txndate: String
    $ccbin: String
    $processor: String
    $saddr2: String
    $saddr1: String
    $cccountry: String
    $Expmonth: String
    $hashalgorithm: String
    $endpointTransactionId: String
    $currency: String
    $processorresponsecode: String
    $chargetotal: String
    $email: String
    $terminalid: String
    $associationResponseCode: String
    $approvalcode: String
    $expyear: String
    $responsehash: String
    $responsecode3dsecure: String
    $bstate: String
    $schemeTransactionId: String
    $tdate: String
    $installmentsinterest: String
    $bname: String
    $phone: String
    $ccbrand: String
    $sname: String
    $sstate: String
    $refnumber: String
    $txntype: String
    $paymentMethod: String
    $txndatetime: String
    $cardnumber: String
    $ipgTransactionId: String
    $scountry: String
    $baddr1: String
    $bcountry: String
    $baddr2: String
    $status: String
  ) {
    createOrderBilling(
      oId: $oId
      txndate: $txndate
      ccbin: $ccbin
      processor: $processor
      saddr2: $saddr2
      saddr1: $saddr1
      cccountry: $cccountry
      Expmonth: $Expmonth
      hashalgorithm: $hashalgorithm
      endpointTransactionId: $endpointTransactionId
      currency: $currency
      processorresponsecode: $processorresponsecode
      chargetotal: $chargetotal
      email: $email
      terminalid: $terminalid
      associationResponseCode: $associationResponseCode
      approvalcode: $approvalcode
      expyear: $expyear
      responsehash: $responsehash
      responsecode3dsecure: $responsecode3dsecure
      bstate: $bstate
      schemeTransactionId: $schemeTransactionId
      tdate: $tdate
      installmentsinterest: $installmentsinterest
      bname: $bname
      phone: $phone
      ccbrand: $ccbrand
      sname: $sname
      sstate: $sstate
      refnumber: $refnumber
      txntype: $txntype
      paymentMethod: $paymentMethod
      txndatetime: $txndatetime
      cardnumber: $cardnumber
      ipgTransactionId: $ipgTransactionId
      scountry: $scountry
      baddr1: $baddr1
      bcountry: $bcountry
      baddr2: $baddr2
      status: $status
    ) {
      _id
      approvalcode
      associationResponseCode
      baddr1
      baddr2
      bcountry
      bname
      bstate
      cardnumber
      ccbin
      ccbrand
      cccountry
      chargetotal
      currency
      email
      endpointTransactionId
      expyear
      hashalgorithm
      ipgTransactionId
      installmentsinterest
      oId
      paymentMethod
      phone
      processor
      processorresponsecode
      refnumber
      responsecode3dsecure
      responsehash
      saddr1
      schemeTransactionId
      saddr2
      scountry
      sstate
      sname
      status
      tdate
      terminalid
      txndate
      txntatetime
      txntype
    }
  }
`;

export const GET_ORDERS_BY_RIDERID_AND_DATE = gql`
  mutation GetOrdersByRiderIdAndDate($riderId: String!, $date: String!) {
    getOrdersByRiderIdAndDate(riderId: $riderId, date: $date) {
      _id
      Id
      OrderNumber
      Status
      Total
      CreatedAt
    }
  }
`;
