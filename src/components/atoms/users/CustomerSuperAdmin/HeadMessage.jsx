import { styled } from '@mui/material';
import PropTypes from "prop-types";
import React from 'react'

const HeadMessage = ({ children }) => {
    const Typography = styled("h3")`
        color: #2B2E72;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
	`;
  return (
    <Typography>{ children }</Typography>
  )
}

HeadMessage.propTypes = {
	children: PropTypes.node,
};

export default HeadMessage