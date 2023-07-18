import React from 'react'
import { styled } from '@mui/material';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

const NavbarDropdown = () => {
  const DropDown = styled("div")`
    z-index: 10;
    padding-top: 1.125rem/* 18px */;
    padding-bottom: 1.125rem/* 18px */;
    padding-left: 1.25rem/* 20px */;
    padding-right: 1.25rem/* 20px */;
    background-color: #fff;
    border-radius: 0.75rem/* 12px */;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.26);
    width: 19rem/* 304px */;
    position: absolute;
    top: 150%;
    right: 0px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .action {
      display: flex; 
      justify-content: space-between; 
      align-items: center;
    }

    .action-text {
      display: flex; 
      align-items: center; 
      gap: 8px;
    }
  `
  const resetPasswordHandler = () => {
    console.log("reset");
  }

  return (
    <DropDown>
      <div className="action cursor-pointer group">
        <div onClick={resetPasswordHandler} className="action-text">
          <RestartAltOutlinedIcon className='text-black group-hover:text-[#2B2E72]'/>
          <span className="font-poppins text-[1rem] text-black group-hover:text-[#2B2E72]">Reset Password</span>
        </div>
        <div className="">
          <NavigateNextOutlinedIcon className='text-black group-hover:text-[#2B2E72]'/>
        </div>
      </div>
      <div className="action cursor-pointer group">
        <div className="action-text">
          <LogoutSharpIcon className='text-black group-hover:text-[#2B2E72]'/>
          <span className="font-poppins text-[1rem] text-black group-hover:text-[#2B2E72]">Logout</span>
        </div>
      </div>
    </DropDown>
  )
}

export default NavbarDropdown