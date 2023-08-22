import React from "react";
import StatsCard from "../../molecules/Dashboard/StatsCard";

const StatsCardGroup = () => {
	const data1 = {
		labels: ["Service", "Project"],

		datasets: [
			{
				label: "Users Gained",
				data: [80, 100],
				backgroundColor: ["#CEDFF0", "#5057E5"],
				borderColor: "transparent", // Set border color to transparent to remove the border
				borderWidth: 0, // Set borderWidth to 0 to remove the border
				dataColors: ["#fff", "#000"],
			},
		],
	};
	const data2 = {
		labels: ["Service", "Project"],
		datasets: [
			{
				label: "Users Gained",
				data: [100, 50],
				backgroundColor: ["#9265E5", "#E5DCF5"],
				borderColor: "transparent", // Set border color to transparent to remove the border
				borderWidth: 0, // Set borderWidth to 0 to remove the border
				dataColors: ["#fff", "#000"],
			},
		],
	};
	const data3 = {
		labels: ["Service", "Project"],
		datasets: [
			{
				label: "Users Gained",
				data: [200, 300],
				backgroundColor: ["#5057E5", "#CED0F0"],
				borderColor: "transparent", // Set border color to transparent to remove the border
				borderWidth: 0, // Set borderWidth to 0 to remove the border
				dataColors: ["#fff", "#000"],
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
