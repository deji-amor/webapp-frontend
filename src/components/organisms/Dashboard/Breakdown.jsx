import { Grid, styled } from "@mui/material";
import React from "react";
import Dropdown from "./Dropdown";
import StatusOverview from "./StatusOverview";

export const Breakdown = () => {
	const Box = styled("div")`
		// display: flex;
		align-items: center;
		// flex-shrink: 0;
		border-radius: 12px;
		background: #fff;
		// gap: 14px;
		padding: 16px 32px 20px 32px;
		box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
	`;

	const ticketData = {
		chartData: {
			labels: [],
			datasets: [
				{
					data: [100, 50, 30, 30],
					backgroundColor: ["#4C6FFF", "#6453E0", "#53BFE0", "#5CE4FF"],
				},
			],
		},
		details: [
			{ color: "#4C6FFF", figure: 100, label: "Total Done" },
			{ color: "#6453E0", figure: 50, label: "Total En Route" },
			{ color: "#53BFE0", figure: 30, label: "Total In Progress" },
			{ color: "#5CE4FF", figure: 30, label: "Total Pending" },
		],
	};

	const customerData = {
		chartData: {
			labels: [],
			datasets: [
				{
					data: [100, 50, 30],
					backgroundColor: ["#04850D", "#ED5A11", "#CC961D"],
				},
			],
		},
		details: [
			{ color: "#04850D", figure: 100, label: "Active" },
			{ color: "#ED5A11", figure: 50, label: "Inactive" },
			{ color: "#CC961D", figure: 30, label: "Suspended" },
		],
	};

	const options = ["Tickets", "Customers"];

	return (
		<Grid container spacing={5}>
			<Grid item xs={8}>
				<Box>
					<Dropdown options={options} />
				</Box>
			</Grid>
			<Grid item xs={4}>
				<Box>
					<StatusOverview
						defaultOption="Tickets"
						ticketData={ticketData}
						customerData={customerData}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};
