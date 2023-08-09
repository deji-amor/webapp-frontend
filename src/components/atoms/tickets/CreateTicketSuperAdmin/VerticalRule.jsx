import React from "react";
import { styled } from "@mui/material";

const VerticalRule = () => {
  const Rule = styled("div")`
		width: 0.0625rem;
		min-height: 100%;
		background: #959595;
	`;

	return <Rule/>
};

export default VerticalRule;
