import React from "react";
import StatsCard from "../../molecules/Dashboard/StatsCard";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";

const StyledStatsCardGroup = styled("div")`
	display: flex;
	gap: 29px;
	justify-content: space-between;
	max-width: 100%;
	overflow-x: auto;
`;

const StatsCardGroup = () => {

  const analyticsData = useSelector((state) => state.dashboard.analyticsData);
  
	const cardData = [
		{
			header: "Total Tickets",
			value: analyticsData?.ticketsCount?.totalTickets || 0,
			data: {
				labels: ["Service", "Project"],
				datasets: [
					{
						data: [analyticsData?.ticketsCount?.serviceTickets?.totalServiceTickets || 0,
							analyticsData?.ticketsCount?.projectTickets?.totalProjectTickets || 0,],
						backgroundColor: ["#CEDFF0", "#5057E5"],
						borderColor: "transparent",
						borderWidth: 0,
						dataColors: ["#000", "#fff"],
					},
				],
			},
			backgroundColor: "rgba(80, 87, 229, 0.16)",
		},
		{
			header: "Service Tickets",
			value: analyticsData?.ticketsCount?.serviceTickets?.totalServiceTickets || 0,
			data: {
				labels: ["Pending", "Technician en Route", "In Progress", "Done"],
				datasets: [
					{
						data: [analyticsData?.ticketsCount?.serviceTickets?.totalServiceTicketsPending || 0,
							analyticsData?.ticketsCount?.serviceTickets?.totalServiceTicketsTechnicianEnroute || 0,
							analyticsData?.ticketsCount?.serviceTickets?.totalServiceTicketsInprogress || 0,
							analyticsData?.ticketsCount?.serviceTickets?.totalServiceTicketsDone || 0,],
						backgroundColor: ["#2B2E72", "#5CE4FF", "#9265E5", "#5057E5"],
						borderColor: "transparent",
						borderWidth: 0,
						dataColors: ["#fff", "#fff", "#fff", "#fff"],
					},
				],
			},
			backgroundColor: "rgba(146, 101, 229, 0.16)",
		},
		{
			header: "Project Tickets",
			value: analyticsData?.ticketsCount?.projectTickets?.totalProjectTickets || 0,
			data: {
				labels: ["Pending", "Technician en Route", "In Progress", "Done"],
				datasets: [
					{
						data: [analyticsData?.ticketsCount?.projectTickets?.totalProjectTicketsPending || 0,
							analyticsData?.ticketsCount?.projectTickets?.totalProjectTicketsTechnicianEnroute || 0,
							analyticsData?.ticketsCount?.projectTickets?.totalProjectTicketsInprogress || 0,
							analyticsData?.ticketsCount?.projectTickets?.totalProjectTicketsDone || 0,],
						backgroundColor: ["#2B2E72", "#5CE4FF", "#9265E5", "#5057E5"],
						borderColor: "transparent",
						borderWidth: 0,
						dataColors: ["#fff", "#fff", "#fff", "#fff"],
					},
				],
			},
			backgroundColor: "rgba(101, 171, 229, 0.16)",
		},
	];

	return (
		<StyledStatsCardGroup>
			{cardData.map((card, index) => (
				<div className="grow" key={index}>
					<StatsCard
						header={card.header}
						value={card.value}
						data={card.data}
						backgroundColor={card.backgroundColor}
					/>
				</div>
			))}
		</StyledStatsCardGroup>
	);
};

export default StatsCardGroup;
