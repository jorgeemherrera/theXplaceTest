// Export our Schema
import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { CREATE_APPLICANT, UPDATE_SKILLS, UPDATE_EDUCATION, UPDATE_JOBTYPE, UPDATE_PHONE, UPDATE_RATE_EXPECTED, UPDATE_LOCATION, UPDATE_EMAIL } from './Mutations/Applicant';
import { GET_ALL_APPLICANTS } from './Queries/Applicant';

import { CREATE_COMPANY, UPDATE_DESCRIPTION_COMPANY, UPDATE_NAME_COMPANY } from './Mutations/Company';
import { CREATE_OFFER, UPDATE_DISCIPLINES_OFFER, UPDATE_JOB_DESCRIPTION_OFFER, UPDATE_JOB_TYPE_OFFER, UPDATE_NAME_OFFER, UPDATE_RATE_PER_HOUR_OFFER, UPDATE_START_DATE_OFFER, UPDATE_STATE_ACTIVE_OFFER, UPDATE_TOOLS_OFFER } from './Mutations/JobOffer';
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
        getAllApplicationJob: GET_ALL_APPLICATION_JOB,
        getAllAplicants: GET_ALL_APPLICANTS,
    }
});
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createApplicant: CREATE_APPLICANT,
        createCompany: CREATE_COMPANY,
        createOffer: CREATE_OFFER,
        updateSkills: UPDATE_SKILLS,
        updateJobType: UPDATE_JOBTYPE,
        updatePhone: UPDATE_PHONE,
        updateEmail: UPDATE_EMAIL,
        updateRateExpected: UPDATE_RATE_EXPECTED,
        updateEducation: UPDATE_EDUCATION,
        updateLocation: UPDATE_LOCATION,
        updateNameCompany: UPDATE_NAME_COMPANY,
        updateDescriptionCompany: UPDATE_DESCRIPTION_COMPANY,
        updateNameOffer: UPDATE_NAME_OFFER,
        updateStartDateOffer: UPDATE_START_DATE_OFFER,
        updateStateActiveOffer: UPDATE_STATE_ACTIVE_OFFER,
        updateRatePerHourOffer: UPDATE_RATE_PER_HOUR_OFFER,
        updateToolsOffer: UPDATE_TOOLS_OFFER,
        updateDisciplines: UPDATE_DISCIPLINES_OFFER,
        updateJobDescriptionOffer: UPDATE_JOB_DESCRIPTION_OFFER,
        updateJobTypeOffer: UPDATE_JOB_TYPE_OFFER,
        createApplyOffer: CREATE_APPLICATION_JOB,
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});