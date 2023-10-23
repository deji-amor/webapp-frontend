import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import CustomerCreation from "./NotificationTypes/CustomerCreation";
import CustomerOnboarding from "./NotificationTypes/CustomerOnboarding";
import TicketUpdate from "./NotificationTypes/TicketUpdate";
import TicketEdit from "./NotificationTypes/TicketEdit";
import CustomerUpdate from "./NotificationTypes/CustomerUpdate";

export const Wrapper = styled("div")`
	padding: 0.5rem;
	align-self: stretch;
	background: ${({ isRead }) => (isRead ? "rgba(240, 240, 240, 0.7)" : "rgba(76, 111, 255, 0.04)")};
	cursor: pointer;
`;

export const Tablet = styled("div")`
	display: inline-block;
	padding: 0.25rem 0.75rem;
	border-radius: 1rem;
	background: rgba(76, 111, 255, 0.12);
	color: #2b2e72;
	font-family: "Poppins", sans-serif;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem; /* 166.667% */
`;

export const Picture = styled("div")`
	width: 3rem;
	height: 3rem;
	border-radius: 100%;
	border: 2px solid #2b2e72;
	background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const Text = styled("p")`
	color: #333;
	font-family: "Poppins", sans-serif;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.25rem;
	letter-spacing: 0.00875rem;

	.highlighted {
		color: #2b2e72;
		font-size: 0.875rem;
		font-weight: 600;
	}
`;

export const TimeStamp = styled("div")`
	color: #706e6e;
	font-family: "Poppins", sans-serif;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.25rem; /* 166.667% */
	letter-spacing: 0.0075rem;
`;

export const Dot = ({ isRead }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
		<circle cx="5.5" cy="6" r="5.5" fill={`${!isRead ? "#2B2E72" : "rgba(43, 46, 114, 0.24)"}`} />
	</svg>
);

Dot.propTypes = {
	isRead: PropTypes.any,
};

const NotificationItem = ({ notification }) => {
	const navigate = useNavigate();
	const { workspace_name, user_type } = useSelector((state) => state.authUser.data);
	const isACustomer = user_type === "customer"
	console.log(workspace_name, user_type);

	const readNotificationHandler = (notification) => {
		if (!notification.is_read) {
			notification.handleUpdateNotification();
		}
		if(isACustomer) return
		if (notification.type.includes("ticket")) {
			const ticketId = notification.identification_id;
			navigate(`/admin/tickets/view/detail/${ticketId}`);
		}
		if (notification.type.includes("customer")) {
			navigate(`/admin/users`);
		}
	};

	if (notification.type === "customer-creation")
		return (
			<CustomerCreation
				notification={notification}
				readNotificationHandler={readNotificationHandler}
			/>
		);

	if (notification.type === "customer-onboarding")
		return (
			<CustomerOnboarding
				notification={notification}
				readNotificationHandler={readNotificationHandler}
			/>
		);

	if (notification.type === "ticket-update")
		return (
			<TicketUpdate notification={notification} readNotificationHandler={readNotificationHandler} />
		);

	if (notification.type === "ticket-edit")
		return (
			<TicketEdit notification={notification} readNotificationHandler={readNotificationHandler} />
		);

	if (notification.type === "customer-update")
		return (
			<CustomerUpdate
				notification={notification}
				readNotificationHandler={readNotificationHandler}
			/>
		);

	return <></>;
};

NotificationItem.propTypes = {
	notification: PropTypes.object,
};

export default NotificationItem;
