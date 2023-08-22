import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const AddOrCancelButton = ({ onClick, type, disabled }) => {

	return (
		<button
			className={`inline-flex items-center justify-center ${
				type === "add" ? "text-[#04850D]" : "text-[#D73D3D]"
			} ${disabled ? "cursor-not-allowed text-opacity-50" : "cursor-pointer"}`}
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
	disabled: PropTypes.bool,
};

export default AddOrCancelButton;
