import React from "react";
import PropTypes from "prop-types";
import StatsCardHeader from "../../atoms/Dashboard/StatsCardHeader";
import StatsCardValue from "../../atoms/Dashboard/StatsCardValue";
import CustomerStatsPieChart from "../../atoms/CustomerDashboard/CustomerStatsPieChart";
import { styled } from "@mui/material";
import StatsLegend from "../../atoms/Dashboard/StatsLegend";

const StyledStatsCard = styled("div")`
	border-radius: 0.8125rem;
	background: ${(props) => props.backgroundColor};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 1.5rem 2.25rem;
	height: 100%;
`;

const ChartContainer = styled("div")`
	width: "70px";
	height: "70px";
	
`;

const CustomerStatsCard = ({ header, value, data, backgroundColor }) => {
	return (
		<StyledStatsCard backgroundColor={backgroundColor}>
			<div className="h-full">
				<StatsCardHeader>{header}</StatsCardHeader>
				<StatsCardValue>{value}</StatsCardValue>
			</div>
			<div className="w-[8rem] h-[10rem]">
				<ChartContainer>
					<CustomerStatsPieChart data={data} />
				</ChartContainer>
				<StatsLegend data={data} />
			</div>
		</StyledStatsCard>
	);
};

CustomerStatsCard.propTypes = {
	header: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	data: PropTypes.any,
	backgroundColor: PropTypes.any,
};

export default CustomerStatsCard;
