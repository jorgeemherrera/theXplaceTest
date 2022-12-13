import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_OFFER } from '../../Graphql/Mutations/CreateJobOffer';
import './CreateJobOffer.scss'
import Button from '../../shared/Button';

export default function CreateJobOffer() {
  const [stateForm, setStateForm] = useState({
    nameOffer: "",
    offerStartDate: "",
    offerEndDate: "",
    ratePerHour: "",
    tools: "",
    disciplines: "",
    jobDescription: "",
    jobType: ""
  });

  const [stateActive, setStateActive] = useState(false);

  const [createOffer, { error }] = useMutation(CREATE_OFFER)

  const handleChangeInput = (event: any) => {
    const value = event.target.value;
    setStateForm({
      ...stateForm,
      [event.target.name]: value
    });
  }

  const handleChangeCheckbox = () => {
    setStateActive(!stateActive)
  }
  return (
    <section className='parent-job-offer'>
      {error ? <p>{error.message}</p> :
        <form>
          <input
            type='text'
            placeholder='Name Offer'
            name="nameOffer"
            value={stateForm.nameOffer}
            onChange={handleChangeInput} />
          <input
            type='date'
            placeholder='Offer start date'
            name="offerStartDate"
            value={stateForm.offerStartDate}
            onChange={handleChangeInput} />
          <input
            type='date'
            placeholder='Offer end date'
            name="offerEndDate"
            value={stateForm.offerEndDate}
            onChange={handleChangeInput} />
          <input
            type='text'
            placeholder='Rate per hour'
            name="ratePerHour"
            value={stateForm.ratePerHour}
            onChange={handleChangeInput} />
          <input
            type='text'
            placeholder='Tools'
            name="tools"
            value={stateForm.tools}
            onChange={handleChangeInput} />
          <input
            type='text'
            placeholder='Disciplines'
            name="disciplines"
            value={stateForm.disciplines}
            onChange={handleChangeInput} />
          <input
            type='textarea'
            placeholder='Job Description'
            name="jobDescription"
            value={stateForm.jobDescription}
            onChange={handleChangeInput} />
          <select name="jobType" onChange={handleChangeInput} value={stateForm.jobType}>
            <option value="" disabled>Select a Type of Job</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On site">On Site</option>
          </select>
          {stateActive.toString()}
          <label>
            State Active
            <input
              className='checkbox-state'
              type="checkbox"
              name="stateActive"
              checked={stateActive}
              onChange={handleChangeCheckbox}
            />
          </label>
          <Button onClick={() => createOffer({
            variables: {
              nameOffer: stateForm.nameOffer,
              offerStartDate: stateForm.offerStartDate,
              offerEndDate: stateForm.offerEndDate,
              stateActive: stateActive.toString(),
              ratePerHour: stateForm.ratePerHour.toString(),
              tools: stateForm.tools,
              disciplines: stateForm.disciplines,
              jobDescription: stateForm.jobDescription,
              jobType: stateForm.jobType
            }
          })}>Create Offer</Button>
        </form>
      }
    </section>
  )
}
