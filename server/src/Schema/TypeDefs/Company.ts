import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const CompanyType = new GraphQLObjectType({
    name: "Company",
    fields: () => ({
        idCompany: { type: GraphQLID },
        nameCompany: { type: GraphQLString },
        description: { type: GraphQLString },
    })
})