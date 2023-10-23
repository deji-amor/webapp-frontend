import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from "date-fns";
import { Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Wrapper, Tablet, TimeStamp, Dot, Text } from "../NotificationItem";
import { isEqual, intersection, pickBy } from "lodash";

const CustomerUpdate = ({notification, readNotificationHandler}) => {
	if (notification.type === "customer-update") {
		const { timestamp, old_data, new_data, first_name, last_name} =
			notification;
		const profilePic = notification?.profile_picture;
		console.log(notification);
		const oldDataParsed = JSON.parse(old_data);
		const newDataParsed = JSON.parse(new_data);
		console.log(newDataParsed);
		const commonKeys = intersection(Object.keys(oldDataParsed), Object.keys(newDataParsed));
		const differences = pickBy(
			newDataParsed,
			(value, key) => !isEqual(value, oldDataParsed[key]) && commonKeys.includes(key)
		);
		const {
			first_name: customerFirstName,
			last_name: customerLastName,
			company_name: CustomerCompanyName,
		} = newDataParsed;
		const changedKeys = Object.keys(differences).filter(
			(key) => key.toLocaleLowerCase() !== "datetime"
		);
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
}

CustomerUpdate.propTypes = {
	notification: PropTypes.object,
	readNotificationHandler: PropTypes.func,
};

export default CustomerUpdate