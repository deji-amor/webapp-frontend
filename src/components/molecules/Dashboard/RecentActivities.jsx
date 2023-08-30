import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { recentactivities } from "../../../state-manager/reducers/dashboard/dashboard";

const RecentActivities = () => {
	const dispatch = useDispatch();
	const recentActivities = useSelector((state) => state.dashboard.recentActivities); // Update the state path

	//   const [selectedActivityId, setSelectedActivityId] = useState(null);
	//   const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		dispatch(recentactivities());
	}, [dispatch]);

    console.log(recentActivities);

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
			{recentActivities &&
				recentActivities.map((activity) => (
					<BoxContainer key={activity.id} data={activity} 
                    // onClick={() => openModal(activity.id)}
                    >
						<Box>
							<div>
								<Typography variant="subtitle1">{activity.type}</Typography>
								<Text variant="subtitle2">Today {activity.timestamp}</Text>
							</div>
							<ArrowForwardIosIcon />
						</Box>
					</BoxContainer>
				))}
		</div>
	);
};

export default RecentActivities;
