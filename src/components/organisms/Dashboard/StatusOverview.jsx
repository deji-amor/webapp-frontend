import React, { useState } from "react";
import Dropdown from "../../atoms/Dashboard/Dropdown";
import DonutChart from "../../atoms/Dashboard/DonutChart";
import DonutChartDetails from "../../molecules/Dashboard/DonutChartDetails";

const StatusOverview = ({ defaultOption, ticketData, customerData }) => {
	const [selectedOption, setSelectedOption] = useState(defaultOption);

	const handleOptionChange = (option) => {
		setSelectedOption(option);
	};

	const data = selectedOption === "Tickets" ? ticketData : customerData;

	const legendColors = data.chartData.datasets[0].backgroundColor;

	return (
		<div>
			<div
				style={{ display: "flex", justifyContent: "space-between", width: "100%" }}
			>
				<h2>Status Overview</h2>
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

export default StatusOverview;
