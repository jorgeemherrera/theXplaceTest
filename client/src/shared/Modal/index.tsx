import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { IconPlaystationX } from '@tabler/icons';
type Props = {
    title?: string,
    children: JSX.Element,
    stateModal: boolean,
    changeModalState: any,
    size?: string
};

const Modal = ({ children, title, stateModal, changeModalState, size }: Props) => {
    return (
        <>
            {
                stateModal ?
                    <section className='overlay'>
                        <div className={size === 'sm' ? 'modal-container sm' : 'modal-container'}>
                            <div className='modal-header'>
                                {
                                    !title ?
                                        <h3>Succcess!</h3>
                                        : <h3>Apply to the offer <strong>{title}</strong></h3>
                                }

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
    title: PropTypes.string,
    stateModal: PropTypes.bool.isRequired,
    changeModalState: PropTypes.func,
    closeModal: PropTypes.bool,
    size: PropTypes.any
}
