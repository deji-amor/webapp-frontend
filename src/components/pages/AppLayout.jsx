import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../molecules/Dashboard/Sidebar';
import Navbar from '../molecules/Dashboard/Navbar';
import LogoutOverlay from '../organisms/Logout/LogoutOverlay';
// import { logoutActions } from '../../state-manager/reducers/logout/logout';
import { useSelector } from 'react-redux';

const AppLayout = () => {
  const showModal = useSelector(state => state.logout.showModal)

  return (
    <> 
    {showModal && <LogoutOverlay/>}
      <div className='flex h-screen max-h-screen'>
          <Sidebar/>
          <div className='basis-[85%] flex flex-col'>
            <Navbar/>
            <div className="bg-[#F8FAFC] py-[1.125rem] px-[2.5rem] grow space-y-[1.25rem] overflow-y-auto">
              <Outlet/>
            </div>
          </div>
      </div>
    </>
  )
}

export default AppLayout