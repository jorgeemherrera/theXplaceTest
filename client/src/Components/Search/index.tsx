import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_OFFERS } from '../../Graphql/Queries/Queries';
import Modal from '../../shared/Modal';
import './Search.scss';

import { CreateAplicant } from '../CreateAplicant';
import {
    IconBuilding,
    IconPlaystationX,
    IconBuildingCommunity,
    IconCalendarEvent
} from '@tabler/icons';
import { IconCalendarOff } from '@tabler/icons';
import { IconCurrencyDollar } from '@tabler/icons';
import { IconDeviceLaptop } from '@tabler/icons';
import { IconDiscountCheck } from '@tabler/icons';
import { IconHandClick } from '@tabler/icons';

import Button from '../../shared/Button';

export default function Search() {
    const [search, setSearch]: [string, (search: string) => void] = useState('');
    const { data } = useQuery(GET_ALL_OFFERS);
    const [modalState, setModalState] = useState(false);
    const [offerId, setOfferId] = useState('');
    const [nameOffer, setNameOffer] = useState('');

    const handleChange = (e: { target: { value: string }; }) => {
        setSearch(e.target.value);
    };

    const onHandleClickModal = (id: any, name: any) => {
        setOfferId(id);
        setNameOffer(name);
        setModalState(!modalState);
    };

    const offerTypeColor = (jobType: any) => {
        if (jobType === 'Remote') {
            return 'pill-offer-type remote'
        } else if (jobType === 'Hybrid') {
            return 'pill-offer-type hybrid'
        } else {
            return 'pill-offer-type onsite'
        }
    };

    const offerTypeIcon = (jobType: any) => {
        if (jobType === 'Remote') {
            return <IconDeviceLaptop />
        } else if (jobType === 'Hybrid') {
            return <IconBuildingCommunity />
        } else {
            return <IconBuilding />
        }
    };

    return (
        <div>
            <div className='search-bar'>
                <p>Search Offer...</p>
                <input type='text' value={search} onChange={handleChange} className='search-offer' />
            </div> :
            {
                data ?
                    data?.getJobOffers.map((offer: any, idx: number) => {
                        return search === '' || data?.getJobOffers[idx].value.nameOffer.toLowerCase().includes(search.toLowerCase()) ?
                            <div key={offer.name}>
                                <div className={offer.value.stateActive === 'true' ? 'job-offer' : 'job-offer inactive'}>
                                    <div className='job-offer__header'>
                                        <h1> {offer.value.nameOffer}</h1>
                                        <span className={`${offerTypeColor(offer.value.jobType)}`}>
                                            {offerTypeIcon(offer.value.jobType)}
                                            {offer.value.jobType} </span>
                                        <span className='date'><IconCalendarEvent /> <span>Open offer: </span>{offer.value.offerStartDate}</span>
                                        <span className='date'><IconCalendarOff /> <span>Close offer:</span>  {offer.value.offerEndDate}</span>
                                        <span className={offer.value.stateActive === 'true' ? 'pill-offer active' : 'pill-offer inactive'}>{offer.value.stateActive === 'true' ? <IconDiscountCheck /> : <IconPlaystationX />}{offer.value.stateActive === 'true' ? 'active' : 'inactive'}</span>
                                    </div>
                                    <div className='job-offer__description'>
                                        <p className='skills'><span>Skills:</span> {offer.value.tools}</p>
                                        <p className='disciplines'><span>Disciplines:</span> {offer.value.disciplines}</p>
                                        <p className='rate-hour'><span>Rate per hour:</span> <IconCurrencyDollar />{offer.value.ratePerHour} USD</p>
                                        <Button disabled={offer.value.stateActive === 'false'}onClick={() => onHandleClickModal(offer.name, offer.value.nameOffer)} key={offer.name}>Apply this job <IconHandClick /></Button>
                                    </div>
                                    <span>{offer.value.company}</span>
                                    <p> {offer.value.jobDescription}</p>
                                    <Modal title={nameOffer} stateModal={modalState} changeModalState={setModalState}>
                                        <CreateAplicant jobOffer={offerId} changeModalState={true}/>
                                    </Modal>
                                </div>
                            </div> : null
                    }) : <h1 className='message'>Haven't created any Job Offer?</h1>
            }
        </div>
    )
}