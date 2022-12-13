import { gql } from '@apollo/client'


export const CREATE_OFFER = gql`
    mutation insertOffer(
        $nameOffer: String!,
        $offerStartDate: String!,
        $offerEndDate: String!,
        $stateActive: String,
        $ratePerHour: String!,
        $tools: String!,
        $disciplines: String!,
        $jobDescription: String!,
        $jobType: String!
        ){
        insertOffer(
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

