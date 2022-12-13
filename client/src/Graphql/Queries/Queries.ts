import { gql } from '@apollo/client';

export const GET_ALL_OFFERS = gql`
    query{
      getJobOffers{
        name
        value{
          disciplines
          jobDescription
          jobType
          nameOffer
          offerEndDate
          offerStartDate
          ratePerHour
          stateActive
          tools
        }
      }
    }
`;

export const GET_ALL_COMPANIES = gql`
  query{
    getCompanies{
      name
      value{
        description
        nameCompany
      }
    }
}

`