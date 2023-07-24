import React from "react";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabel from "chartjs-plugin-datalabels";

const StatsPieChart = ({ data }) => {
	const options = {
		maintainAspectRatio: false,
		plugins: {
			tooltips: {
				enabled: !false,
			},
			datalabels: {
				formatter: (value, ctx) => {
					const datapoints = ctx.chart.data.datasets[0].data;
					const total = datapoints.reduce((total, datapoint) => total + datapoint, 0);
					const percentage = (value / total) * 100;
					return percentage.toFixed(2) + "%";
				},
				color: (context) => {
					// Define an array of colors for each data label (percentage label)
					const dataColors = data.datasets[0].dataColors; // Add more colors if you have more data points

					// Get the data index for the current data label
					const dataIndex = context.dataIndex;

					// Return the color based on the data index
					return dataColors[dataIndex];
				},
				font: {
					weight: "bold", // Increase the font weight to "bold"
					family: "'Poppins', 'sans-serif'",
					size: 11,
				},
			},
			legend: {
				display: true, // Hide the legend
				position: "bottom",
				fullSize: false,
				borderRadius: 20,
				labels: {
					boxWidth: 10,
					boxHeight: 10,
					font: {
						size: 10,
						family: "'Poppins', 'sans-serif'",
						weight: 600,
						color: "#252421",
					},
					padding: 10,
				},
			},
		},
	};

	return <Pie data={data} options={options} plugins={[ChartDataLabel]} />;
};

StatsPieChart.propTypes = {
	data: PropTypes.any,
};

export default StatsPieChart;
