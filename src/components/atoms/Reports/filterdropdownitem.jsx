import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import {
	removeMultipleFilterStatus,
} from "../../../state-manager/reducers/reports/tickets/ticketreport";
import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";

const FilterDropdownItemWrapper = styled("div")(({ active }) => ({
	display: "flex",
    justifyContent: "space-between",
	alignItems: "center",
	fontFamily: "Poppins",
	fontSize: "14px",
	fontWeight: "500",
	lineHeight: "20px",
	letterSpacing: "0.02em",
	textAlign: "left",
	padding: "5px",
	borderRadius: "5px",
	color: "rgba(43, 46, 114, 1)",
	background: active ? "rgba(76, 111, 255, 0.08)" : "",
   

	":hover": {
		width: "100%",
		height: "38px",
		border: "0px 0px 1px 0px",
		gap: "16px",
		cursor: "pointer",
		background: "rgba(76, 111, 255, 0.08)",
	},
}));

const FilterDropdownItem = ({ item, setStatus, handleClick }) => {
	const [active, setActive] = useState(false);

	return (
		<FilterDropdownItemWrapper
			active={active}
			key={item.status}
			onClick={() => {
				setStatus(item.status);
				setActive((prev) => !prev);
                handleClick(active)
			}}
		>
			{item.title}
			{active ? <CheckIcon /> : ""}
		</FilterDropdownItemWrapper>
	);
};

FilterDropdownItem.propTypes = {
	item: PropTypes.object,
	setStatus: PropTypes.func,
	handleClick: PropTypes.func,
	status: PropTypes.string,
};

export default FilterDropdownItem;
