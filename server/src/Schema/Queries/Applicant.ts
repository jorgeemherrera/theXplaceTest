import { GraphQLList } from 'graphql'

import { Applicant } from '../../Entities/Applicant';
import { ApplicantType } from '../TypeDefs/Applicant';

export const GET_ALL_APPLICANTS = {
    type: new GraphQLList(ApplicantType),
    resolve() {
        return Applicant.find();
    }
}