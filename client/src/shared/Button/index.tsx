import React from 'react'
import './Button.scss';

type Props = {
    children: any,
    disabled?: boolean,
    onClick: any
};

export default function Button({children, disabled, onClick}: Props) {
  return (
    <button className='btn' onClick={
        !disabled ? onClick : () => { }
    }>{children}</button>
  )
}
