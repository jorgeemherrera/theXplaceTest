import { GraphQLList } from 'graphql'
import { Company } from '../../Entities/Company';
import { CompanyType } from '../TypeDefs/Company'

export const GET_ALL_COMPANIES = {
    type: new GraphQLList(CompanyType),
    resolve() {
        return Company.find();
    }
}