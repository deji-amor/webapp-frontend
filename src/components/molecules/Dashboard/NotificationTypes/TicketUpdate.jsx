import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { formatDistanceToNow } from "date-fns";
import { Wrapper, Tablet, TimeStamp, Dot, Text } from "../NotificationItem";

function extractTicketStatusChangeStatus(message) {
	const possibleStatuses = ["PENDING", "TECHNICIAN ENROUTE", "IN-PROGRESS", "DONE"];

	const statusIndex = {};
	possibleStatuses.forEach((status) => {
		if (message.indexOf(status) >= 0) {
			statusIndex[status] = message.indexOf(status);
		}
	});

	const orderedStatutes = Object.entries(statusIndex)
		.sort((a, b) => a[1] - b[1])
		.map((arr) => arr[0]);

	return {
		previousStatus: orderedStatutes[0],
		newStatus: orderedStatutes[1],
	};
}

const TicketUpdate = ({ notification, readNotificationHandler }) => {
	const { timestamp, identification_id, message, last_name, first_name } = notification;
	const profilePic = notification?.profile_picture;
	const date = new Date(timestamp);
	const formattedDistance = formatDistanceToNow(date, { addSuffix: true });
	const { previousStatus, newStatus } = extractTicketStatusChangeStatus(message);

	return (
		<Wrapper
			className=""
			isRead={notification.is_read}
			onClick={() => readNotificationHandler(notification)}
		>
			<Tablet className="mb-[0.75rem] truncate">Status Update</Tablet>
			<div className="flex justify-between items-start gap-[1.5rem]">
				<div className="max-w-[28rem] flex gap-x-[0.5rem]">
					{profilePic ? (
						<img
							className="w-10 h-10 rounded-full border-[2px] border-[#2b2e72]"
							src={profilePic}
							alt="Rounded avatar"
						></img>
					) : (
						<Avatar alt="User Profile" variant="circular" style={{ background: "#2b2e72" }}>
							<PersonIcon style={{ fontSize: 30 }} />
						</Avatar>
					)}
					<div className="">
						<Text>
							<span className="highlighted">
								{first_name} {last_name}
							</span>{" "}
							updated status of Ticket ID {identification_id} from
							<span className="highlighted"> {previousStatus} </span> to
							<span className="highlighted"> {newStatus} </span>
						</Text>
						<TimeStamp>{formattedDistance}</TimeStamp>
					</div>
				</div>
				<div className="">
					<Dot isRead={notification.is_read} />
				</div>
			</div>
		</Wrapper>
	);
};

TicketUpdate.propTypes = {
	notification: PropTypes.object,
	readNotificationHandler: PropTypes.func,
};

export default TicketUpdate;
