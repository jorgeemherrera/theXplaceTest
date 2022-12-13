import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { CREATE_COMPANY } from "../../Graphql/Mutations/CreateCompany";
import Button from "../../shared/Button";
import './CreateCompany.scss'

const CreateCompany = () => {
    const [nameCompany, setNameCompany] = useState("");
    const [descriptionCompany, setDescriptionCompany] = useState("");
    const [emptyName, setEmptyName] = useState(false);
    const [descriptionEmpty, setDescriptionEmpty] = useState(false);
    const [createCompany, { error }] = useMutation(CREATE_COMPANY);
    const [isValid, setIsValid] = useState(true)

    useEffect(() => {
        if (nameCompany !== "" && descriptionCompany !== "") {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
        if (nameCompany === "") {
            setEmptyName(true)
        } else {
            setEmptyName(false)
        }
        if (descriptionCompany === "") {
            setDescriptionEmpty(true)
        } else {
            setDescriptionEmpty(false)
        }
    }, [nameCompany, descriptionCompany])

    const onSubmit = () => {
        createCompany({
            variables: {
                nameCompany: nameCompany,
                description: descriptionCompany
            }
        })

    }

    return (
        <>
            <form className="form-create-company">
                <input
                    type="text"
                    placeholder="Company name"
                    onChange={(e) => {
                        setNameCompany(e.target.value)
                    }} />
                {emptyName && <p className='error-message'>Enter the name of the offer</p>}
                <textarea
                    placeholder="Company Description"
                    onChange={(e) => {
                        setDescriptionCompany(e.target.value)
                    }} />
                {descriptionEmpty && <p className='error-message'>Enter the name of the offer</p>}
                <Button disabled={isValid} onClick={onSubmit}>Create company</Button>
            </form>
        </>
    );
}

export { CreateCompany }