import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar/SidebarMenu'

const Layout =({children}) => {
  return (
    <div className=''>
        <Navbar/>
        <Sidebar/>
        <div className='ml-72 mr-10 pt-5 pb-10'>{children}</div>
    </div>
  )
}

export default Layout