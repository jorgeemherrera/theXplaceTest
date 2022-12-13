import { gql } from "@apollo/client";

export const CREATE_APPLICANT = gql`
mutation createApplicant(
    $name: String!  
    $lastName: String! 
    $email: String! 
    $skills: String! 
    $education: String! 
    $jobType: String! 
    $phone: String! 
    $rateExpected: String! 
    $location: String! 
    ){
    createApplicant(
        name: $name 
        lastName: $lastName 
        email: $email 
        skills: $skills 
        education: $education 
        jobType: $jobType 
        phone: $phone 
        rateExpected: $rateExpected 
        location: $location 
    ){
        idApplicant
        name
        lastName
        skills
        email
        education
        jobType
        phone
        rateExpected
        location
    }
}
`