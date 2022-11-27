/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import './CreateAplicant.scss'
import { CREATE_APPLICANT } from "../../Graphql/Mutations/CreateAplicant";
import Button from "../../shared/Button";
import { IconX } from '@tabler/icons';

const CreateAplicant = () => {
    const [stateForm, setStateForm] = useState({
        nameApplicant: "",
        lastname: "",
        email: "",
        jobType: "",
        phone: "",
        rateExpected: "",
        location: "",
    });
    const [skillValue, setSkillValue] = useState('');
    const [educationValue, setEducationValue] = useState('');
    const [skillsInputValues, setSkillsInputValues] = useState(['']);
    const [educationInputValues, setEducationInputValues] = useState(['']);
    const [skillsInputStrings, setSkillsInputStrings] = useState('');
    const [educationInputStrings, setEducationInputStrings] = useState('');

    const [CreateAplicant, { error }] = useMutation(CREATE_APPLICANT);

    const handleChangeInput = (event: any) => {
        const value = event.target.value;
        setStateForm({
            ...stateForm,
            [event.target.name]: value
        });
    }

    const handleSkillsOnChange = (evt: any) => {
        setSkillValue(evt.target.value);
    }

    const handleSkillsKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            setSkillsInputValues(current => [...current, skillValue]);
            setSkillValue('')
        }
        console.log('skillsInputValues', skillsInputValues)
        setSkillsInputStrings(skillsInputValues.toString());
    }

    const handleEducationOnChange = (evt: any) => {
        setEducationValue(evt.target.value);
    }

    const handleEducationKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            setEducationInputValues(current => [...current, educationValue]);
            setEducationValue('')
        }
        console.log('educationInputValues', educationInputValues)
        setEducationInputStrings(educationInputValues.toString());
    }

    const deleteSkillsElement = (key: any) => {
        setSkillsInputValues(errors => errors.filter((item, index) => key !== index));
    }

    const deleteEducationElement = (key: any) => {
        setEducationInputValues(errors => errors.filter((item, index) => key !== index));
    }

    const pills = () => {
        <div className="container-pill">
            <div className="container-pills-skills">
                {
                    skillsInputValues.map((skill, idx) => {
                        return (
                            <span className={skill === '' ? 'hide' : 'pill-skill'}>
                                {skill}
                                <IconX id="icon-x" onClick={() => deleteSkillsElement(idx)} />
                            </span>
                        )
                    })
                }
            </div>

            <div className="container-pills-education">
                {
                    educationInputValues.map((skill, idx) => {
                        return (
                            <span className={skill === '' ? 'hide' : 'pill-skill'}>
                                {skill}
                                <IconX id="icon-x" onClick={() => deleteEducationElement(idx)} />
                            </span>
                        )
                    })
                }
            </div>
        </div>
    }

    return (
        <>
            {error ? <p>{error.message}</p> :
                <>
                    {console.log('skillsInputValues', skillsInputValues)}
                    <div className="container">
                        {pills()}
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

                            <input
                                type="text"
                                placeholder="Add Skills"
                                onKeyDown={handleSkillsKeyDown}
                                value={skillValue}
                                onChange={handleSkillsOnChange} />
                            <input placeholder="email"
                                type="text"
                                name="email"
                                value={stateForm.email}
                                onChange={handleChangeInput}
                            />
                            <input placeholder="Add Education"
                                type="text"
                                value={educationValue}
                                onKeyDown={handleEducationKeyDown}
                                onChange={handleEducationOnChange}
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
                    </div>
                    <Button
                        className='button-applicant'
                        onClick={() => {
                            CreateAplicant({
                                variables: {
                                    nameApplicant: stateForm.nameApplicant,
                                    lastName: stateForm.lastname,
                                    skills: skillsInputStrings,
                                    email: stateForm.email,
                                    education: educationInputStrings,
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