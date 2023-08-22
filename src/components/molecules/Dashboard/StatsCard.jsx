import React from "react";
import PropTypes from "prop-types";
import StatsCardHeader from "../../atoms/Dashboard/StatsCardHeader";
import StatsCardValue from "../../atoms/Dashboard/StatsCardValue";
import StatsPieChart from "../../atoms/Dashboard/StatsPieChart";
import { styled } from "@mui/material";

const StatsCard = ({ data, backgroundColor }) => {
	const Card = styled("div")`
		border-radius: 0.8125rem;
		background: ${backgroundColor};
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.625rem 2.25rem;
		height: 100% .item {

		}
	`;

	return (
		<Card>
			<div className="h-full">
				<StatsCardHeader>Total Tickets</StatsCardHeader>
				<StatsCardValue>180</StatsCardValue>
			</div>
			<div className="w-[9rem] h-[8rem]">
				<StatsPieChart data={data} />
			</div>
		</Card>
	);
};

StatsCard.propTypes = {
	data: PropTypes.any,
	backgroundColor: PropTypes.any,
};

export default StatsCard;
