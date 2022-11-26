import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_COMPANY } from "../../Graphql/Mutations/CreateCompany";
import './CreateCompany.scss'

const CreateCompany = () => {
    const [nameCompany, setNameCompany] = useState("")
    const [descriptionCompany, setDescriptionCompany] = useState("")
    const [createCompany, { error }] = useMutation(CREATE_COMPANY);
    

    return (
        <>
            <form className="form-create-company">
                <input
                    type="text"
                    placeholder="Company name"
                    onChange={(e) => {
                        setNameCompany(e.target.value)
                    }} />
                <input
                    type="text"
                    placeholder="Company Description"
                    onChange={(e) => {
                        setDescriptionCompany(e.target.value)
                    }} />
                <button onClick={() => {
                    createCompany({
                        variables: {
                            nameCompany: nameCompany,
                            description:descriptionCompany
                        }
                    })
                }}>Create company</button>
            </form>
        </>
    );
}

export { CreateCompany }