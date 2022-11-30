import React from 'react'
import Image from 'next/image'

const ButtonInfo =({icon, nilai, keterangan }) =>{
  return (
    <div className='pt-5 text-center justify-center'>
        <div className='shadow rounded-lg'>
            <div className='flex items-center justify-center pt-4 pb-2'>
              <Image src={icon} height={25} width={25} alt=''/>
              <span>{nilai}</span>
            </div>
            <span className='text-xs text-gray-400'>{keterangan}</span>
        </div>
    </div>
  )
}

export default ButtonInfo