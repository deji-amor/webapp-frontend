import React from "react";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // NOSONAR
import ChartDataLabel from "chartjs-plugin-datalabels";

const CustomerStatsPieChart = ({ data }) => {
    const options = {
        maintainAspectRatio: false,
        plugins: {
            tooltips: {
                enabled: true,
            },
            datalabels: {
                display: function(context) {
                    return context.dataset.data[context.dataIndex] !== 0;
                },
                formatter: (value, ctx) => {
                    return value !== 0 ? value : null;
                },
                color: (context) => {
                    const dataIndex = context.dataIndex;
                    const dataValue = context.dataset.data[dataIndex];

                    if(dataValue !== 0) {
                        const dataColors = data.datasets[0].dataColors;
                        return dataColors[dataIndex];
                    }
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

CustomerStatsPieChart.propTypes = {
	data: PropTypes.any,
};

export default CustomerStatsPieChart;
