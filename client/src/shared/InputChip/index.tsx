import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'


export default function InputChip({inputVal, onChange}:any ) {
    const [value, setValue] = useState('');
    const [inputValues, setInputValues] = useState(['']);


    const handleOnChange = (evt: any) => {
        console.log(evt.target.value);
        setValue(evt.target.value)
        console.log('inputValues',inputValues)
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            setInputValues(current => [...current, value]);
            console.log('inputValues', inputValues)
        }
    }

    /*     useEffect(() => {
            window.addEventListener("keydown", handleKeyDown);
            return () => {
                window.removeEventListener("keydown", handleKeyDown)
            }
        })
        const handleKeyDown = useCallback((event: { key: any; }) => {
            const {key} = event;
            if (key === 'Enter') {
                setInputValues(current => [...current, value]);
                console.log('inputValues', inputValues)
            }
        },[value, inputValues]) */

    return (
        <input type="text" onKeyDown={handleKeyDown} value={value} onChange={handleOnChange} />
    )
}
