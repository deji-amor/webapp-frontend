import React from "react";
import StatsCard from "../../molecules/CustomerDashboard/StatsCard";

const StatsCardGroup = () => {
	const data1 = {
		labels: ["Service", "Project"],

		datasets: [
			{
				label: "Users Gained",
				data: [0, 1],
				backgroundColor: ["#5057E5", "#fff"],
				borderColor: "transparent",
				borderWidth: 0,
				dataColors: ["#000", "#000"],
			},
		],
	};
	const data2 = {
		labels: ["Done", "In Progress", "Pending"],
		datasets: [
			{
				label: "Users Gained",
				data: [0, 50],
				backgroundColor: ["#5057E5", "#fff"],
				borderColor: "transparent",
				borderWidth: 0, 
				dataColors: ["#000", "#000"],
			},
		],
	};
	const data3 = {
		labels: ["Done", "In Progress", "Pending"],
		datasets: [
			{
				label: "Users Gained",
				data: [0, 300],
				backgroundColor: ["#9265E5", "#fff"],
				borderColor: "transparent",
				borderWidth: 0, 
				dataColors: ["#000", "#000"],
			},
		],
	};

	return (
		<div className="flex gap-[1.8rem] justify-between max-w-full overflow-x-auto">
			<div className="grow">
				<StatsCard data={data1} backgroundColor={"#B8BAE5"} />
			</div>
			<div className="grow">
				<StatsCard data={data2} backgroundColor={"#C8B8E5"} />
			</div>
			<div className="grow">
				<StatsCard data={data3} backgroundColor={"#CEE8F5"} />
			</div>
		</div>
	);
};

export default StatsCardGroup;
