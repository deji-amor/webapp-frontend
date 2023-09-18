import React from 'react'
import { isEqual, intersection, pickBy } from "lodash";
import { useNavigate } from 'react-router-dom';
import { Avatar, } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const Wrapper = styled("div")`
	padding: 0.5rem;
	align-self: stretch;
	background: ${({ isRead }) => (isRead ? "rgba(240, 240, 240, 0.7)": "rgba(76, 111, 255, 0.04)" )};
	cursor: pointer;
`;

const Tablet = styled("div")`
	display: inline-block;
	padding: 0.25rem 0.75rem;
	border-radius: 1rem;
	background: rgba(76,111,255,0.12);
	color: #2b2e72;
	font-family: "Poppins", sans-serif;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem; /* 166.667% */
`;

const Picture = styled("div")`
	width: 3rem;
	height: 3rem;
	border-radius: 100%;
	border: 2px solid #2b2e72;
	background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const Text = styled("p")`
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

const TimeStamp = styled("div")`
	color: #706e6e;
	font-family: "Poppins", sans-serif;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.25rem; /* 166.667% */
	letter-spacing: 0.0075rem;
`;

function extractTicketStatusChangeStatus(message) {
	const possibleStatuses = ["PENDING", "TECHNICIAN ENROUTE", "IN-PROGRESS", "DONE"];

	// Initialize variables to store the found statuses
	let previousStatus = null;
	let newStatus = null;

	// Iterate through the possible statuses
	for (const status of possibleStatuses) {
		// Check if the message contains the current status
		if (message.includes(status)) {
			// If previousStatus is null, set it to the current status
			// Otherwise, set newStatus to the current status
			if (previousStatus === null) {
				previousStatus = status;
			} else {
				newStatus = status;
				break; // Exit the loop when both statuses are found
			}
		}
	}

	return {
		previousStatus,
		newStatus,
	};
}

const Dot = ({ isRead }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
		<circle cx="5.5" cy="6" r="5.5" fill={`${!isRead ? "#2B2E72" : "rgba(43, 46, 114, 0.24)"}`} />
	</svg>
);

Dot.propTypes = {
	isRead: PropTypes.any
}

const NotificationItem = ({notification}) => {
	const navigate = useNavigate()

	const readNotificationHandler = (notification) => {
		if (!notification.is_read) {
			notification.handleUpdateNotification();
		}
		if (notification.type.includes("ticket")){
			const ticketId = notification.identification_id;
			navigate(`/admin/tickets/view/detail/${ticketId}`);
		}
		if (notification.type.includes("customer")){
			navigate(`/admin/users`);
		}
	}

	if (notification.type === "customer-creation") {
		const { data, message, timestamp} = notification;
		const parsedData = JSON.parse(data);
		const {first_name, last_name, company_name} = parsedData
		const date = new Date(timestamp);
		const formattedDistance = formatDistanceToNow(date, { addSuffix: true });

		return (
			<Wrapper className="" isRead={notification.is_read} onClick={() => readNotificationHandler(notification)}>
				<Tablet className="mb-[0.75rem] truncate">Customer Account Creation</Tablet>
				<div className="flex justify-between items-start gap-[1.5rem]">
					<div className="max-w-[28rem] flex gap-x-[0.5rem]">
						<div className="">
							<Text>
								<span className="highlighted">
									{first_name} {last_name}
								</span>{" "}
								from
								<span className="highlighted"> {company_name} </span>
								account has successfully been created
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
	}

	if (notification.type === "customer-onboarding") {
		const { data, message, timestamp } = notification;
		console.log(notification);
		const parsedData = JSON.parse(data);
		console.log(parsedData);
		const { first_name, last_name, company_name } = parsedData;
		const date = new Date(timestamp);
		const formattedDistance = formatDistanceToNow(date, { addSuffix: true });

		return (
			<Wrapper className="" isRead={notification.is_read} onClick={() => readNotificationHandler(notification)}>
				<Tablet className="mb-[0.75rem] truncate">Customer Account Onboarding</Tablet>
				<div className="flex justify-between items-start gap-[1.5rem]">
					<div className="max-w-[28rem] flex gap-x-[0.5rem]">
						<div className="">
							<Text>
								<span className="highlighted">
									{first_name} {last_name}
								</span>{" "}
								from
								<span className="highlighted"> {company_name} </span>
								has successfully completed their account activation
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
	}

	if (notification.type === "ticket-update") {
		const { timestamp, identification_id, message, last_name, first_name  } = notification;
		const profilePic = notification?.profile_picture;
		console.log(notification);
		const date = new Date(timestamp);
		const formattedDistance = formatDistanceToNow(date, { addSuffix: true });
		const {previousStatus, newStatus} = extractTicketStatusChangeStatus(message)

		return (
			<Wrapper
				className=""
				isRead={notification.is_read}
				onClick={() => readNotificationHandler(notification)}
			>
				<Tablet className="mb-[0.75rem] truncate">Ticket Update</Tablet>
				<div className="flex justify-between items-start gap-[1.5rem]">
					<div className="max-w-[28rem] flex gap-x-[0.5rem]">
						{
							profilePic ? 
							<img
								className="w-10 h-10 rounded-full border-[2px] border-[#2b2e72]"
								src={profilePic}
								alt="Rounded avatar"
							></img> :
							<Avatar alt="User Profile" variant="circular" style={{ background: "#2b2e72" }}>
								<PersonIcon style={{ fontSize: 30 }} />
							</Avatar>
						}
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
	}

	if (notification.type === "ticket-edit") {
		const { timestamp, identification_id, message, old_data, new_data, last_name, first_name } = notification;
		const profilePic = notification?.profile_picture;
		console.log(notification);
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
	}

	if (notification.type === "customer-update") {
		const { timestamp, user_id, old_data, new_data, first_name, last_name, company_name } =
			notification;
		const profilePic = notification?.profile_picture
		console.log(notification);
		const oldDataParsed = JSON.parse(old_data);
		const newDataParsed = JSON.parse(new_data);
		console.log(newDataParsed);
		const commonKeys = intersection(Object.keys(oldDataParsed), Object.keys(newDataParsed));
		const differences = pickBy(
			newDataParsed,
			(value, key) => !isEqual(value, oldDataParsed[key]) && commonKeys.includes(key)
		);
		const { first_name: customerFirstName, last_name: customerLastName, company_name: CustomerCompanyName } = newDataParsed;
		const changedKeys = Object.keys(differences).filter((key) => key.toLocaleLowerCase() !== "datetime");
		const date = new Date(timestamp);
		const formattedDistance = formatDistanceToNow(date, { addSuffix: true });

		return (
			<Wrapper
				className=""
				isRead={notification.is_read}
				onClick={() => readNotificationHandler(notification)}
			>
				<Tablet className="mb-[0.75rem] truncate">Customer Profile Update</Tablet>
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
								updated
								{changedKeys.map((key) => (
									<span key={key} className="highlighted capitalize">
										{" "}
										{key.replaceAll("_", " ")},
									</span>
								))}{" "}
								for customer{" "}
								<span className="highlighted">
									{customerFirstName} {customerLastName}
								</span>{" "}
								from <span className="highlighted">{CustomerCompanyName}</span>
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
	}

	return <></>
}

NotificationItem.propTypes = {
	notification: PropTypes.object
}

export default NotificationItem