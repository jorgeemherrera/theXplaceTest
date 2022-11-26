import { useState } from 'react';
import { CreateAplicant } from '../CreateAplicant';
import { CreateCompany } from '../CreateCompany';
import Search from '../Search';
import './Home.scss';


const Home = () => {
    const [recruiter, stateRecruiter] = useState(false);
    const [talent, stateTalent] = useState(false);

    const clickRecruiter = () => {
        stateRecruiter(!recruiter)
    }
    const clickTalent = () => {
        stateTalent(!talent)
    }
    const submitRecruiter = (e) => {
        e.preventDefault()
        stateRecruiter(!recruiter)

    }

    return (
        <>
            <div className={recruiter && !talent ?
                "parent-home recruiter"
                : !recruiter && talent ?
                    "parent-home talent" :
                    "parent-home home"
            }>
                <h1>
                    {!recruiter && !talent ?
                        "Select your File" :
                        recruiter && !talent ?
                            "Create  company" :
                            "Fill out the form"
                    }
                </h1>
                {!recruiter && !talent ?
                    <>
                        <button className='button-home' onClick={clickRecruiter}> are you a recruiter? </button>
                        <button className='button-home' onClick={clickTalent}> are you a Talent? </button>
                    </>
                    :
                    recruiter ?
                        <div className='create-company-from-home'>
                            <CreateCompany />
                            <button onClick={submitRecruiter}>ComeBack</button>
                        </div>
                        :
                        <div className='create-applicant-from-home'>
                            <CreateAplicant />
                            <button onClick={clickTalent}>ComeBack</button>
                        </div>
                }
            </div>
            <Search />
        </>
    );
}

export { Home }