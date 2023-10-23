import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { recentactivities } from "../../../state-manager/reducers/dashboard/dashboard";
import { useNavigate } from "react-router-dom";

const RecentActivities = () => {
	const dispatch = useDispatch();
	const recentActivitiesData = useSelector((state) => state.dashboard.recentActivities);

	const recentDataArray = recentActivitiesData?.recentActivities || [];
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(recentactivities());
	}, [dispatch]);

	const goToTicketDetail = (activity) => {
		const { data } = activity;
		const dataParsed = JSON.parse(data);
		const { ticketId } = dataParsed;
		if ((ticketId, data)) navigate(`/admin/tickets/view/detail/${ticketId}`);
	};

	const formatTimestamp = (timestamp) => {
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		};
		const date = new Date(timestamp);
		const now = new Date();
		const yesterday = new Date(now);
		yesterday.setDate(yesterday.getDate() - 1);

		if (
			date.getDate() === now.getDate() &&
			date.getMonth() === now.getMonth() &&
			date.getFullYear() === now.getFullYear()
		) {
			return (
				"Today " +
				new Intl.DateTimeFormat("en-US", {
					hour: "numeric",
					minute: "numeric",
					hour12: true,
				}).format(date)
			);
		} else if (
			date.getDate() === yesterday.getDate() &&
			date.getMonth() === yesterday.getMonth() &&
			date.getFullYear() === yesterday.getFullYear()
		) {
			return (
				"Yesterday " +
				new Intl.DateTimeFormat("en-US", {
					hour: "numeric",
					minute: "numeric",
					hour12: true,
				}).format(date)
			);
		} else {
			return new Intl.DateTimeFormat("en-US", options).format(date);
		}
	};

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
		margin-top: 8px;
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
					} else if (activity.type === "ticket-update") {
						activityType = "Updated Ticket";
					}

					return (
						<BoxContainer
							key={activity.id}
							data={activity}
							onClick={() => goToTicketDetail(activity)}
						>
							<div>
								<Typography variant="subtitle1">{activityType}</Typography>
								<Text variant="subtitle2">{formatTimestamp(activity.timestamp)}</Text>
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
