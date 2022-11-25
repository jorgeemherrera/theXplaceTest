// Export our Schema
import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { CREATE_APPLICANT, UPDATE_SKILLS } from './Mutations/Applicant';
import { GET_ALL_APPLICANTS } from './Queries/Applicant';

import { CREATE_COMPANY } from './Mutations/Company';
import { CREATE_OFFER } from './Mutations/JobOffer';
import { GET_ALL_COMPANIES } from './Queries/Company';
import { GET_ALL_OFFERS } from './Queries/JobOffer';
import { CREATE_APPLICATION_JOB } from './Mutations/ApplyJob';
import { GET_ALL_APPLICATION_JOB } from './Queries/ApplyJob';

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_APPLICANTS,
        getAllCompanies: GET_ALL_COMPANIES,
        getAllOffer: GET_ALL_OFFERS,
        getAllApplicationJob: GET_ALL_APPLICATION_JOB
    }
});
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createApplicant: CREATE_APPLICANT,
        createCompany: CREATE_COMPANY,
        createOffer: CREATE_OFFER,
        updateSkills: UPDATE_SKILLS,
        createApplyOffer: CREATE_APPLICATION_JOB
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});