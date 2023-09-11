import React, {useMemo} from 'react'
import { uniqWith, isEqual } from 'lodash';
import { styled } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { notificationsActions } from '../../../state-manager/reducers/notifications/notifications';
import PropTypes from "prop-types";
import HorizontalRule from '../../atoms/tickets/CreateTicketSuperAdmin/HorizontalRule';
import NotificationItem from './NotificationItem';
import NotificationsFilterDropdown from './NotificationsFilterDropdown';
import { v4 } from 'uuid';

const Wrapper = styled("div")`
	position: absolute;
	top: 150%;
	right: 0px;
	padding: 1.5rem 1.25rem;
	padding-bottom: 1rem;
	flex-direction: column;
	border-radius: 0.75rem;
	background: #fff;
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
	min-width: 35rem;
	max-width: 40rem;
`;

const OrderText = styled("p")`
	color: #2b2e72;
	font-family: "Poppins", sans-serif;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.25rem; /* 142.857% */
`;

const InfoText = styled("p")`
	color: #000;
	text-align: center;
	font-family: "Poppins", sans-serif;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.25rem; /* 166.667% */
`;

const OrderIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
	>
		<g clipPath="url(#clip0_4726_32449)">
			<path
				d="M11.25 13.125L14.375 16.25L17.4999 13.1255"
				stroke="#2B2E72"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.375 8.75V16.25"
				stroke="#2B2E72"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.75 10H9.37492"
				stroke="#2B2E72"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.75 5H14.3749"
				stroke="#2B2E72"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.75 15H8.125"
				stroke="#2B2E72"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_4726_32449">
				<rect width="20" height="20" fill="white" />
			</clipPath>
		</defs>
	</svg>
);

OrderIcon.propTypes = {
	className: PropTypes.string,
};

const NotificationText = styled("h1")`
	color: #2b2e72;
	font-family: "Poppins", sans-serif;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

const NotificationsDropdown = () => {
	const { sortByAscending, notifications, currentSearchValue } = useSelector(
		(state) => state.notifications
	);

	const orderText = sortByAscending ? "Oldest 1st" : "Newest 1st"
	const dispatch = useDispatch()

	const changeSortOrder = () => {
		dispatch(notificationsActions.updateField({ key: "sortByAscending", value: !sortByAscending}));
	}

	const notificationsList = useMemo(() => {
		const uniqueArray = uniqWith(notifications, isEqual)
		let list = uniqueArray.filter(notification => {
			if(currentSearchValue === "All") return true
			if(currentSearchValue === "Account Creation") return notification.type === "customer-creation";
			if(currentSearchValue === "Account Onboarding") return notification.type === "customer-onboarding";
			if (currentSearchValue === "Profile Update") return notification.type === "customer-update";
			if (currentSearchValue === "Ticket Update") return notification.type === "ticket-update";
			if (currentSearchValue === "Ticket Edit") return notification.type === "ticket-edit";
		})

		if (!sortByAscending) {
			list = list.slice().reverse();
		}

		list.sort((a, b) => {
			if(a.is_read === 1 && b.is_read === 0){
				return 1
			}else if (a.is_read === 0 && b.is_read === 1) {
				return -1
			}else {
				return b.id - a.id
			}
		})
		return list
	}, [notifications, sortByAscending, currentSearchValue])

	const r = notificationsList

  return (
		<Wrapper>
			<div className="flex justify-between gap-[7rem]">
				<NotificationText>Notifications</NotificationText>
				<div className="flex items-center gap-[0.75rem]">
					<NotificationsFilterDropdown />
					<OrderText
						onClick={changeSortOrder}
						className="truncate flex items-center cursor-pointer hover:underline"
					>
						<span>{orderText}</span>
						<OrderIcon className={sortByAscending ? "" : "rotate-180"} />
					</OrderText>
				</div>
			</div>
			<div className="my-[0.68rem]">
				<HorizontalRule />
			</div>
			<div className="flex flex-col h-[25rem]">
				<div className="basis-[85%] space-y-[1rem] max-h-[20rem] overflow-y-auto">
					{r.slice().map((notification) => (
						<NotificationItem notification={notification} key={v4()} />
					))}
				</div>
				<div className="basis-[15%] p-[1rem] flex items-center justify-center">
					<InfoText className="max-w-[12rem] text-center">
						Showing Notifications within the last 30 days
					</InfoText>
				</div>
			</div>
		</Wrapper>
	);
}

export default NotificationsDropdown