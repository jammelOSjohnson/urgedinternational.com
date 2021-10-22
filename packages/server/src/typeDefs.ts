import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Role {
        id: ID!
        description: String!
    }

    type UserInRole {
        id: ID!
        UserID: String
        RoleID: String
    }

    type User {
        Id: String! 
        FirstName: String 
        LastName: String 
        Email: String! 
        AddressLine1: String 
        AddressLine2: String 
        City: String 
        ContactNumber: String
        OpeningHrs: OpeningHrs
        category: Category
    }

    type Category {
        _id: ID
        Id: String,
        Name: String    
    }

    type UserOutput {
        Id: String! 
        FirstName: String 
        LastName: String 
        Email: String! 
        AddressLine1: String 
        AddressLine2: String 
        City: String 
        ContactNumber: String
        OpeningHrs: OpeningHrs
        category: Category
    }

    type MenuItem {
        RetaurantID: String,
        MenuCategory:  String,
        ItemName:String,
        ItemCost: String,
        ItemDescription: String,
    }

    type OpeningHrs {
        Sunday: String,
        Monday: String,
        Tuesday: String,
        Wednesday: String,
        Thursday: String,
        Friday: String,
        Saturday: String,
    }

    input OpeningHrs2 {
        Sunday: String,
        Monday: String,
        Tuesday: String,
        Wednesday: String,
        Thursday: String,
        Friday: String,
        Saturday: String,
    }

   

    type Restaurant {
        Id: String,
        FirstName: String,
        LastName: String,
        Email: String,
        AddressLine1: String,
        AddressLine2: String,
        City: String,
        ContactNumber: String,
        OpeningHrs: OpeningHrs,
        category: ID
    }


    type RestaurantsByCategories {
        Restaurant: Restaurant
        Category: Category
    }

    type Query {
        hello: String

        getAllRoles: [Role!]!

        getCategories: [Category!]!
    }
    

    type Mutation {
        createRole(description: String): Role!

        getRole(id: String): Role!

        getUserInRole(UserID: String): UserInRole

        addUserToRole(UserID: String, RoleID: String): UserInRole!

        createUser(
            Id: String, FirstName: String, LastName: String, 
            Email: String, AddressLine1: String, AddressLine2: String, 
            City: String, ContactNumber: String, OpeningHrs: OpeningHrs2,
            category: ID
            ): User!
            
        getUser(Id: String): User

        getRestaurants: [User!]!

        createMenuItem(
            RetaurantID: String,
            MenuCategory:  String,
            ItemName:String,
            ItemCost: String,
            ItemDescription: String,
            ): MenuItem!
        
        createCategory(
            Id: String,
            Name: String
        ): Category

        fetchRestaurantsByCategory(
            categoryID: String
        ):RestaurantsByCategories 

        
    }
`;

export default typeDefs;