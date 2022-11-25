import { GraphQLID, GraphQLString, GraphQLInt } from 'graphql';
import { ApplyJobType } from "../TypeDefs/ApplyJob";
import { ApplyJob } from "../../Entities/ApplyJob";

export const CREATE_APPLICATION_JOB = {
    type: ApplyJobType,
    args: {
        idApplyJob: { type: GraphQLID },
        idApplicant: { type: GraphQLID },
        idJobOffer: { type: GraphQLID },
    },
    async resolve(parent: any, args: any,) {
        const { idApplyJob, idApplicant, idJobOffer } = args;
        await ApplyJob.insert({ idApplyJob, idApplicant, idJobOffer });
        return args;
    }
}