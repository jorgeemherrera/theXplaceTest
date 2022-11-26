import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_OFFERS } from '../../Graphql/Queries/Queries';

function ListOfOffers() {
    const { data } = useQuery(GET_ALL_OFFERS);

    return (
        <div>
            {data &&
                (data
                    .getAllOffer.map((offer: any) => {
                        return (
                            <div key={offer.idOffer}>
                                {offer.nameOffer} / {offer.offerStartDate}
                            </div>
                        );
                    })
                )
            }
        </div>
    );
}
export { ListOfOffers }