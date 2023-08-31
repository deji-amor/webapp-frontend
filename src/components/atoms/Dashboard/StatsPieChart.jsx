import React from "react";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // NOSONAR
import ChartDataLabel from "chartjs-plugin-datalabels";

const StatsPieChart = ({ data }) => {
	const options = {
		maintainAspectRatio: false,
		plugins: {
			tooltips: {
				enabled: true,
			},
			datalabels: {
				formatter: (value, ctx) => {
					return value;
				},
				color: (context) => {
					const dataColors = data.datasets[0].dataColors;

					const dataIndex = context.dataIndex;

					return dataColors[dataIndex];
				},
				font: {
					weight: "bold",
					family: "'Poppins', 'sans-serif'",
					size: 14,
				},
			},
			legend: {
				display: false,
			},
		},
	};

	return <Pie data={data} options={options} plugins={[ChartDataLabel]} />;
};

StatsPieChart.propTypes = {
	data: PropTypes.any,
};

export default StatsPieChart;
