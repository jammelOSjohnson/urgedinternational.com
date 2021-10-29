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