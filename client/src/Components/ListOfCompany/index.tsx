import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_COMPANIES } from '../../Graphql/Queries/Queries';

function ListOfCompanies() {
    const { data } = useQuery(GET_ALL_COMPANIES);

    return (
        <div>
            {data &&
                (data
                    .getAllCompanies.map((offer: any) => {
                        return (
                            <div key={offer.idCompany}>
                                {offer.nameCompany} / {offer.description}
                            </div>
                        );
                    })
                )
            }
        </div>
    );
}
export { ListOfCompanies }