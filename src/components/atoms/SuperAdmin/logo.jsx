import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/superAdminOnboading/dark.png' 
import { styled } from '@mui/material'

const Logo = () => {
  const Text = styled("p")`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 136.023%; /* 27.205px */
  `
  return (
    <NavLink to={"/"}>
      <div className='flex items-center '>
        <img src={logo} style={{height: "40px", width: "47px", margin: "0 10px 0 10px"}} />
        <Text>LogoIpsum</Text>
      </div>
    </NavLink>
  )
}

export default Logo