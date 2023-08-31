// DropdownMenu.js (Atom)
import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const StyledDropdown = styled("select")`
  background-color: #2B2E72;
  color: #FFF;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  gap: 8px;
letter-spacing: 1px;
cursor: pointer;


  option {
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.32px;

`;

const DropdownMenu = ({ options, onSelect }) => {
	return (
		<StyledDropdown onChange={onSelect}>
			{options.map((option, index) => (
				<option key={index} value={option.value}>
					{option.label}
				</option>
			))}
		</StyledDropdown>
	);
};

DropdownMenu.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		})
	),
	onSelect: PropTypes.func.isRequired,
};

export default DropdownMenu;
