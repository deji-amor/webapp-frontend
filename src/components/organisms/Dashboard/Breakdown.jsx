import { Grid, styled } from "@mui/material";
import React, { useEffect } from "react";
import Dropdown from "./Dropdown";
import StatusOverview from "./StatusOverview";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../state-manager/reducers/dashboard/dashboard";

export const Breakdown = () => {
	const Box = styled("div")`
		align-items: center;
		border-radius: 12px;
		background: #fff;
		padding: 16px 32px 20px 32px;
		box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
	`;

	const dispatch = useDispatch();
	const analyticsData = useSelector((state) => state.dashboard.analyticsData);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	const getServiceAndProjectStatus = (status) => {
		return (
			analyticsData?.ticketsCount?.serviceTickets?.[`totalServiceTickets${status}`] +
			analyticsData?.ticketsCount?.projectTickets?.[`totalProjectTickets${status}`]
		);
	}; 

	const ticketData = {
		chartData: {
			labels: [],
			datasets: [
				{
					data: [
						getServiceAndProjectStatus("Done"),
						getServiceAndProjectStatus("TechnicianEnroute"),
						getServiceAndProjectStatus("Inprogress"),
						getServiceAndProjectStatus("Pending"),
					],
					backgroundColor: ["#4C6FFF", "#6453E0", "#53BFE0", "#5CE4FF"],
				},
			],
		},
		details: [
			{ color: "#4C6FFF", figure: getServiceAndProjectStatus("Done"), label: "Total Done" },
			{ color: "#6453E0", figure: getServiceAndProjectStatus("TechnicianEnroute"), label: "Total En Route" },
			{ color: "#53BFE0", figure: getServiceAndProjectStatus("Inprogress"), label: "Total In Progress" },
			{ color: "#5CE4FF", figure: getServiceAndProjectStatus("Pending"), label: "Total Pending" },
		],
	};

	const customerData = {
		chartData: {
			labels: [],
			datasets: [
				{
					data: [analyticsData?.customersCount?.totalActiveCustomers || 0, 
						analyticsData?.customersCount?.totalInactiveCustomers || 0, 
						analyticsData?.customersCount?.totalSuspendedCustomers || 0],
					backgroundColor: ["#4C6FFF", "#5CE4FF", "#6453E0"],
				},
			],
		},
		details: [
			{ color: "#4C6FFF", figure: analyticsData?.customersCount?.totalActiveCustomers || 0, label: "Active" },
			{ color: "#5CE4FF", figure: analyticsData?.customersCount?.totalInactiveCustomers || 0, label: "Inactive" },
			{ color: "#6453E0", figure: analyticsData?.customersCount?.totalSuspendedCustomers || 0, label: "Suspended" },
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
