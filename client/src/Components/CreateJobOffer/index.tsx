import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_OFFER } from '../../Graphql/Mutations/CreateJobOffer';

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
  return (
    <section>
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
            type='text'
            placeholder='Job Description'
            name="jobDescription"
            value={stateForm.jobDescription}
            onChange={handleChangeInput} />
          <input
            type='text'
            placeholder='Job Type'
            name="jobType"
            value={stateForm.jobType}
            onChange={handleChangeInput} />
          <label>
            State Active
            <input
              type="checkbox"
              name="stateActive"
              checked={stateActive}
              onChange={(e) => setStateActive(Boolean(e.target.value))}
            />
          </label>
          <button onClick={() => createOffer({
            variables: {
              nameOffer: stateForm.nameOffer,
              offerStartDate: stateForm.offerStartDate,
              offerEndDate: stateForm.offerEndDate,
              stateActive: stateActive,
              ratePerHour: stateForm.ratePerHour,
              tools: stateForm.tools,
              disciplines: stateForm.disciplines,
              jobDescription: stateForm.jobDescription,
              jobType: stateForm.jobType
            }
          })}>Create Offer</button>
        </form>
      }
    </section>
  )
}
