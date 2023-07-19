import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../molecules/Dashboard/Sidebar';
import Navbar from '../molecules/Dashboard/Navbar';
import LogoutOverlay from '../organisms/Logout/LogoutOverlay';
// import { logoutActions } from '../../state-manager/reducers/logout/logout';
import { useSelector } from 'react-redux';
import ResetPassword from "../organisms/Password/resetpassword";

const AppLayout = () => {
  const showLogoutModal = useSelector(state => state.logout.showModal)
  const showResetModal = useSelector(state => state.logout.showResetModal)

  return (
    <> 
    {showLogoutModal && <LogoutOverlay/>}
    {showResetModal && <ResetPassword/>}

      <div className='flex h-screen max-h-screen'>
          <Sidebar/>
          <div className='basis-[85%] flex flex-col max-w-[85%]'>
            <Navbar/>
            <div className="bg-[#F8FAFC] py-[1.125rem] px-[2.5rem] grow space-y-[1.25rem] overflow-y-auto overflow-x-auto">
              <Outlet/>
            </div>
          </div>
      </div>
    </>
  )
}

export default AppLayout;
