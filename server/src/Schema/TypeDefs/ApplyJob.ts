import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from 'graphql';

export const ApplyJobType = new GraphQLObjectType({
    name: "ApplyJob",
    fields: () => ({
        idApplyJob: { type: GraphQLID },
        idApplicant: { type: GraphQLID },
        idJobOffer: { type: GraphQLID },
    })
})