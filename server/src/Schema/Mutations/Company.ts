import { GraphQLID, GraphQLString } from "graphql";
import { CompanyType } from "../TypeDefs/Company";
import { MessageType } from "../TypeDefs/Messages";
import { Company } from "../../Entities/Company";

export const CREATE_COMPANY = {
    type: CompanyType,
    args: {
        nameCompany: { type: GraphQLString },
        description: { type: GraphQLString },
    },
    async resolve(parent: any, args: any,) {
        const { nameCompany, description } = args;
        await Company.insert({ nameCompany, description });
        return args;
    }
}