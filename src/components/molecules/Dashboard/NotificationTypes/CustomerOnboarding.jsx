import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from "date-fns";
import { Wrapper, Tablet, TimeStamp, Dot, Text } from "../NotificationItem";

const CustomerOnboarding = ({notification, readNotificationHandler}) => {
			const { data, timestamp } = notification;
			const parsedData = JSON.parse(data);
			const { first_name, last_name, company_name } = parsedData;
			const date = new Date(timestamp);
			const formattedDistance = formatDistanceToNow(date, { addSuffix: true });

			return (
				<Wrapper
					className=""
					isRead={notification.is_read}
					onClick={() => readNotificationHandler(notification)}
				>
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

CustomerOnboarding.propTypes = {
	notification: PropTypes.object,
	readNotificationHandler: PropTypes.func,
};

export default CustomerOnboarding