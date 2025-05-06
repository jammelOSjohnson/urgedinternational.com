import { gql } from "@apollo/client";

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
  mutation CreateRole($role: RoleInput!) {
    createRole(role: $role) {
      _id
      Id
      Name
    }
  }
`;

export const GET_RIDERS = gql`
  mutation GetRiders {
    getRiders {
      _id
      Id
      FirstName
      LastName
      Email
    }
  }
`;

export const GET_RIDERS_BY_PARISH = gql`
  mutation GetRidersByParish($parish: String!) {
    getRidersByParish(parish: $parish) {
      _id
      Id
      FirstName
      LastName
      Email
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

export const UPDATE_STAFF_MUTATION = gql`
  mutation UpdateStaff($staff: StaffInput!) {
    updateStaff(staff: $staff) {
      _id
      Id
      FirstName
      LastName
      Email
    }
  }
`;

export const GET_RIDER = gql`
  mutation GetRider($id: String!) {
    getRider(id: $id) {
      _id
      Id
      FirstName
      LastName
      Email
    }
  }
`;

export const UPDATE_RIDER_STATUS = gql`
  mutation UpdateRiderStatus($id: String!, $status: Boolean!) {
    updateRiderStatus(id: $id, status: $status) {
      _id
      Id
      FirstName
      LastName
      Email
      Status
    }
  }
`;

export const GET_ORDERS_BY_USERID = gql`
  mutation GetOrdersByUserId($userId: String!) {
    getOrdersByUserId(userId: $userId) {
      _id
      Id
      OrderNumber
      Status
      Total
      CreatedAt
    }
  }
`;
