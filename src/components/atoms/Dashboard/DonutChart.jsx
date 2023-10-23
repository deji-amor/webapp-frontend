import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = ({ data }) => {
  const chartOptions = {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={chartOptions} />;
};

export default DonutChart;
