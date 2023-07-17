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
            <div className="">
              <span className="text-black text-2xl not-italic font-normal leading-[normal] font-poppins ">Hi</span> {" "}
              <span className="text-[#2B2E72] text-2xl not-italic font-bold leading-[normal] font-poppins">User@email.com</span>
            </div>
            {/* <Outlet/> */}
          </div>
        </div>
    </div>
  )
}

export default AppLayout