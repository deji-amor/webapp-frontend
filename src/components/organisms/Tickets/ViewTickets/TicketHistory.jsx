import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/dist";
import { ticketsHistoryActions } from "../../../../state-manager/reducers/tickets/ticketHistory";
import TicketStatus from "../../../molecules/Tickets/TicketHistory/EditType/TicketStatus";
import TicketEdit from "../../../molecules/Tickets/TicketHistory/EditType/TicketEdit";
import PropTypes from "prop-types";

const SortIcon = ({ ascending }) => (
	<svg
		className={ascending ? "rotate-180" : ""}
		xmlns="http://www.w3.org/2000/svg"
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

const TicketHistory = () => {
	const dispatch = useDispatch();
	const {
		editLogs,
		loading: ticketsHistoryLoading,
		error: ticketsHistoryError,
		sortByAscending,
	} = useSelector((state) => state.ticketHistory);

	const sortedLogs = useMemo(() => {
		let logs = editLogs.slice();

		// Custom comparator function to compare logs based on datetime
		const compareFunction = (log1, log2) => {
			const datetime1 = new Date(log1.datetime);
			const datetime2 = new Date(log2.datetime);

			// Compare datetime values
			return sortByAscending ? datetime1 - datetime2 : datetime2 - datetime1;
		};

		// Sort logs using the custom comparator function
		logs.sort(compareFunction);

		return logs;
	}, [sortByAscending, editLogs]);


	if (ticketsHistoryLoading) return <></>;
	if (ticketsHistoryError) return <p>Error occurred</p>;
	console.log(editLogs);

	const handleSorting = () => {
		dispatch(
			ticketsHistoryActions.updateField({ key: "sortByAscending", value: !sortByAscending })
		);
	};

	return (
		<div className="">
			<div className="flex items-center justify-between pb-[1rem] border-b border-b-black">
				<span className="text-[#706E6E] text-base not-italic font-medium leading-5 tracking-[0.00938rem]">
					Log
				</span>
				<button onClick={handleSorting} className="flex items-center gap-[0.5rem] hover:underline">
					<span className="text-[#2B2E72] text-sm not-italic font-bold leading-5">
						{sortByAscending ? "Oldest 1" : "Newest 1"}
					</span>
					<SortIcon ascending={sortByAscending} />
				</button>
			</div>
			<div className="space-y-[0.75rem]">
				{sortedLogs.map((log) => {
					if (log.edit_type === "ticket-status") {
						return <TicketStatus key={log.id} log={log} />;
					}
					if (log.edit_type === "ticket-edit") {
						return <TicketEdit key={log.id} log={log} />;
					}
				})}
			</div>
		</div>
	);
};

export default TicketHistory;

SortIcon.propTypes = {
	ascending: PropTypes.bool,
};
