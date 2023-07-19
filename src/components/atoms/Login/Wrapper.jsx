import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const Wrapper = ({ children }) => {
	const Wrapper = styled("div")`
		max-width: 26.56rem;
		margin: 0 auto;
	`;

	return <Wrapper>{children}</Wrapper>;
};

Wrapper.propTypes = {
	children: PropTypes.node,
};

export default Wrapper;
