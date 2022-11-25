import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { JobOffer } from "../../Entities/JobOffer";
import { JobOfferType } from "../TypeDefs/JobOffer";
import { MessageType } from "../TypeDefs/Message";

export const CREATE_OFFER = {
    type: JobOfferType,
    args: {
        nameOffer: { type: GraphQLString },
        offerStartDate: { type: GraphQLString },
        offerEndDate: { type: GraphQLString },
        stateActive: { type: GraphQLBoolean },
        ratePerHour: { type: GraphQLInt },
        tools: { type: GraphQLString },
        disciplines: { type: GraphQLString },
        jobDescription: { type: GraphQLString },
        jobType: { type: GraphQLString },
        company: { type: GraphQLID }
    },
    async resolve(parent: any, args: any,) {
        const {
            nameOffer,
            offerStartDate,
            offerEndDate,
            stateActive,
            ratePerHour,
            tools,
            disciplines,
            jobType,
            jobDescription,
            company
        } = args;
        await JobOffer.insert({
            nameOffer,
            offerStartDate,
            offerEndDate,
            stateActive,
            ratePerHour,
            tools,
            disciplines,
            jobType,
            jobDescription,
            company
        });
        return args;
    }
}

export const UPDATE_NAME_OFFER = {
    type: MessageType,
    args: {
        idOffer: { type: GraphQLID },
        oldNameOffer: { type: GraphQLString },
        newNameOffer: { type: GraphQLString },
    },
    async resolve(parent: any, args: any,) {
        const { idOffer, oldNameOffer, newNameOffer } = args;
        const jobOffer = await JobOffer.findOneBy({ idOffer: idOffer });

        if (!jobOffer) {
            throw new Error("ID OF THE OFFER DOESNT EXIST")
        }
        const companyNewName = jobOffer?.nameOffer;

        if (oldNameOffer === companyNewName) {
            await JobOffer.update(
                { idOffer: idOffer },
                { nameOffer: newNameOffer }
            );
            return { successful: true, message: "NAME OF THE OFFER UPDATE" }
        } else {
            throw new Error("NAME OF THE OFFER DO NOT MATCH!");
        }
    },
}

export const UPDATE_START_DATE_OFFER = {
    type: MessageType,
    args: {
        idOffer: { type: GraphQLID },
        oldDateOffer: { type: GraphQLString },
        newDateOffer: { type: GraphQLString },
    },
    async resolve(parent: any, args: any,) {
        const { idOffer, oldDateOffer, newDateOffer } = args;
        const jobOffer = await JobOffer.findOneBy({ idOffer: idOffer });

        if (!jobOffer) {
            throw new Error("ID OF THE OFFER DOESNT EXIST")
        }
        const offerNewDate = jobOffer?.offerStartDate;

        if (oldDateOffer === offerNewDate) {
            await JobOffer.update(
                { idOffer: idOffer },
                { offerStartDate: newDateOffer }
            );
            return { successful: true, message: "START DATE OF THE OFFER UPDATE" }
        } else {
            throw new Error("START DATE OF THE OFFER DO NOT MATCH!");
        }
    },
}

export const UPDATE_END_DATE_OFFER = {
    type: MessageType,
    args: {
        idOffer: { type: GraphQLID },
        oldDateOffer: { type: GraphQLString },
        newDateOffer: { type: GraphQLString },
    },
    async resolve(parent: any, args: any,) {
        const { idOffer, oldDateOffer, newDateOffer } = args;
        const jobOffer = await JobOffer.findOneBy({ idOffer: idOffer });

        if (!jobOffer) {
            throw new Error("ID OF THE OFFER DOESNT EXIST")
        }
        const offerNewDate = jobOffer?.offerStartDate;

        if (oldDateOffer === offerNewDate) {
            await JobOffer.update(
                { idOffer: idOffer },
                { offerStartDate: newDateOffer }
            );
            return { successful: true, message: "START DATE OF THE OFFER UPDATE" }
        } else {
            throw new Error("START DATE OF THE OFFER DO NOT MATCH!");
        }
    },
}

export const UPDATE_STATE_ACTIVE_OFFER = {
    type: MessageType,
    args: {
        idOffer: { type: GraphQLID },
        oldStateActive: { type: GraphQLBoolean },
        newStateActive: { type: GraphQLBoolean },
    },
    async resolve(parent: any, args: any,) {
        const { idOffer, oldStateActive, newStateActive } = args;
        const jobOffer = await JobOffer.findOneBy({ idOffer: idOffer });

        if (!jobOffer) {
            throw new Error("ID OF THE OFFER DOESNT EXIST")
        }
        const offerNewState = jobOffer?.stateActive;

        if (oldStateActive === offerNewState) {
            await JobOffer.update(
                { idOffer: idOffer },
                { stateActive: newStateActive }
            );
            return { successful: true, message: "STATE OF THE OFFER UPDATE" }
        } else {
            throw new Error("STATE OF THE OFFER DO NOT MATCH!");
        }
    },
}

export const UPDATE_RATE_PER_HOUR_OFFER = {
    type: MessageType,
    args: {
        idOffer: { type: GraphQLID },
        oldRatePerHour: { type: GraphQLInt },
        newRatePerHour: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any,) {
        const { idOffer, oldRatePerHour, newRatePerHour } = args;
        const jobOffer = await JobOffer.findOneBy({ idOffer: idOffer });

        if (!jobOffer) {
            throw new Error("ID OF THE OFFER DOESNT EXIST")
        }
        const offerNewRatePerHour = jobOffer?.ratePerHour;

        if (oldRatePerHour === offerNewRatePerHour) {
            await JobOffer.update(
                { idOffer: idOffer },
                { ratePerHour: newRatePerHour }
            );
            return { successful: true, message: "RATE PER HOUR OF THE OFFER UPDATE" }
        } else {
            throw new Error("RATE PER HOUR OF THE OFFER DO NOT MATCH!");
        }
    },
}

export const UPDATE_TOOLS_OFFER = {
    type: MessageType,
    args: {
        idOffer: { type: GraphQLID },
        oldTools: { type: GraphQLString },
        newTools: { type: GraphQLString },
    },
    async resolve(parent: any, args: any,) {
        const { idOffer, oldTools, newTools } = args;
        const jobOffer = await JobOffer.findOneBy({ idOffer: idOffer });

        if (!jobOffer) {
            throw new Error("ID OF THE OFFER DOESNT EXIST")
        }
        const offerNewTools = jobOffer?.tools;

        if (oldTools === offerNewTools) {
            await JobOffer.update(
                { idOffer: idOffer },
                { tools: newTools }
            );
            return { successful: true, message: "TOOLS OF THE OFFER UPDATE" }
        } else {
            throw new Error("TOOLS OF THE OFFER DO NOT MATCH!");
        }
    },
}

export const UPDATE_DISCIPLINES_OFFER = {
    type: MessageType,
    args: {
        idOffer: { type: GraphQLID },
        oldDisciplines: { type: GraphQLString },
        newDisciplines: { type: GraphQLString },
    },
    async resolve(parent: any, args: any,) {
        const { idOffer, oldDisciplines, newDisciplines } = args;
        const jobOffer = await JobOffer.findOneBy({ idOffer: idOffer });

        if (!jobOffer) {
            throw new Error("ID OF THE OFFER DOESNT EXIST")
        }
        const offerNewDisciplines = jobOffer?.disciplines;

        if (oldDisciplines === offerNewDisciplines) {
            await JobOffer.update(
                { idOffer: idOffer },
                { disciplines: newDisciplines }
            );
            return { successful: true, message: "DISCIPLINES OF THE OFFER UPDATE" }
        } else {
            throw new Error("DISCIPLINES OF THE OFFER DO NOT MATCH!");
        }
    },
}

export const UPDATE_JOB_DESCRIPTION_OFFER = {
    type: MessageType,
    args: {
        idOffer: { type: GraphQLID },
        oldJobDescription: { type: GraphQLString },
        newJobDescription: { type: GraphQLString },
    },
    async resolve(parent: any, args: any,) {
        const { idOffer, oldJobDescription, newJobDescription } = args;
        const jobOffer = await JobOffer.findOneBy({ idOffer: idOffer });

        if (!jobOffer) {
            throw new Error("ID OF THE OFFER DOESNT EXIST")
        }
        const offerNewJobDescription = jobOffer?.jobDescription;

        if (oldJobDescription === offerNewJobDescription) {
            await JobOffer.update(
                { idOffer: idOffer },
                { jobDescription: newJobDescription }
            );
            return { successful: true, message: "JOB DESCRIPTION OF THE OFFER UPDATE" }
        } else {
            throw new Error("JOB DESCRIPTION OF THE OFFER DO NOT MATCH!");
        }
    },
}


export const UPDATE_JOB_TYPE_OFFER = {
    type: MessageType,
    args: {
        idOffer: { type: GraphQLID },
        oldJobType: { type: GraphQLString },
        newJobType: { type: GraphQLString },
    },
    async resolve(parent: any, args: any,) {
        const { idOffer, oldJobType, newJobType } = args;
        const jobOffer = await JobOffer.findOneBy({ idOffer: idOffer });

        if (!jobOffer) {
            throw new Error("ID OF THE OFFER DOESNT EXIST")
        }
        const offerNewJobType = jobOffer?.jobType;

        if (oldJobType === offerNewJobType) {
            await JobOffer.update(
                { idOffer: idOffer },
                { jobType: newJobType }
            );
            return { successful: true, message: "JOB TYPE DESCRIPTION OF THE OFFER UPDATE" }
        } else {
            throw new Error("JOB TYPE DESCRIPTION OF THE OFFER DO NOT MATCH!");
        }
    },
}