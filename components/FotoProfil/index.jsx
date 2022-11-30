import React, { useState } from 'react'
import Image from 'next/image'

const FotoProfil = () =>{
    const [image, setImage] =useState("https://www.hortusweb.com/image/20220307152235.jpg")
    const [saveImage, setSaveImage] =useState(null)

    const hanldeUploadImage = (e) =>{
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setImage(URL.createObjectURL(uploaded));
    }


  return (
    <div>
        <label className='h-full w-full top-0 cursor-pointer flex flex-col justify-center items-center' >
            <Image id='file-ip--1-priview' alt='' className='w-full h-full object-cover object-center hidden'/>
            <Image src={image} width={170} height={170} alt='' className='rounded-full w-48 h-48'/>
            <input className='hidden' 
            name='image' 
            type='file' 
            id='formfile' 
            accept='image/*' 
            onChange={hanldeUploadImage}/>
            <span className='text-sm text-gray-400'>Klik untuk pilih foto profil !</span>
        </label>
      
    </div>
  )
}

export default FotoProfil
