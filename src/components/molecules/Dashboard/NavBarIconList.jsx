import React, {useState} from 'react'
import { styled } from '@mui/material';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NavbarDropdown from './NavbarDropdown';

const NavBarIconList = () => {
  const List = styled("div")`
    display: flex;
    align-items: center;
    gap: 1.5rem/* 24px */;

    .icon {
      color: #2B2E72;
      cursor: pointer;
    }
  `

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleHandler = () => {
    setShowDropdown(previousValue => !previousValue)
  }

  return (
    <List>
      <div className="">
        <NotificationsNoneSharpIcon className='icon' style={{ fontSize: 30 }}/>
      </div>
      <div className="relative">
        <SettingsOutlinedIcon onClick={toggleHandler} className='icon' style={{ fontSize: 30 }}/>
        {showDropdown && <NavbarDropdown/>}
      </div>
      <div className="">
        <PersonOutlineOutlinedIcon className='icon' style={{ fontSize: 30 }}/>
      </div>
    </List>
  )
}

export default NavBarIconList
