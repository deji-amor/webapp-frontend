import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const Paragraph = ({ children, position }) => {
	let textPosition = "center";

	if (position === "left") {
		textPosition = "left";
	}
	if (position === "right") {
		textPosition = "right";
	}

	const Paragraph = styled("p")`
		color: #282828;
		text-align: ${textPosition};
		font-family: "Poppins", sans-serif;
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 400;
		line-height: 162.023%; /* 1.82275rem */
	`;

	return <Paragraph>{children}</Paragraph>;
};

Paragraph.propTypes = {
	children: PropTypes.node,
	position: PropTypes.string,
};

export default Paragraph;
