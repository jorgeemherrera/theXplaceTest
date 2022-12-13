import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_COMPANIES } from '../../Graphql/Queries/Queries';
import './ListOfCompany.scss'

function ListOfCompanies() {
    const { data } = useQuery(GET_ALL_COMPANIES);
    
    return (
        <div >
            {
                data ?
                    data?.getCompanies.map((comp: any) => {
                        if (comp.value.nameCompany === "" || comp.value.description === "") {
                            return null;
                        } else {
                            return (
                                <div className="target-list-company" key={comp.name}>
                                    <h1>{comp.value.nameCompany}</h1>
                                    <hr />
                                    <p>{comp.value.description}</p>
                                </div>
                            );
                        }
                    }) : <h1>Haven't created any company?</h1>
            }
        </div>
    );
}
export { ListOfCompanies }