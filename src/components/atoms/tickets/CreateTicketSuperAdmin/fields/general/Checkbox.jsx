import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const Label = styled("label")`
	color: #2b2e72;
	font-family: Poppins;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.5rem; /* 171.429% */
	cursor: pointer;
`;

const Checkbox = ({ onChange, isActive, children }) => {
	const id = `${children}checkbox`

	return (
		<div className="flex items-center gap-[0.75rem]">
			<input
				type="checkbox"
				checked={isActive}
				className="w-[1.25rem] h-[1.25rem] p-[0.1875rem] rounded-[0.375rem] accent-[#2b2e72] cursor-pointer"
				onChange={() => onChange(children)}
				id={id}
			/>
			<Label htmlFor={id} className="text-[#2b2e72] text-[0.875rem] font-[500] capitalize leading-[1.5rem]">{children}</Label>
		</div>
	);
};

Checkbox.propTypes = {
	onChange: PropTypes.func,
	isActive: PropTypes.bool,
	children: PropTypes.node,
};

export default Checkbox;
