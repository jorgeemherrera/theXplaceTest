import { graphql, GraphQLID, GraphQLString } from "graphql";
import { CompanyType } from "../TypeDefs/Company";
import { Company } from "../../Entities/Company";
import { MessageType } from "../TypeDefs/Message";

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

export const UPDATE_NAME_COMPANY = {
    type: MessageType,
    args: {
        idCompany: { type: GraphQLID },
        oldNameCompany: { type: GraphQLString },
        newNameCompany: { type: GraphQLString },
    },
    async resolve(parent: any, args: any,) {
        const { idCompany, oldNameCompany, newNameCompany } = args;
        const company = await Company.findOneBy({idCompany:idCompany});

        if(!company){
            throw new Error("ID OF THE COMPANYDOESNT EXIST")
        }
        const companyNewName = company?.nameCompany;

        if (oldNameCompany === companyNewName) {
            await Company.update(
                { idCompany: idCompany },
                { nameCompany: newNameCompany }
            );
            return {successful:true, message: "NAME OF THE COMPANY UPDATE"}
        } else {
            throw new Error("NAME OF THE COMPANY DO NOT MATCH!");
        }
    },
}

export const UPDATE_DESCRIPTION_COMPANY = {
    type: MessageType,
    args: {
        idCompany: { type: GraphQLID },
        oldDescriptionCompany: { type: GraphQLString },
        newDescriptionCompany: { type: GraphQLString },
    },
    async resolve(parent: any, args: any,) {
        const { idCompany, oldDescriptionCompany, newDescriptionCompany } = args;
        const company = await Company.findOneBy({idCompany:idCompany});

        if(!company){
            throw new Error("ID OF THE COMPANY DOESNT EXIST")
        }
        const companyNewName = company?.description;

        if (oldDescriptionCompany === companyNewName) {
            await Company.update(
                { idCompany: idCompany },
                { description: newDescriptionCompany }
            );
            return {successful:true, message: "DESCRIPTION OF THE COMPANY UPDATE"}
        } else {
            throw new Error("DESCRIPTION OF THE COMPANY DO NOT MATCH!");
        }
    },
}
