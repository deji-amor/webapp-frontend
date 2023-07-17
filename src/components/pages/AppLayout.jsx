import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../molecules/Dashboard/Sidebar';
import Navbar from '../molecules/Dashboard/Navbar';


const AppLayout = () => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar/>
        <div className='basis-[85%] flex flex-col'>
          <Navbar/>
          <div className="bg-[#F8FAFC] py-[1.125rem] px-[2.5rem] grow space-y-[1.25rem]">
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default AppLayout