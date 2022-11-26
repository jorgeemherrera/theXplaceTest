import { gql } from '@apollo/client'


export const CREATE_OFFER = gql`
    mutation createOffer(
        $nameOffer: String!  
        $offerStartDate: String!
        $offerEndDate: String!
        $stateActive: Boolean!
        $ratePerHour: String!
        $tools: String!
        $disciplines: String!
        $jobDescription: String!
        $jobType: String!
        ){
        createOffer(
            nameOffer: $nameOffer 
            offerStartDate: $offerStartDate 
            offerEndDate: $offerEndDate
            stateActive: $stateActive
            ratePerHour: $ratePerHour
            tools: $tools
            disciplines: $disciplines
            jobDescription: $jobDescription
            jobType: $jobType
        ){
            idOffer
            nameOffer 
            offerStartDate
            offerEndDate
            stateActive
            ratePerHour
            tools
            disciplines
            jobDescription
            jobType
        }
    }
`

