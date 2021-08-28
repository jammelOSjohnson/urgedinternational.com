import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Role {
        id: ID!
        description: String!
    }

    type UserInRole {
        id: ID!
        UserID: String!
        RoleID: String!
    }

    type User {
        Id: String! 
        FirstName: String 
        LastName: String 
        Email: String! 
        AddressLine1: String 
        AddressLine2: String, 
        City: String 
        ContactNumber: String
    }

    type MenuItem {
        RetaurantID: String,
        MenuCategory:  String,
        ItemName:String,
        ItemCost: String,
        ItemDescription: String,
    }

    type Query {
        hello: String

        getAllRoles: [Role!]!
    }

    type Mutation {
        createRole(description: String): Role!

        getUserInRole(UserID: String): UserInRole!

        addUserToRole(UserID: String, RoleID: String): UserInRole!

        createUser(
            Id: String, FirstName: String, LastName: String, 
            Email: String, AddressLine1: String, AddressLine2: String, 
            City: String, ContactNumber: String
            ): User!
            
        getUser(Id: String): User!

        createMenuItem(
            RetaurantID: String,
            MenuCategory:  String,
            ItemName:String,
            ItemCost: String,
            ItemDescription: String,
            ): MenuItem!
    }
`;

export default typeDefs;