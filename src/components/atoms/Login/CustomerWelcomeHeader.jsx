import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const CustomerWelcomeHeader = ({ children }) => {
	const Header = styled("div")`
		color: #fff;
		font-family: "Poppins", sans-serif;
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	`;

	return <Header>{children}</Header>;
};

CustomerWelcomeHeader.propTypes = {
	children: PropTypes.node,
};

export default CustomerWelcomeHeader;
