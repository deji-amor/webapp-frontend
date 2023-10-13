import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const LegendContainer = styled("div")`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-end;
	width: 200%;
	position: relative;
	right: 120px;
  bottom: 5px;
`;

const LegendItem = styled("div")`
	display: flex;
	align-items: center;
	margin-right: 0.5rem;
`;

const LegendColor = styled("div")`
	width: 10px;
	height: 10px;
	background-color: ${(props) => props.color};
	border-radius: 50%;
	margin-right: 2px;
`;

const LegendLabel = styled("p")`
	color: #706e6e;
	font-family: "Poppins", "sans-serif";
	font-size: 12px;
	font-weight: 500;
	margin: 0;
	max-width: 180px;
	white-space: normal;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const StatsLegend = ({ data }) => {
    const isEmptyData = data.datasets[0].data.every(value => value === 0);
    const isNoData = data.datasets[0].data.length === 0;

    if (isEmptyData || isNoData) {
        return null;
    }

    return (
        <LegendContainer>
            {data.labels.map((label, index) => {
                if (data.datasets[0].data[index] !== 0) {
                    return (
                        <LegendItem key={index}>
                            <LegendColor color={data.datasets[0].backgroundColor[index]} />
                            <LegendLabel>{label}</LegendLabel>
                        </LegendItem>
                    );
                }
                return null;
            })}
        </LegendContainer>
    );
};



StatsLegend.propTypes = {
	data: PropTypes.any,
};

export default StatsLegend;
