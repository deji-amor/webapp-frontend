import React, {useState} from 'react'
import { styled } from '@mui/material';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({link, icon}) => {
  const [isActive, setIsActive] = useState(false)

  const Link = styled("div")`
    display: flex; 
    align-items: center; 
    padding-left: 1.62rem;
    width: 10rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding-top: 0.5rem/* 8px */;
    padding-bottom: 0.5rem/* 8px */;
    text-transform: capitalize;
    background: ${isActive ? "#fff" : "#2B2E72"};
    cursor: pointer;

    .icon-span {
      margin-right: 0.5rem;
    }

    .icon {
      width: 1.5rem;
      height: 1.5rem;
      color:  ${!isActive ? "#fff" : "#2B2E72"};
    }

    .label {
      color: #fff;
      color: 1rem;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      color:  ${!isActive ? "#fff" : "#2B2E72"};
    }
  `

  if(link === "logout") {
    return (
      <Link onClick={() => console.log("tuyvib")} className="">
        <span className="icon-span">
          {icon}
        </span>
        <span className="label">{link}</span>
      </Link>
    )
  }

  return (
    <NavLink className={({isActive}) => isActive ? setIsActive(true) : setIsActive(false)} to={link} end>
      <Link className="">
        <span className="icon-span">
          {icon}
        </span>
        <span className="label">{link}</span>
      </Link>
    </NavLink>
  )
}

SidebarLink.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.node,
  isActive: PropTypes.bool
}

export default SidebarLink
