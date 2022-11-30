import React, { useState } from 'react'
import {RiArrowDownSLine} from 'react-icons/ri'

const Select =({kategori, desc, style, value, handleChange}) =>{
    const[select, setSelect] = useState({
      name: value ? value.name : "",
      value: value ? value.value: "",
    });
    const[open, setOpen] = useState(false);
  return (
    <>
    <div className="relative mt-1">
      <div onClick = {() => setOpen(!open)}
      className={`py-2 px-3 border shadow border-gray-300 bg-white focus:outline-none flex items-center justify-between ${style}`}>
        <div className='text-sm capitalize'>{select.name ? select.name : desc}</div>
        <div className='text-xl'>
            <RiArrowDownSLine className={`${open && "rotate-180"}`} />
        </div>
    </div>
    <ul className={`bg-white overflow-y-auto rounded shadow
        ${open ? "absolute w-full z-10" : "max-h-0"}`}>
        {kategori.map((item)=>(
            <li 
            key={item.name}
            className={`rounded px-2 w-auto text-sm capitalize hover:bg-[#48BB78] 
            ${item.name === select.name && "bg-white"}`}
            onClick={() => {
              if (item.name !== select.name) {
                setSelect(item);
                setOpen(false);
                if (handleChange){
                  handleChange(item);
                }
              }
            }}
            >
            {item.name}
            </li>
        ))}
    </ul>
    </div>
    </>
  )
}

export default Select
