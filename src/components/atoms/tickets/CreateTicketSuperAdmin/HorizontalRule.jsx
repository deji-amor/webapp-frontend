import React from 'react'
import {styled} from "@mui/material"

const HorizontalRule = () => {
  const Rule = styled("div")`
		width: 100%;
		height: 0.0625rem;
		background: #959595;
	`;

  return (
    <Rule/>
  )
}

export default HorizontalRule