/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_APPLICANT } from '../../Graphql/Mutations/CreateAplicant';
import Button from '../../shared/Button';
import { IconX } from '@tabler/icons';
import './CreateAplicant.scss'
import Modal from '../../shared/Modal';

const CreateAplicant = (jobOffer: any) => {
    const initialState = {
        name: '',
        lastname: '',
        email: '',
        jobType: '',
        phone: '',
        rateExpected: '',
        location: '',
    };

    const [stateForm, setStateForm] = useState({
        name: '',
        lastname: '',
        email: '',
        jobType: '',
        phone: '',
        rateExpected: '',
        location: '',
    });

    const [skillValue, setSkillValue] = useState('');
    const [educationValue, setEducationValue] = useState('');
    const [skillsInputValues, setSkillsInputValues] = useState(['']);
    const [educationInputValues, setEducationInputValues] = useState(['']);
    const [skillsInputStrings, setSkillsInputStrings] = useState('');
    const [educationInputStrings, setEducationInputStrings] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [createApplicant, { error }] = useMutation(CREATE_APPLICANT);

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
        setSkillsInputStrings(skillsInputValues.toString());
    }

    const handleEducationOnChange = (evt: any) => {
        setEducationValue(evt.target.value);
    }

    const handleEducationKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            setEducationInputValues(current => [...current, educationValue]);
            setEducationValue('');
        }
        setEducationInputStrings(educationInputValues.toString());
    }

    const deleteSkillsElement = (key: any) => {
        setSkillsInputValues(errors => errors.filter((item, index) => key !== index));
    }

    const deleteEducationElement = (key: any) => {
        setEducationInputValues(errors => errors.filter((item, index) => key !== index));
    }

    const onHandleClickModal = () => {
        setModalState(!modalState);
        setTimeout(() => {
            window.location.reload();
        },2000)
    };

    const onSubmit = () => {
        createApplicant({
            variables: {
                name: stateForm.name,
                lastName: stateForm.lastname,
                skills: skillsInputStrings,
                email: stateForm.email,
                education: educationInputStrings,
                jobType: stateForm.jobType,
                phone: stateForm.phone,
                rateExpected: stateForm.rateExpected,
                location: stateForm.location,
                jobOfferId: jobOffer.jobOffer
            }
        });
        setTimeout(() => {
            onHandleClickModal()
            setStateForm({
                ...initialState
            });
            setSkillsInputValues([]);
            setEducationInputValues([]);
        });
    }

    useEffect(() => {
        for (const [key, value] of Object.entries(stateForm)) {
            if (value !== '') {
                setIsValid(false)
            } else {
                setIsValid(true)
            }
        }
    }, [stateForm]);

    return (
        <>
            {error ? <p>{error.message}</p> :
                <>
                    <div className='container'>
                        <div className='container-pill'>
                            <div className='container-pills-skills'>
                                {
                                    skillsInputValues.map((skill, idx) => {
                                        return (
                                            <span className={skill === '' ? 'hide' : 'pill-skill'} key={idx}>
                                                {skill}
                                                <IconX id='icon-x' onClick={() => deleteSkillsElement(idx)} />
                                            </span>
                                        )
                                    })
                                }
                            </div>
                            <div className='container-pills-education'>
                                {
                                    educationInputValues.map((skill, idx) => {
                                        return (
                                            <span className={skill === '' ? 'hide' : 'pill-skill'} key={idx}>
                                                {skill}
                                                <IconX id='icon-x' onClick={() => deleteEducationElement(idx)} />
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <form className='form-create-aplicant'>
                            <input
                                placeholder='Name'
                                type='text'
                                name='name'
                                className={stateForm.name !== '' ? '' : 'error-message'}
                                value={stateForm.name}
                                onChange={handleChangeInput}
                            />
                            <input placeholder='Last Name'
                                type='text'
                                name='lastname'
                                className={stateForm.lastname !== '' ? '' : 'error-message'}
                                value={stateForm.lastname}
                                onChange={handleChangeInput}
                            />
                            <input
                                type='text'
                                placeholder='Add Skills'
                                className={skillsInputValues.length > 1 ? '' : 'error-message'}
                                onKeyDown={handleSkillsKeyDown}
                                value={skillValue}
                                onChange={handleSkillsOnChange} />
                            <input placeholder='email'
                                type='text'
                                name='email'
                                className={stateForm.email !== '' ? '' : 'error-message'}
                                value={stateForm.email}
                                onChange={handleChangeInput}
                            />
                            <input placeholder='Add Education'
                                type='text'
                                value={educationValue}
                                className={educationInputValues.length > 1 ? '' : 'error-message'}
                                onKeyDown={handleEducationKeyDown}
                                onChange={handleEducationOnChange}
                            />

                            <select name='jobType' className={stateForm.jobType !== '' ? '' : 'error-message'} onChange={handleChangeInput} value={stateForm.jobType}>
                                <option value='' disabled>Select a Type of Job</option>
                                <option value='Remote'>Remote</option>
                                <option value='Hybrid'>Hybrid</option>
                                <option value='On site'>On Site</option>
                            </select>
                            <input placeholder='Phone'
                                type='text'
                                name='phone'
                                className={stateForm.phone !== '' ? '' : 'error-message'}
                                value={stateForm.phone}
                                onChange={handleChangeInput}
                            />
                            <input placeholder='rate Expected'
                                type='text'
                                name='rateExpected'
                                className={stateForm.rateExpected !== '' ? '' : 'error-message'}
                                value={stateForm.rateExpected}
                                onChange={handleChangeInput}
                            />
                            <input placeholder='Location'
                                type='text'
                                name='location'
                                className={stateForm.location !== '' ? '' : 'error-message'}
                                value={stateForm.location}
                                onChange={handleChangeInput}
                            />
                        </form>
                    </div>
                    <Button
                        disabled={isValid}
                        className='button-applicant'
                        onClick={onSubmit}>
                        Create Applicant
                    </Button>

                    <Modal stateModal={modalState} changeModalState={setModalState} size='sm'>
                        <p className='modal-message'>You applied successfully!</p>
                    </Modal>
                </>
            }
        </>
    );
}

export { CreateAplicant }