import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { IconPlaystationX } from '@tabler/icons';
type Props = {
    title: string,
    children: JSX.Element,
    stateModal: boolean,
    changeModalState: any
};

const Modal = ({ children, title, stateModal, changeModalState }: Props) => {
    return (
        <>
            {
                stateModal ?
                    <section className='overlay'>
                        <div className='modal-container'>
                            <div className='modal-header'>
                                <h3>Apply to the offer: <strong>{title}</strong></h3>
                            </div>
                            <IconPlaystationX id='icon-play-x' onClick={() => changeModalState(false)} />
                            {children}
                        </div>
                    </section>
                    : null
            }

        </>
    )
}

export default Modal;

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    stateModal: PropTypes.bool.isRequired,
    changeModalState: PropTypes.func
}
