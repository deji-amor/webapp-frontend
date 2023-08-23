import React from "react";
import StatsCard from "../../molecules/Dashboard/StatsCard";
import { styled } from "@mui/material";

const StyledStatsCardGroup = styled("div")`
	display: flex;
	gap: 29px;
	justify-content: space-between;
	max-width: 100%;
	overflow-x: auto;
`;

const StatsCardGroup = () => {
	const cardData = [
		{
			header: "Total Tickets",
			value: 180,
			data: {
				labels: ["Service", "Project"],
				datasets: [
					{
						data: [80, 100],
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
			header: "Ticket Status",
			value: 80,
			data: {
				labels: ["Pending", "Technician en Route", "In Progress", "Done"],
				datasets: [
					{
						data: [30, 10, 10, 30],
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
			value: 80,
			data: {
				labels: ["Pending", "Technician en Route", "In Progress", "Done"],
				datasets: [
					{
						data: [30, 10, 10, 30],
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
