import { gql } from '@apollo/client';

export const GET_ALL_OFFERS = gql`
    query getAllOffer {
        getAllOffer{
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
            company
        }
    }

`;

export const GET_ALL_COMPANIES = gql`
    query getAllCompanies {
        getAllCompanies{
            idCompany
            nameCompany
            description
        }
    }

`