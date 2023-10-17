import React from "react";
import { Box, Typography } from "@mui/material";
import FilterButton from "../../molecules/CustomerDashboard/FilterButton";
import SearchBar from "../../atoms/CustomerDashboard/SearchBar";
import CalendarIcon from "../../molecules/CustomerDashboard/CalendarIcon";
import ViewReportButton from "../../molecules/CustomerDashboard/ViewReportButton";

const FilterBox = ({ typeOptions, statusOptions }) => (
	<div>
		<Typography
			style={{ color: "#000", fontWeight: "500", fontSize: "20px", marginBottom: "16px" }}
		>
			Tickets
		</Typography>
		<Box
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			flexDirection={{ xs: "column", sm: "row" }}
		>
			<Box display="flex" alignItems="center">
				<FilterButton typeOptions={typeOptions} statusOptions={statusOptions} />
				<SearchBar />
				<CalendarIcon />
			</Box>
			<Box marginLeft="auto">
      <ViewReportButton />
    </Box>
		</Box>
	</div>
);

export default FilterBox;
