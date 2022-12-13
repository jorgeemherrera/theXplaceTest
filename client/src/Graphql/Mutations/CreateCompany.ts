import { gql } from '@apollo/client'


export const CREATE_COMPANY = gql`

 mutation insertCompany($nameCompany: String!, $description: String!){
    insertCompany(
        nameCompany: $nameCompany 
        description: $description
        ){
            nameCompany
            description
        }
 }
`
