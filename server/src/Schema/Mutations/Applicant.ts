import { ApplicantType } from "../TypeDefs/Applicant";
import { GraphQLString, GraphQLInt, GraphQLID } from 'graphql';
import { Applicant } from '../../Entities/Applicant';
import { MessageType } from "../TypeDefs/Message";


export const CREATE_APPLICANT = {
    type: ApplicantType,
    args: {
        nameApplicant: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        skills: { type: GraphQLString },
        education: { type: GraphQLString },
        jobType: { type: GraphQLString },
        phone: { type: GraphQLString },
        rateExpected: { type: GraphQLString },
        location: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { nameApplicant, lastName, email, skills, education, jobType, phone, rateExpected, location } = args;
        await Applicant.insert({ nameApplicant, lastName, email, skills, education, jobType, phone, rateExpected, location });
        return args;
    }
}

export const UPDATE_EMAIL = {
    type: MessageType,
    args: {
        idApplicant: { type: GraphQLID },
        oldEmail: { type: GraphQLString },
        newEmail: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { idApplicant, oldEmail, newEmail } = args;
        const idApp = await Applicant.findOneBy({ idApplicant: idApplicant });

        if (!idApp) {
            throw new Error('Id Applicant does not exist');
        }

        const previousEmail = idApp?.email

        if (oldEmail === previousEmail) {
            await Applicant.update(
                { idApplicant: idApplicant },
                { email: newEmail }
            );
            return {successful: true, message: 'Email Updated'}
        } else {
            throw new Error('Email is not updated')
        }
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

export const UPDATE_EDUCATION = {
    type: MessageType,
    args: {
        idApplicant: { type: GraphQLID },
        oldEducation: { type: GraphQLString },
        newEducation: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { idApplicant, oldEducation, newEducation } = args;
        const idApp = await Applicant.findOneBy({ idApplicant: idApplicant });

        if (!idApp) {
            throw new Error('Id Applicant does not exist');
        }

        const previousEducation = idApp?.education

        if (oldEducation === previousEducation) {
            await Applicant.update(
                { idApplicant: idApplicant },
                { education: newEducation }
            );
            return {successful: true, message: 'Education Updated'}
        } else {
            throw new Error('Education are not updated')
        }
    }
}

export const UPDATE_JOBTYPE = {
    type: MessageType,
    args: {
        idApplicant: { type: GraphQLID },
        oldJobType: { type: GraphQLString },
        newJobType: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { idApplicant, oldJobType, newJobType } = args;
        const idApp = await Applicant.findOneBy({ idApplicant: idApplicant });

        if (!idApp) {
            throw new Error('Id Applicant does not exist');
        }

        const previousJobType = idApp?.jobType

        if (oldJobType === previousJobType) {
            await Applicant.update(
                { idApplicant: idApplicant },
                { jobType: newJobType }
            );
            return {successful: true, message: 'Job Type Updated'}
        } else {
            throw new Error('Job Type are not updated')
        }
    }
}

export const UPDATE_PHONE = {
    type: MessageType,
    args: {
        idApplicant: { type: GraphQLID },
        oldPhone: { type: GraphQLInt },
        newPhone: { type: GraphQLInt }
    },
    async resolve(parent: any, args: any) {
        const { idApplicant, oldPhone, newPhone } = args;
        const idApp = await Applicant.findOneBy({ idApplicant: idApplicant });

        if (!idApp) {
            throw new Error('Id Applicant does not exist');
        }

        const previousPhone = idApp?.phone

        if (oldPhone === previousPhone) {
            await Applicant.update(
                { idApplicant: idApplicant },
                { phone: newPhone }
            );
            return {successful: true, message: 'Phone Updated'}
        } else {
            throw new Error('Phone are not updated')
        }
    }
}

export const UPDATE_RATE_EXPECTED = {
    type: MessageType,
    args: {
        idApplicant: { type: GraphQLID },
        oldRateExpected: { type: GraphQLInt },
        newRateExpected: { type: GraphQLInt }
    },
    async resolve(parent: any, args: any) {
        const { idApplicant, oldRateExpected, newRateExpected } = args;
        const idApp = await Applicant.findOneBy({ idApplicant: idApplicant });

        if (!idApp) {
            throw new Error('Id Applicant does not exist');
        }

        const previousRateExpected = idApp?.rateExpected

        if (oldRateExpected === previousRateExpected) {
            await Applicant.update(
                { idApplicant: idApplicant },
                { rateExpected: newRateExpected }
            );
            return {successful: true, message: 'Rate Expected Updated'}
        } else {
            throw new Error('Rate Expected are not updated')
        }
    }
}

export const UPDATE_LOCATION = {
    type: MessageType,
    args: {
        idApplicant: { type: GraphQLID },
        oldLocation: { type: GraphQLString },
        newLocation: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const { idApplicant, oldLocation, newLocation } = args;
        const idApp = await Applicant.findOneBy({ idApplicant: idApplicant });

        if (!idApp) {
            throw new Error('Id Applicant does not exist');
        }

        const previousLocation = idApp?.location

        if (oldLocation === previousLocation) {
            await Applicant.update(
                { idApplicant: idApplicant },
                { location: newLocation }
            );
            return {successful: true, message: 'Location Updated'}
        } else {
            throw new Error('Location are not updated')
        }
    }
}
