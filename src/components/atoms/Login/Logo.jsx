import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../../assets/login/dark.png"
import { styled } from '@mui/material'

const Logo = () => {
  const Text = styled("p")`
    color: #E9E5E5;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 136.023%; /* 1.70031rem */
  `

  return (
    <NavLink to={"/"}>
      <div className='flex items-center '>
        <img src={logo} className='mr-2'/>
        <Text>LogoIpsum</Text>
      </div>
    </NavLink>
  )
}

export default Logo