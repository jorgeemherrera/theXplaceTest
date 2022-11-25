import { GraphQLList } from 'graphql'
import { ApplyJob } from '../../Entities/ApplyJob';
import { ApplyJobType } from '../TypeDefs/ApplyJob';

export const GET_ALL_APPLICATION_JOB = {
    type: new GraphQLList(ApplyJobType),
    resolve() {
        return ApplyJob.find();
    }
}