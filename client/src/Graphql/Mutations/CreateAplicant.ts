import { gql } from "@apollo/client";

export const CREATE_APPLICANT = gql`
mutation createApplicant(
    $nameApplicant: String!  
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
        nameApplicant: $nameApplicant 
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
        nameApplicant
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