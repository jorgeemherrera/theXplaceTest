import {  GraphQLBoolean, GraphQLInt, GraphQLString } from "graphql";
import { JobOffer } from "../../Entities/JobOffer";
import { JobOfferType } from "../TypeDefs/JobOffer";

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
            jobDescription
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
            jobDescription
        });
        return args;
    }
}