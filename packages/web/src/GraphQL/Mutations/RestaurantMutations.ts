import { gql } from "@apollo/client";

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
      Parish
      deliveryFee
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
    $Parish: String
    $deliveryFee: Float
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
      Parish: $Parish
      deliveryFee: $deliveryFee
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
      Parish
      deliveryFee
    }
  }
`;

export const UPDATE_RESTAURANT_BYID = gql`
  mutation UpdateRestaurantById($restaurant: RestaurantInput!, $id: String!) {
    updateRestaurantById(restaurant: $restaurant, id: $id) {
      _id
      Id
      Name
      Address
      Status
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
      Parish
      deliveryFee
    }
  }
`;

export const UPDATE_RESTAURANT_STATUS = gql`
  mutation UpdateRestaurantStatus($id: String!, $status: Boolean!) {
    updateRestaurantStatus(id: $id, status: $status) {
      _id
      Id
      Name
      Address
      Status
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

export const GET_CATEGORIES = gql`
  mutation getCategories {
    getCategories {
      _id
      Id
      Name
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
    $Parish: String!
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
      Parish: $Parish
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
      Parish
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
      Parish
    }
  }
`;
