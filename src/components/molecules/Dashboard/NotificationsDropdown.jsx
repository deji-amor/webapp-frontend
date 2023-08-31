import React from 'react'
import { styled } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { notificationsActions } from '../../../state-manager/reducers/notifications/notifications';
import PropTypes from "prop-types";
import HorizontalRule from '../../atoms/tickets/CreateTicketSuperAdmin/HorizontalRule';
import NotificationItem from './NotificationItem';
import NotificationsFilterDropdown from './NotificationsFilterDropdown';

const Wrapper = styled("div")`
	position: absolute;
	top: 150%;
	right: 0px;
	padding: 1.5rem 1.25rem;
	flex-direction: column;
	border-radius: 0.75rem;
	background: #fff;
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
	max-width: 35rem;
`;

const OrderText = styled("p")`
	color: #2b2e72;
	font-family: "Poppins", sans-serif;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.25rem; /* 142.857% */
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
	const {
		sortByAscending,
	} = useSelector((state) => state.notifications);

	const orderText = sortByAscending ? "Oldest 1st" : "Newest 1st"
	const dispatch = useDispatch()

	const changeSortOrder = () => {
		dispatch(notificationsActions.updateField({ key: "sortByAscending", value: !sortByAscending}));
	}

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
			<div className="space-y-[1rem]">
				<NotificationItem />
				<NotificationItem />
				{/* <NotificationItem/> */}
			</div>
		</Wrapper>
	);
}

export default NotificationsDropdown