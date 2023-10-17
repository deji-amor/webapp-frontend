import React from "react";
import { IconButton } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const CalendarIcon = () => (
	<IconButton
		style={{
			background: "#fff",
			padding: "8px 12px",
			borderRadius: "6px",
			boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.10), 0px 0px 2px 0px rgba(0, 0, 0, 0.32)",
			marginLeft: "26px",
		}}
	>
		<CalendarMonthIcon style={{color: "#2B2E72"}} />
	</IconButton>
);

export default CalendarIcon;
