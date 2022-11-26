import { gql } from '@apollo/client'


export const CREATE_COMPANY = gql`
    mutation createCompany(
        $nameCompany: String!  
        $description: String! 
        ){
        createCompany(
            nameCompany: $nameCompany 
            description: $description 
        ){
            idCompany
            nameCompany 
            description
        }
    }
`
// export const UPDATE_PASSWORD = gql`
//     mutation updatePassword($username: String!, $oldPassword: String!, $newPassword: String!){
//         updatePassword(username: $username, oldPassword: $oldPassword, newPassword: $newPassword){
//             message
//         }
//     }
// `

