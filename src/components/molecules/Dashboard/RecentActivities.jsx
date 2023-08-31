import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { recentactivities } from "../../../state-manager/reducers/dashboard/dashboard";

const RecentActivities = () => {
	const dispatch = useDispatch();
	const recentActivitiesData = useSelector((state) => state.dashboard.recentActivities);

    const recentDataArray = recentActivitiesData?.recentActivities || [];

	//   const [selectedActivityId, setSelectedActivityId] = useState(null);
	//   const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		dispatch(recentactivities());
	}, [dispatch]);

	console.log(recentActivitiesData);

	//   const openModal = (activityId) => {
	//     setSelectedActivityId(activityId);
	//     setIsModalOpen(true);
	//   };

	//   const closeModaL = () => {
	//     setSelectedActivityId(null);
	//     setIsModalOpen(false);
	//   };
	const Typography = styled("h4")`
		color: #000;
		font-family: Poppins;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px; /* 142.857% */
	`;
	const Text = styled("p")`
		color: #706e6e;
		font-family: Poppins;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px; /* 166.667% */
	`;
	const BoxContainer = styled("div")`
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px;
		gap: 16px;
		border-bottom: 1px solid #ececec;
		:hover {
			border-radius: 8px;
			border-bottom: 1px solid #ececec;
			background: rgba(76, 111, 255, 0.08);
			cursor: pointer;
		}
	`;
	return (
		<div className="hover-container">
		{recentDataArray.length > 0 ? (
			recentDataArray.slice(0, 3).map((activity) => {
				let activityType = activity.type;
				if (activity.type === "customer-creation") {
					activityType = "Created Customer";
				}

				return (
					<BoxContainer key={activity.id} data={activity}>
						<div>
							<Typography variant="subtitle1">{activityType}</Typography>
							<Text variant="subtitle2">{activity.timestamp}</Text>
						</div>
						<ArrowForwardIosIcon style={{ color: "#2B2E72" }} />
					</BoxContainer>
				);
			})
		) : (
			<p>No recent activities available.</p>
		)}
	</div>
	);
};

export default RecentActivities;
