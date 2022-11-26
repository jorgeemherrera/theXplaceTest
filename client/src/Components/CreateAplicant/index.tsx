import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import './CreateAplicant.scss'
import { CREATE_APPLICANT } from "../../Graphql/Mutations/CreateAplicant";
import Button from "../../shared/Button";
import InputChip from "../../shared/InputChip";


const CreateAplicant = () => {
    const [stateForm, setStateForm] = useState({
        nameApplicant: "",
        lastname: "",
        email: "",
        education: "",
        jobType: "",
        phone: "",
        rateExpected: "",
        location: "",
    });
    const [skillValues, setSkillValues] = useState('');
    const [inputValues, setInputValues] = useState(['']);

    const [CreateAplicant, { error }] = useMutation(CREATE_APPLICANT);

    const handleChangeInput = (event: any) => {
        const value = event.target.value;
        setStateForm({
            ...stateForm,
            [event.target.name]: value
        });
    }



    const handleOnChange = (evt: any) => {
        console.log(evt.target.value);
        setValue(evt.target.value)
        console.log('inputValues',inputValues)
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            setInputValues(current => [...current, value]);
            console.log('inputValues', inputValues)
        }
    }

    return (
        <>
            {error ? <p>{error.message}</p> :
                <>
                    <form className="form-create-aplicant">
                        <input
                            placeholder="Name"
                            type="text"
                            name="nameApplicant"
                            value={stateForm.nameApplicant}
                            onChange={handleChangeInput}
                        />
                        <input placeholder="Lastname"
                            type="text"
                            name="lastname"
                            value={stateForm.lastname}
                            onChange={handleChangeInput}
                        />
                        <input type="text" onKeyDown={handleKeyDown} value={value} onChange={handleOnChange} />
                        <input placeholder="email"
                            type="text"
                            name="email"
                            value={stateForm.email}
                            onChange={handleChangeInput}
                        />
                        <input placeholder="education"
                            type="text"
                            name="education"
                            value={stateForm.education}
                            onChange={handleChangeInput}
                        />
                        <input placeholder="Job type"
                            type="text"
                            name="jobType"
                            value={stateForm.jobType}
                            onChange={handleChangeInput}
                        />
                        <input placeholder="Phone"
                            type="text"
                            name="phone"
                            value={stateForm.phone}
                            onChange={handleChangeInput}
                        />
                        <input placeholder="rate Expected"
                            type="text"
                            name="rateExpected"
                            value={stateForm.rateExpected}
                            onChange={handleChangeInput}
                        />
                        <input placeholder="Location"
                            type="text"
                            name="location"
                            value={stateForm.location}
                            onChange={handleChangeInput}
                        />
                    </form>
                    <Button
                        onClick={() => {
                            CreateAplicant({
                                variables: {
                                    nameApplicant: stateForm.nameApplicant,
                                    lastName: stateForm.lastname,
                                    skills: value,
                                    email: stateForm.email,
                                    education: stateForm.education,
                                    jobType: stateForm.jobType,
                                    phone: stateForm.phone,
                                    rateExpected: stateForm.rateExpected,
                                    location: stateForm.location,
                                }
                            })
                        }}>
                        Create Applicant
                    </Button>
                </>
            }
        </>
    );
}

export { CreateAplicant }