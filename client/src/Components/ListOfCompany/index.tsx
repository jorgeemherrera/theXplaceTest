import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_COMPANIES } from '../../Graphql/Queries/Queries';
import './ListOfCompany.scss'

function ListOfCompanies() {
    const { data } = useQuery(GET_ALL_COMPANIES);

    return (
        <div >
            {data ?
                (data.getAllCompanies.map((offer: any) => {
                    if (offer.nameCompany === "" || offer.description === "") {
                        return null;
                    } else {
                        return (

                            <div className="target-list-company" key={offer.idCompany}>
                                <h1>{offer.nameCompany}</h1>
                                <hr />
                                <p>{offer.description}</p>
                            </div>
                        );
                    }
                })
                ):
                <h1>Haven't created any company?</h1>
            }
        </div>
    );
}
export { ListOfCompanies }