import { gql } from '@apollo/client';

export const GET_ALL_ROLES = gql`

    query {
        getAllRoles {
            id
            description
        }
    }
`

export const GET_CATEGORIES = gql`

    query {
        getCategories {
            Id
            Name
        }
    }
`

// export const GET_RESTAURANTS = gql`
//     query getRestaurants{
//         getRestaurants{
//             Id
//             FirstName
//             LastName
//             Email
//             AddressLine1
//             AddressLine2
//             City
//             ContactNumber
//             OpeningHrs{
//             Sunday
//             Monday
//             Tuesday
//             Wednesday
//             Thursday
//             Friday
//             Saturday
//             }
//             category{
//                 _id
//                 Name
//                 Id
//             }
//         }
//     }
// `