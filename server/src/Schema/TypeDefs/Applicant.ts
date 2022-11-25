import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from 'graphql';
// var { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

export const ApplicantType = new GraphQLObjectType({
    name: "Applicant",
    fields: () => ({
        idApplicant: { type: GraphQLID },
        nameApplicant: { type: GraphQLString },
        lastName: { type: GraphQLString },
        skills: { type: GraphQLString },
        education: { type: GraphQLString },
        jobType: { type: GraphQLString },
        phone: { type: GraphQLInt },
        rateExpected: { type: GraphQLInt },
        location: { type: GraphQLString }
    })
});