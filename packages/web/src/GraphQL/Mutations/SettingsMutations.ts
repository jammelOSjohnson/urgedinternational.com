import { gql } from "@apollo/client";

export const FETCH_PAY_SETTINGS = gql`
  mutation fetchPaySettings {
    fetchPaySettings {
      _id
      perDeliveryEnabled
      percentagePerOrderTotal
      value
      closed
      badWeather
      holiday
      message
      deliveryFee
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

export const UPDATE_PAY_SETTING = gql`
  mutation updatePaySetting(
    $_id: ID!
    $perDeliveryEnabled: Boolean!
    $percentagePerOrderTotal: Boolean!
    $value: Float!
    $deliveryFee: Float!
    $closed: Boolean
    $badWeather: Boolean
    $holiday: Boolean
    $message: String
  ) {
    updatePaySetting(
      _id: $_id
      perDeliveryEnabled: $perDeliveryEnabled
      percentagePerOrderTotal: $percentagePerOrderTotal
      value: $value
      deliveryFee: $deliveryFee
      closed: $closed
      badWeather: $badWeather
      holiday: $holiday
      message: $message
    ) {
      _id
      perDeliveryEnabled
      percentagePerOrderTotal
      value
      closed
      badWeather
      holiday
      message
      deliveryFee
    }
  }
`;

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

export const UPDATE_SHIPPING_ADDRESS = gql`
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
