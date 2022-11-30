import React from 'react'
import SubMenu from '../SubMenu'
import { useAppContext } from '../../../../Hooks/useAppContext';
import Image from 'next/image'
const Sidebar=()=> {
  const { Menu } = useAppContext();
  const{
    Menus
  } = Menu;
  return (
    <div className=''>
      <div className='fixed w-1/5 md:w-64 left-0 h-[calc(100vh-112px)] overflow-y-auto shadow'>
        <div className='flex flex-col items-center pt-4'>
          <Image src='https://www.hortusweb.com/image/20220307152235.jpg' alt='' className='rounded-full shadow-md' height={80} width={80}/>
            <p className='text-sm'>username</p>
            <p className='font-semibold text-slate-500'>Nama Lengkap</p>
        </div>
      <div className = 'pt-4' >
          <div className = 'flex flex-col'>
            {Menus.map((menu, index) => (
              <SubMenu key={index} {...menu} />
            ))}
          </div>
      </div>
    </div>
    </div>
    
  )
}

export default Sidebar
