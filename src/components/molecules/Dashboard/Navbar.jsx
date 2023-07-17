import React from 'react'
import NavBarSearch from '../../atoms/Dashboard/NavBarSearch';
import NavBarIconList from './NavBarIconList';

import { styled } from '@mui/material'

const Navbar = () => {
  const NavigationBar = styled("nav")`
    padding: 1.125rem 2.5rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 8px 8px 8px 8px rgb(0, 0, 0);

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