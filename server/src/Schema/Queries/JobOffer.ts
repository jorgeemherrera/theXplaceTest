import { GraphQLList } from 'graphql'
import { JobOffer } from '../../Entities/JobOffer';
import { JobOfferType } from '../TypeDefs/JobOffer';

export const GET_ALL_OFFERS = {
    type: new GraphQLList(JobOfferType),
    resolve() {
        return JobOffer.find();
    }
}