import { ApplicantType } from "../TypeDefs/Applicant";
import { GraphQLString, GraphQLInt, GraphQLID } from 'graphql';
import { Applicant } from '../../Entities/Applicant';
import { MessageType } from "../TypeDefs/Message";


export const CREATE_APPLICANT = {
    type: ApplicantType,
    args: {
        nameApplicant: { type: GraphQLString },
        lastName: { type: GraphQLString },
        skills: { type: GraphQLString },
        education: { type: GraphQLString },
        jobType: { type: GraphQLString },
        phone: { type: GraphQLInt },
        rateExpected: { type: GraphQLInt },
        location: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { nameApplicant, lastName, skills, education, jobType, phone, rateExpected, location } = args;
        await Applicant.insert({ nameApplicant, lastName, skills, education, jobType, phone, rateExpected, location });
        return args;
    }
}

export const UPDATE_SKILLS = {
    type: MessageType,
    args: {
        idApplicant: { type: GraphQLID },
        oldSkills: { type: GraphQLString },
        newSkills: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { idApplicant, oldSkills, newSkills } = args;
        const idApp = await Applicant.findOneBy({ idApplicant: idApplicant });

        if (!idApp) {
            throw new Error('Id Applicant does not exist');
        }

        const previousSkills = idApp?.skills

        if (oldSkills === previousSkills) {
            await Applicant.update(
                { idApplicant: idApplicant },
                { skills: newSkills }
            );
            return {successful: true, message: 'Skills Updated'}
        } else {
            throw new Error('Skills are not updated')
        }
    }
}