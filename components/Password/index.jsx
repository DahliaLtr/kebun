import React, { useState } from 'react'
import {ImEyeBlocked, ImEye} from 'react-icons/im'

const Password=({placeholder})=> {
    const [input, setInput] =useState('')
    const [open, setOpen] = useState(false)
    const handleInput =(e) => {
        setInput(e.target.value)
    }
    const toggle = () => {
        setOpen(!open)
    }
  return (
    <>
    <div>
        <div className='relative'>
        <input type={(open===false)? 'password' : 'text'} placeholder={placeholder} onChange={handleInput} value={input} className="py-2 px-3 rounded-md border shadow text-sm border-gray-300 mt-1 bg-white focus:outline-none w-full"/>
        <div className='text-2xl absolute top-3 right-3'>
            {
                (open===false)? <ImEyeBlocked onClick={toggle}/> : <ImEye onClick={toggle}/>
            }
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Password