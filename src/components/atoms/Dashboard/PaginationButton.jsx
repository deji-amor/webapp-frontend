import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const PaginationButton = ({children, onClick, isActive}) => {
  const Button = styled("button")`
    border-radius: 0.25rem/* 4px */;
    padding-top: 0.5rem/* 8px */;
    padding-bottom: 0.5rem/* 8px */;
    padding-left: 0.75rem/* 12px */;
    padding-right: 0.75rem/* 12px */;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem/* 14px */;
    background-color : ${isActive ? "#2B2E72" : "#fff"};
    color:  ${!isActive ? "#2B2E72" : "#fff"};

    &:hover {
      background-color: #2B2E72;
      color: #fff;
    }
  `

  return (
    <Button onClick={() => onClick(children)}>{children}</Button>
  )
}

PaginationButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
}

export default PaginationButton