import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLInt, } from 'graphql';

export const JobOfferType = new GraphQLObjectType({
    name: "JobOffer",
    fields: () => ({
        idOffer: { type: GraphQLID },
        nameOffer: { type: GraphQLString },
        offerStartDate: { type: GraphQLString },
        offerEndDate: { type: GraphQLString },
        stateActive: { type: GraphQLBoolean },
        ratePerHour: { type: GraphQLInt },
        tools: { type: GraphQLString },
        disciplines: { type: GraphQLString },
        jobDescription: { type: GraphQLString },
        jobType: { type: GraphQLString },
        company: { type: GraphQLID }
    })
})