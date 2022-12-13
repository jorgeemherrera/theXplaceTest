import { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_OFFERS } from '../../Graphql/Queries/Queries';
import Modal from '../../shared/Modal';
import './Search.scss';

import { CreateAplicant } from '../CreateAplicant';
import { IconBuilding } from '@tabler/icons';
import { IconBuildingCommunity } from '@tabler/icons';
import { IconCalendarEvent } from '@tabler/icons';
import { IconCalendarOff } from '@tabler/icons';
import { IconCurrencyDollar } from '@tabler/icons';
import { IconDeviceLaptop } from '@tabler/icons';
import { IconDiscountCheck } from '@tabler/icons';
import { IconHandClick } from '@tabler/icons';
import Button from '../../shared/Button';

export default function Search() {
    const [search, setSearch]: [string, (search: string) => void] = useState("");
    const { data } = useQuery(GET_ALL_OFFERS);
    const [modalState, setModalState] = useState(false);

    const handleChange = (e: { target: { value: string }; }) => {
        setSearch(e.target.value);
    }

    const onHandleClickModal = () => {
        setModalState(!modalState);
      };

    return (
        <>
                <div className="search-bar">
                    <p>Search Offer...</p>
                    <input type="text" value={search} onChange={handleChange} className="search-offer" />
                </div> :
            {
                data ? 
                data?.getJobOffers.map((offer: any, idx: number) => {
                    return search === "" || data?.getJobOffers[idx].value.nameOffer.toLowerCase().includes(search.toLowerCase()) ?
                        <>
                            <div key={offer.name} className="job-offer">
                                <div className="job-offer__header">
                                    <h1> {offer.value.nameOffer}</h1>
                                    <span className='pill-offer-type'>
                                        {offer.value.jobType === 'remote' ? <IconDeviceLaptop /> : offer.value.jobType === 'on site' ? <IconBuilding /> : <IconBuildingCommunity />}
                                        {offer.value.jobType} </span>
                                    <span className='date'><IconCalendarEvent /> <span>Open offer: </span>{offer.value.offerStartDate}</span>
                                    <span className="date"><IconCalendarOff /> <span>Close offer:</span>  {offer.value.offerEndDate}</span>
                                    <span className="pill-offer"><IconDiscountCheck />{offer.value.stateActive ? 'active' : null}</span>
                                </div>
                                <div className='job-offer__description'>
                                    <p className='skills'><span>Skills:</span> {offer.value.tools}</p>
                                    <p className='disciplines'><span>Disciplines:</span> {offer.value.disciplines}</p>
                                    <p className='rate-hour'><span>Rate per hour:</span> <IconCurrencyDollar />{offer.value.ratePerHour} USD</p>
                                    <Button onClick={onHandleClickModal}>Apply this job <IconHandClick /></Button>
                                </div>
                                <span>{offer.value.company}</span>
                                <p> {offer.value.jobDescription}</p>
                            </div>
                            <Modal title={`Aplicar a la oferta ${offer.value.nameOffer}`} stateModal={modalState} changeModalState={setModalState}>
                                <CreateAplicant/>
                            </Modal>
                        </> : null
                }): <h1 className="message">Haven't created any Job Offer?</h1>
            }
        </>
    )
}