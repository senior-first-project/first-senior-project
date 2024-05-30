import React from 'react'
import SideBar from './SideBar'

const Layout = () => {
  return (
    <div className='flex flex-row  bg-naturel-100 h-screen w-screen 
     '>
       <SideBar/>
        {/* <div className='bg-teal-200'>header</div>
        <p>footer</p> */}
    </div>
  )
}

export default Layout