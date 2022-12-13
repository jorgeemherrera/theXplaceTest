import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_COMPANIES } from '../../Graphql/Queries/Queries';
import './ListOfCompany.scss'

function ListOfCompanies() {
    const { data } = useQuery(GET_ALL_COMPANIES);
    console.log("data?.getCompanies[0 ",data?.getCompanies[0])
    console.log("data ",data?.getCompanies)
    // console.log("objkect.keys ",Object.keys(data))
    return (
        <div >
            {
                data ?
                data?.getCompanies.map((comp:any ) => {
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
                    // return (
                    //     <>
                    // <p>{comp.name}</p>
                    // <p>{comp.value.nameCompany}</p>
                    // <p>{comp.value.description}</p>
                    //     </>
                    // )
                }) : <h1>Haven't created any company?</h1>
            }
            {/* {data ? 
                (data?.getCompanies.map((id: any) => {
                    // if (offer.nameCompany === "" || offer.description === "") {
                    //     return null;
                    // } else {
                    //     return (

                    //         <div className="target-list-company" key={offer.idCompany}>
                    //             <h1>{offer.nameCompany}</h1>
                    //             <hr />
                    //             <p>{offer.description}</p>
                    //         </div>
                    //     );
                    // }
                })
                )
                :
            } */}
        </div>
    );
}
export { ListOfCompanies }