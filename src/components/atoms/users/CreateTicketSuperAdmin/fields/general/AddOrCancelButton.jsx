import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const AddOrCancelButton = ({ onClick , type, disabled}) => {
  // const Button = styled("div")`
	// 	color: white;
	// 	background-color: rgba(43, 46, 114, ${disabled ? "0.5" : "1"});
	// 	font-weight: 500;
	// 	border-radius: 0.5rem;
	// 	font-size: 0.875rem;
	// 	line-height: 1.25rem;
	// 	padding: 0.375rem;
	// 	text-align: center;
	// 	display: inline-flex;
	// 	align-items: center;
	// 	cursor: ${disabled ? "not-allowed" : "pointer"};
	// 	bg-opacity: ${disabled ? "0.5" : "1"};
	// `;

	// return (
	// 	<button className={`text-white bg-[#2b2e72] rounded-[0.5rem] font-500 text-[0.875rem] p-[0.375rem] text-center inline-flex items-center ${disabled ? "cursor-not-allowed bg-opacity-[0.5]" : "cursor-pointer bg-opacity-100"}`} type="button" disabled={disabled} onClick={onClick}>{type === "add" ? <AddIcon/> : <ClearIcon/>}</button>
	// );

	return (
		<button
			className={`inline-flex items-center justify-center ${
				type === "add" ? "text-[#04850D]" : "text-[#D73D3D]"
			} ${
				disabled
					? "cursor-not-allowed text-opacity-50"
					: "cursor-pointer"
			}`}
			disabled={disabled}
			onClick={onClick}
		>
			{type === "add" ? <CheckIcon fontSize="small" /> : <CloseIcon fontSize="small" />}
		</button>
	);
};

AddOrCancelButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool
}

export default AddOrCancelButton
