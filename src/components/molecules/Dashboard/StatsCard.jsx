import React from "react";
import PropTypes from "prop-types";
import StatsCardHeader from "../../atoms/Dashboard/StatsCardHeader";
import StatsCardValue from "../../atoms/Dashboard/StatsCardValue";
import StatsPieChart from "../../atoms/Dashboard/StatsPieChart";
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

const StatsCard = ({ header, value, data, backgroundColor }) => {
	return (
		<StyledStatsCard backgroundColor={backgroundColor}>
			<div className="h-full">
				<StatsCardHeader>{header}</StatsCardHeader>
				<StatsCardValue>{value}</StatsCardValue>
			</div>
			<div className="w-[8rem] h-[10rem]">
				<ChartContainer>
					<StatsPieChart data={data} />
				</ChartContainer>
				<StatsLegend data={data} />
			</div>
		</StyledStatsCard>
	);
};

StatsCard.propTypes = {
	header: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	data: PropTypes.any,
	backgroundColor: PropTypes.any,
};

export default StatsCard;
