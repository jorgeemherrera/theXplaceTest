import React, { useState } from 'react';
import { CreateCompany } from '../CreateCompany';
import CreateJobOffer from '../CreateJobOffer';
import { ListOfCompanies } from '../ListOfCompany';
import { IconArrowBackUp } from '@tabler/icons';
import { Link } from 'react-router-dom'
import './Recruiter.scss'
import Button from '../../shared/Button';

const Recruiter = () => {
    const [createCompany, setCreateCompany] = useState(false);
    const [createJobOffer, setCreateJobOffer] = useState(false);
    const [viewCompanies, setViewCompanies] = useState(false);

    const selectCreateCompany = () => {
        setCreateCompany(!createCompany);
    }
    const selectCreateOffer = () => {
        setCreateJobOffer(!createJobOffer);
    }

    const selectViewCompanies = () => {
        setViewCompanies(!viewCompanies);
    }

    return (
        <div className='parent-home recruiter'>
            <div className={!createCompany && !createJobOffer && !viewCompanies ?
                'parent-recruiter' :
                createCompany && !createJobOffer && !viewCompanies ?
                    'parent-recruiter create-company' :
                    'parent-recruiter'
            }>
                {!createCompany && !createJobOffer && !viewCompanies ?
                    <>
                        <h1>Hello recruiter</h1>
                        <Button onClick={selectCreateCompany}>Do you want to create a company?</Button>
                        <Button onClick={selectCreateOffer}>Do you want to create an offer?</Button>
                        <Button onClick={selectViewCompanies}>Do you want to see all the companies?</Button>
                        <Link to='/'>
                            <Button>Go Back  <IconArrowBackUp width='18' height='18' /></Button>
                        </Link>
                    </>
                    : createCompany && !createJobOffer && !viewCompanies ?
                        <>
                            <h1>Create company</h1>
                            <CreateCompany />
                            <Button onClick={selectCreateCompany}>Go Back  <IconArrowBackUp width='18' height='18' /></Button>
                        </>
                        : !createCompany && createJobOffer && !viewCompanies ?
                            <>
                                <h1>Create job offer</h1>
                                <CreateJobOffer />
                                <Button onClick={selectCreateOffer}>Go Back  <IconArrowBackUp width='18' height='18' /></Button>
                            </>
                            :
                            <>
                                <h1>List of companies</h1>
                                <ListOfCompanies />
                                <Button onClick={selectViewCompanies}>Go Back  <IconArrowBackUp width='18' height='18' /></Button>
                            </>
                }
            </div>
        </div>
    )
}

export { Recruiter }