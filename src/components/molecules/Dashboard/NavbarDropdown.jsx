import React from 'react'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

const NavbarDropdown = () => {
  const DropDown = <></>

  return (
    <div>NavbarDropdown</div>
  )
}

export default NavbarDropdown

const t = <div className='relative'>
<div className="z-10 py-[1.125rem] px-[1.25rem] hidde bg-white divide-black rounded-[0.75rem] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.26)] w-[19rem] absolute top-[110%] right-0 space-y-[1.5rem]">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-[8px]">
      <RestartAltOutlinedIcon className='text-black'/>
      <span className="font-poppins text-[1rem] text-black">Reset Password</span>
    </div>
    <div className="">
      <NavigateNextOutlinedIcon/>
    </div>
  </div>
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-[8px]">
      <LogoutSharpIcon className='text-[#2B2E72]'/>
      <span className="font-poppins text-[1rem] text-[#2B2E72]">Logout</span>
    </div>
  </div>
</div>
</div>