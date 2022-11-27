import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_COMPANY } from "../../Graphql/Mutations/CreateCompany";
import Button from "../../shared/Button";
import './CreateCompany.scss'

const CreateCompany = () => {
    const [nameCompany, setNameCompany] = useState("")
    const [descriptionCompany, setDescriptionCompany] = useState("")
    const [createCompany, { error }] = useMutation(CREATE_COMPANY);

    console.log(error)
    return (
        <>
            <form className="form-create-company">
                <input
                    type="text"
                    placeholder="Company name"
                    onChange={(e) => {
                        setNameCompany(e.target.value)
                    }} />
                <textarea
                    placeholder="Company Description"
                    onChange={(e) => {
                        setDescriptionCompany(e.target.value)
                    }} />
                <Button onClick={() => {
                    createCompany({
                        variables: {
                            nameCompany: nameCompany,
                            description: descriptionCompany
                        }
                    })
                }}>Create company</Button>
            </form>
        </>
    );
}

export { CreateCompany }