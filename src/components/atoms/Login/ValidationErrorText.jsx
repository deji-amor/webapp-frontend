import React from 'react'
import PropTypes from 'prop-types'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { styled } from '@mui/material'

const ValidationErrorText = ({children, errorFromServer}) => {
  const Paragraph = styled("p")`
  color: rgba(215, 61, 61, 0.90);
  font-family: "Poppins", san-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem; /* 100% */
  `

  return (
    <Paragraph>
      {!errorFromServer && <ErrorOutlineIcon className='w-[0.7rem] h-[0.7rem] mr-1'/>}
      {children}
    </Paragraph>
  )
}

ValidationErrorText.propTypes = {
  children: PropTypes.node,
  errorFromServer: PropTypes.bool
}

export default ValidationErrorText