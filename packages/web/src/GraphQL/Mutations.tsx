import { gql } from "@apollo/client";

export const CREATE_HASH_MUTATION = gql`
  mutation createHash(
    $authenticateTransaction: Boolean!
    $bname: String!
    $baddr1: String!
    $baddr2: String!
    $bcountry: String!
    $bstate: String!
    $sname: String!
    $saddr1: String!
    $saddr2: String!
    $sstate: String!
    $scountry: String!
    $chargetotal: String!
    $checkoutoption: String!
    $currency: String!
    $email: String!
    $hash_algorithm: String!
    $language: String!
    $hashExtended: String!
    $paymentMethod: String!
    $phone: String!
    $responseFailURL: String!
    $responseSuccessURL: String!
    $sharedsecret: String!
    $storename: String!
    $timezone: String!
    $transactionNotificationURL: String!
    $txndatetime: String!
    $txntype: String!
  ) {
    createHash(
      authenticateTransaction: $authenticateTransaction
      bname: $bname
      baddr1: $baddr1
      baddr2: $baddr2
      bcountry: $bcountry
      bstate: $bstate
      sname: $sname
      saddr1: $saddr1
      saddr2: $saddr2
      sstate: $sstate
      scountry: $scountry
      chargetotal: $chargetotal
      checkoutoption: $checkoutoption
      currency: $currency
      email: $email
      hash_algorithm: $hash_algorithm
      hashExtended: $hashExtended
      language: $language
      paymentMethod: $paymentMethod
      phone: $phone
      responseFailURL: $responseFailURL
      responseSuccessURL: $responseSuccessURL
      sharedsecret: $sharedsecret
      storename: $storename
      timezone: $timezone
      transactionNotificationURL: $transactionNotificationURL
      txndatetime: $txndatetime
      txntype: $txntype
    ) {
      hash
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $Id: String!
    $FirstName: String!
    $LastName: String!
    $Email: String!
    $AddressLine1: String
    $AddressLine2: String
    $City: String
    $ContactNumber: String
  ) {
    createUser(
      Id: $Id
      FirstName: $FirstName
      LastName: $LastName
      Email: $Email
      AddressLine1: $AddressLine1
      AddressLine2: $AddressLine2
      City: $City
      ContactNumber: $ContactNumber
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

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser(
    $_id: String!
    $FirstName: String!
    $LastName: String!
    $Email: String!
    $AddressLine1: String
    $AddressLine2: String
    $City: String
    $ContactNumber: String
  ) {
    updateUser(
      _id: $_id
      FirstName: $FirstName
      LastName: $LastName
      Email: $Email
      AddressLine1: $AddressLine1
      AddressLine2: $AddressLine2
      City: $City
      ContactNumber: $ContactNumber
    ) {
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
`;

export const GET_USER_MUTATION = gql`
  mutation getUser($Id: String!) {
    getUser(Id: $Id) {
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

export const GET_USER_IN_ROLE = gql`
  mutation getUserInRole($UserID: String!) {
    getUserInRole(UserID: $UserID) {
      UserID
      RoleID
    }
  }
`;

export const GET_ROLE = gql`
  mutation getRole($_id: String!) {
    getRole(_id: $_id) {
      _id
      description
    }
  }
`;

export const CREATE_ROLE = gql`
  mutation addUserToRole($UserID: String!, $RoleID: String!) {
    addUserToRole(UserID: $UserID, RoleID: $RoleID) {
      UserID
      RoleID
    }
  }
`;

export const CREATE_RESTAURANT_MUTATION = gql`
  mutation createRestaurant(
    $MenuItems: JSONObject
    $Id: String!
    $FirstName: String!
    $LastName: String!
    $Email: String!
    $AddressLine1: String
    $AddressLine2: String
    $City: String
    $ContactNumber: String
    $OpeningHrs: JSONObject
    $category: ID
    $ImageName: String
  ) {
    createRestaurant(
      MenuItems: $MenuItems
      Id: $Id
      FirstName: $FirstName
      LastName: $LastName
      Email: $Email
      AddressLine1: $AddressLine1
      AddressLine2: $AddressLine2
      City: $City
      ContactNumber: $ContactNumber
      OpeningHrs: $OpeningHrs
      category: $category
      ImageName: $ImageName
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
      OpeningHrs {
        Sunday
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
      }
      category {
        _id
        Name
        Id
      }
      MenuItems {
        MenuCategory
        ItemName
        ItemCost
        ItemDescription
        ImageName
      }
      ImageName
    }
  }
`;

export const CREATE_STAFF_MUTATION = gql`
  mutation createStaff(
    $MenuItems: JSONObject
    $Id: String!
    $FirstName: String!
    $LastName: String!
    $Email: String!
    $AddressLine1: String
    $AddressLine2: String
    $City: String
    $ContactNumber: String
    $isAvailable: Boolean
    $disabled: Boolean
    $ImageName: String
    $Position: String!
  ) {
    createStaff(
      MenuItems: $MenuItems
      Id: $Id
      FirstName: $FirstName
      LastName: $LastName
      Email: $Email
      AddressLine1: $AddressLine1
      AddressLine2: $AddressLine2
      City: $City
      ContactNumber: $ContactNumber
      isAvailable: $isAvailable
      disabled: $disabled
      ImageName: $ImageName
      Position: $Position
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
      MenuItems {
        MenuCategory
        ItemName
        ItemCost
        ItemDescription
        ImageName
      }
      isAvailable
      disabled
      ImageName
      Position
    }
  }
`;

export const UPDATE_STAFF_MUTATION = gql`
  mutation updateStaff(
    $_id: String!
    $MenuItems: JSONObject
    $FirstName: String!
    $LastName: String!
    $Email: String!
    $AddressLine1: String
    $AddressLine2: String
    $City: String
    $ContactNumber: String
    $isAvailable: Boolean
    $disabled: Boolean
    $ImageName: String
    $Position: String
  ) {
    updateStaff(
      _id: $_id
      MenuItems: $MenuItems
      FirstName: $FirstName
      LastName: $LastName
      Email: $Email
      AddressLine1: $AddressLine1
      AddressLine2: $AddressLine2
      City: $City
      ContactNumber: $ContactNumber
      isAvailable: $isAvailable
      disabled: $disabled
      ImageName: $ImageName
      Position: $Position
    ) {
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
`;

export const GET_RESTAURANTS = gql`
  mutation getRestaurants {
    getRestaurants {
      _id
      Id
      FirstName
      LastName
      Email
      AddressLine1
      AddressLine2
      City
      ContactNumber
      OpeningHrs {
        Sunday
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
      }
      category {
        _id
        Name
        Id
      }
      MenuItems {
        MenuCategory
        ItemName
        ItemCost
        ItemDescription
        ImageName
      }
      ImageName
      disabled
      isAvailable
    }
  }
`;

export const GET_RIDERS = gql`
  mutation getRiders {
    getRiders {
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
      Position
    }
  }
`;

export const GET_STAFF = gql`
  mutation getStaff {
    getStaff {
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
      Position
    }
  }
`;

export const GET_RIDER = gql`
  mutation getRider($_id: String!) {
    getRider(_id: $_id) {
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
`;

export const GET_RESTAURANT = gql`
  mutation getRestaurant($_id: String!) {
    getRestaurant(_id: $_id) {
      _id
      MenuItems {
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
      OpeningHrs {
        Sunday
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
      }
      category {
        _id
        Name
        Id
      }
      ImageName
    }
  }
`;

export const UPDATE_RESTAURANT_STATUS = gql`
  mutation updateRestaurantStatus(
    $_id: String!
    $isAvailable: Boolean
    $disabled: Boolean
  ) {
    updateRestaurantStatus(
      _id: $_id
      isAvailable: $isAvailable
      disabled: $disabled
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
      ImageName
      disabled
      isAvailable
    }
  }
`;

export const UPDATE_RIDER_STATUS = gql`
  mutation updateRiderStatus(
    $_id: String!
    $isAvailable: Boolean
    $disabled: Boolean
  ) {
    updateRiderStatus(
      _id: $_id
      isAvailable: $isAvailable
      disabled: $disabled
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
      isAvailable
      disabled
      ImageName
    }
  }
`;

export const GET_MENU_CATEGORIES = gql`
  mutation getMenucategories($Id: String!) {
    getMenucategories(Id: $Id) {
      MenuItems {
        MenuCategory
      }
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

export const GET_ORDERS_BY_USERID = gql`
  mutation getOrdersByUserId($Id: String!) {
    getOrdersByUserId(Id: $Id) {
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
    }
  }
`;

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

export const GET_ORDERS_BY_RIDERID_AND_DATE = gql`
  mutation getOrdersByRiderIdAnDate(
    $Rider: ID!
    $StartDate: String!
    $EndDate: String!
  ) {
    getOrdersByRiderIdAnDate(
      Rider: $Rider
      StartDate: $StartDate
      EndDate: $EndDate
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

export const UPDATE_PAY_SETTING = gql`
  #scalar GraphQLDateTime
  mutation updatePaySetting(
    $_id: ID!
    $perDeliveryEnabled: Boolean!
    $percentagePerOrderTotal: Boolean!
    $value: Float!
  ) {
    updatePaySetting(
      _id: $_id
      perDeliveryEnabled: $perDeliveryEnabled
      percentagePerOrderTotal: $percentagePerOrderTotal
      value: $value
    ) {
      _id
      perDeliveryEnabled
      percentagePerOrderTotal
      value
    }
  }
`;

export const GET_PAY_SETTINGS = gql`
  mutation getPaySettings {
    getPaySettings {
      _id
      perDeliveryEnabled
      percentagePerOrderTotal
      value
      closed
      badWeather
      holiday
      message
    }
  }
`;

export const FETCH_SHIPPING_ADDRESS = gql`
  mutation fetchShippingAddress {
    fetchShippingAddress {
      _id
      AirFreight
      SeaFreight
    }
  }
`;

export const UPDATE_SHIPPING_ADDRESS = gql`
  #scalar GraphQLDateTime
  mutation updateShippingAddress(
    $_id: ID!
    $AirFreight: JSONObject!
    $SeaFreight: JSONObject!
  ) {
    updateShippingAddress(
      _id: $_id
      AirFreight: $AirFreight
      SeaFreight: $SeaFreight
    ) {
      _id
      AirFreight
      SeaFreight
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

export const UPDATE_RESTAURANT_BYID = gql`
  mutation updateRestaurantById(
    $_id: ID
    $Id: String!
    $FirstName: String!
    $LastName: String!
    $Email: String!
    $AddressLine1: String
    $AddressLine2: String
    $City: String
    $ContactNumber: String
    $OpeningHrs: JSONObject
    $category: ID
    $MenuItems: JSONObject
    $ImageName: String
  ) {
    updateRestaurantById(
      _id: $_id
      Id: $Id
      FirstName: $FirstName
      LastName: $LastName
      Email: $Email
      AddressLine1: $AddressLine1
      AddressLine2: $AddressLine2
      City: $City
      ContactNumber: $ContactNumber
      OpeningHrs: $OpeningHrs
      category: $category
      MenuItems: $MenuItems
      ImageName: $ImageName
    ) {
      Id
      FirstName
      LastName
      Email
      AddressLine1
      AddressLine2
      City
      ContactNumber
      OpeningHrs {
        Sunday
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
      }
      category {
        _id
        Name
        Id
      }
      MenuItems {
        MenuCategory
        ItemName
        ItemCost
        ItemDescription
        ImageName
      }
      ImageName
    }
  }
`;

export const GET_CATEGORIES = gql`
  mutation getCategories {
    getCategories {
      _id
      Id
      Name
    }
  }
`;

export const CREATE_ORDER_Billing = gql`
  mutation CreateOrderBilling(
    $oId: String
    $txndate: String
    $ccbin: String
    $processor: String
    $saddr2: String
    $saddr1: String
    $cccountry: String
    $expmonth: String
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
    $responsecode3Dsecure: String
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
      Expmonth: $expmonth
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
      responsecode3dsecure: $responsecode3Dsecure
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
      oid
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
      txndatetime
      txntype
    }
  }
`;
