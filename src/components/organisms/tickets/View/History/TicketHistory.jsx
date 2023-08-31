import React from 'react'
import { styled } from '@mui/material';
import HorizontalRule from '../../../../atoms/tickets/CreateTicketSuperAdmin/HorizontalRule';
import HistoryItemList from './HistoryItemList';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { ticketsHistoryActions } from '../../../../../state-manager/reducers/tickets/ticketHistory';

const LogText = styled("p")`
	color: #706e6e;
	font-family: Poppins;
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem; /* 125% */
	letter-spacing: 0.00938rem;
`;

const OrderText = styled("p")`
	color: #2b2e72;
	font-family: Poppins;
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem; /* 125% */
	letter-spacing: 0.00938rem;
`;

const OrderIcon = ({className}) => (
	<svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
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
	className: PropTypes.string
}

const TicketHistory = () => {
	const {
		sortByAscending,
		loading: ticketHistoryLoading,
		error: ticketHistoryError,
	} = useSelector((state) => state.ticketHistory);

	const orderText = sortByAscending ? "Oldest 1st" : "Newest 1st"
	const dispatch = useDispatch()

	const changeSortOrder = () => {
		dispatch(ticketsHistoryActions.updateField({ key: "sortByAscending", value: !sortByAscending}));
	}

	if(ticketHistoryLoading) return <></>
	if(ticketHistoryError) return <p>An error occurred please refresh</p>

  return (
		<div className="">
			<div className="py-[0.3rem] flex justify-between">
				<LogText>Log</LogText>
				<OrderText onClick={changeSortOrder} className="space-x-[0.5rem] flex cursor-pointer hover:underline">
					<span>{orderText}</span>
					<OrderIcon className={sortByAscending ? "" : "rotate-180"}/>
				</OrderText>
			</div>
			<HorizontalRule />
			<div className="max-h-[12rem] overflow-y-auto max-w-full">
        <HistoryItemList />
      </div>
		</div>
	);
}

export default TicketHistory