import React from "react";
import { Box } from "@mui/material";
import FilterBox from "./FilterBox";
import CustomerTicketTable from "./TicketTable";

const Board = () => {
	const typeOptions = ["Project", "Service"];
	const statusOptions = ["Done", "En Route", "In Progress", "Pending"];

	return (
		<>
			<Box bgcolor="#fff" borderRadius="10px" p={3}>
				<FilterBox typeOptions={typeOptions} statusOptions={statusOptions} />
			</Box>
			<CustomerTicketTable />
		</>
	);
};

export default Board;
