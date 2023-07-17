import React from 'react'
import NavBarSearch from '../../atoms/Dashboard/NavBarSearch';
import NavBarIconList from './NavBarIconList';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { styled } from '@mui/material'

const Navbar = () => {
  const NavigationBar = styled("nav")`
    padding: 1.125rem 2.5rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search {
      position: relative;
      flex-basis: 20rem/* 320px */;
    }
  `

  return (
    <NavigationBar>
      <NavBarSearch/>
      <NavBarIconList/>
    </NavigationBar>
  )
}

export default Navbar