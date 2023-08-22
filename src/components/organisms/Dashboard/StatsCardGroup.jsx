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
				dataColors: ["#000", "#fff"],
			},
		],
	};
	const data2 = {
		labels: ["Pending", "Technician en Route", "In Progress", "Done"],
		datasets: [
			{
				label: "Users Gained",
				data: [30, 10, 10, 30],
				backgroundColor: ["#2B2E72", "#5CE4FF", "#9265E5", "#5057E5"],
				borderColor: "transparent", // Set border color to transparent to remove the border
				borderWidth: 0, // Set borderWidth to 0 to remove the border
				dataColors: ["#fff", "#fff", "#fff", "#fff"],
			},
		],
	};
	const data3 = {
		labels: ["Pending", "Technician en Route", "In Progress", "Done"],
		datasets: [
			{
				label: "Users Gained",
				data: [30, 10, 10, 30],
				backgroundColor: ["#2B2E72", "#5CE4FF", "#9265E5", "#5057E5"],
				borderColor: "transparent", // Set border color to transparent to remove the border
				borderWidth: 0, // Set borderWidth to 0 to remove the border
				dataColors: ["#fff", "#fff", "#fff", "#fff"],
			},
		],
	};

	return (
		<div className="flex gap-[1.8rem] justify-between max-w-full overflow-x-auto">
			<div className="grow">
				<StatsCard data={data1} backgroundColor={"rgba(80, 87, 229, 0.16)"} />
			</div>
			<div className="grow">
				<StatsCard data={data2} backgroundColor={"rgba(146, 101, 229, 0.16)"} />
			</div>
			<div className="grow">
				<StatsCard data={data3} backgroundColor={"rgba(101, 171, 229, 0.16)"} />
			</div>
		</div>
	);
};

export default StatsCardGroup;
