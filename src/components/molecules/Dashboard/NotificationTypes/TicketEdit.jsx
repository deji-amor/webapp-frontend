import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import { Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Wrapper, Tablet, TimeStamp, Dot, Text } from "../NotificationItem";
import { isEqual, intersection, pickBy } from "lodash";


const TicketEdit = ({ notification, readNotificationHandler }) => {
	const { timestamp, identification_id, old_data, new_data, last_name, first_name } =
		notification;
	const profilePic = notification?.profile_picture;
	const oldDataParsed = JSON.parse(old_data);
	const newDataParsed = JSON.parse(new_data);
	const commonKeys = intersection(Object.keys(oldDataParsed), Object.keys(newDataParsed));
	const differences = pickBy(
		newDataParsed,
		(value, key) => !isEqual(value, oldDataParsed[key]) && commonKeys.includes(key)
	);
	const changedKeys = Object.keys(differences);
	const date = new Date(timestamp);
	const formattedDistance = formatDistanceToNow(date, { addSuffix: true });

	return (
		<Wrapper
			className=""
			isRead={notification.is_read}
			onClick={() => readNotificationHandler(notification)}
		>
			<Tablet className="mb-[0.75rem] truncate">Ticket Edit</Tablet>
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
							updated the field(s),
							{changedKeys.map((key, ind, arr) => (
								<span key={key} className="highlighted capitalize">
									{" "}
									{key.replaceAll("_", " ")}
									{ind + 1 === arr.length ? "" : ","}
								</span>
							))}{" "}
							of Ticket ID {identification_id}
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

TicketEdit.propTypes = {
	notification: PropTypes.object,
	readNotificationHandler: PropTypes.func,
};

export default TicketEdit;
