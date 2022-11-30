import React from 'react'
import Image from 'next/image'

const Navbar =() =>{
  return (
    <div className = 'bg-[#064635] h-28 w-full flex flex-row justify-between z-30 sticky top-0' >
        <div  className = 'flex flex-row ml-20' >
          <Image src='/daunhortus.svg' alt='' height={100} width={100}/>
          <div className = 'text-white font-semibold pt-5' >
            <p className='text-3xl '>HORTUS</p>
            <p>gardening & plants</p>
          </div>
        </div>
        <div className='flex text-white mr-14 pt-10'>
          <div><Image src='/logout.svg' height={24} width={24} alt=''/></div>
          <span>Logout</span>
        </div>
    </div>
  )
}

export default Navbar;