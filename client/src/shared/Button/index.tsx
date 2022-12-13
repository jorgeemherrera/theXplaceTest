import React from 'react'
import './Button.scss';

type Props = {
  children: any,
  disabled?: boolean,
  onClick?: any,
  className?: any
};

export default function Button({ children, disabled, onClick, className }: Props) {
console.log('disabled btn',disabled)
  const myClass = `btn ${className} ${disabled && 'action'}`;
  return (
    <button
      className={myClass || 'btn'}
      onClick={
        !disabled ? onClick : () => { }
      }>{children}</button>
  )
}
