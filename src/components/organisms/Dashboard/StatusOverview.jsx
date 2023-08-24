import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "../../atoms/Dashboard/Dropdown";
import DonutChart from "../../atoms/Dashboard/DonutChart";
import DonutChartDetails from "../../molecules/Dashboard/DonutChartDetails";
import { styled } from "@mui/material";

const StatusOverview = ({ defaultOption, ticketData, customerData }) => {
  const Typography = styled("h2")`
    color: #706e6e;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 37.825px; /* 236.407% */
  `;

  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const data = selectedOption === "Tickets" ? ticketData : customerData;

  const legendColors = data.chartData.datasets[0].backgroundColor;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          gap: "24px",
          margin: "10px 0px",
        }}
      >
        <Typography>Status Overview</Typography>
        <Dropdown
          options={["Tickets", "Customers"]}
          selectedOption={selectedOption}
          onSelect={handleOptionChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div>
          <DonutChartDetails details={data.details} legendColors={legendColors} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: "150px", height: "150px", position: "relative" }}>
            <DonutChart data={data.chartData} />
            <div
              style={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                {data.chartData.datasets[0].data.reduce((sum, value) => sum + value, 0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StatusOverview.propTypes = {
  defaultOption: PropTypes.string.isRequired,
  ticketData: PropTypes.shape({
    details: PropTypes.array.isRequired,
    chartData: PropTypes.object.isRequired,
  }).isRequired,
  customerData: PropTypes.shape({
    details: PropTypes.array.isRequired,
    chartData: PropTypes.object.isRequired,
  }).isRequired,
};

export default StatusOverview;
