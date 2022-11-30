import React, { useState } from 'react'

const Inputfields=({type, placeholder, style}) => {
    const [input, setInput] =useState('')
    const handleInput =(e) => {
        setInput(e.target.value)
    }
    return (
        <>
        <div>
            <input type={type} placeholder={placeholder} onChange={handleInput} value={input} className={`w-full py-2 px-3 border shadow text-sm border-gray-300 bg-white focus:outline-none capitalize mt-1 ${style}`}/>
        </div>
        </>
    )
}

export default Inputfields