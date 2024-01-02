import React, { useState } from "react";
import { changeATicketStatus } from "../../../../state-manager/reducers/tickets/ticketDetails";
import ClickAwayComp from "../../../atoms/general/ClickAwayComp";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

const formatStatus = (status) => {
	let formattedStatus = "";
	if (status === "DONE") formattedStatus = "Done";
	if (status === "TECHNICIAN ENROUTE") formattedStatus = "En route";
	if (status === "IN-PROGRESS") formattedStatus = "Inprogress";
	if (status === "PENDING") formattedStatus = "Pending";
	return formattedStatus;
};

const DropDownIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
		<path
			d="M14 18.4883C14.3076 18.4795 14.5889 18.3652 14.8174 18.1191L21.4971 11.2812C21.6904 11.0879 21.7959 10.8418 21.7959 10.5518C21.7959 9.97168 21.3389 9.50586 20.7588 9.50586C20.4775 9.50586 20.2051 9.62012 20.0029 9.82227L14.0088 15.9834L7.99707 9.82227C7.79492 9.62891 7.53125 9.50586 7.24121 9.50586C6.66113 9.50586 6.2041 9.97168 6.2041 10.5518C6.2041 10.8418 6.30957 11.0879 6.50293 11.2812L13.1914 18.1191C13.4287 18.3652 13.6924 18.4883 14 18.4883Z"
			fill="white"
		/>
	</svg>
);

const DropDown = ({ ticket, setShowDropdown, className }) => {
	const dispatch = useDispatch();
	const { statuses } = useSelector((state) => state.tickets);

	const updateHandler = (status) => {
		let formattedStatus = status;
		if (status === "Done") formattedStatus = "DONE";
		if (status === "Technician enroute") formattedStatus = "TECHNICIAN ENROUTE";
		if (status === "Inprogress") formattedStatus = "IN-PROGRESS";
		if (status === "Pending") formattedStatus = "PENDING";

		console.log(ticket);
		dispatch(
			changeATicketStatus({
				ticketId: +ticket.id,
				status: formattedStatus, // PENDING, TECHNICIAN ENROUTE, IN-PROGRESS or DONE
			})
		);

		setShowDropdown(false);
	};

	return (
		<ul
			className={twMerge(
				`min-w-[12rem] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-2 rounded-xl bg-white ${className}`
			)}
		>
			{statuses
				.filter((stat) => stat !== "All")
				.filter((stat) => stat !== "Overdue")
				.filter((stat) => {
					return stat.toLowerCase() !== ticket.status.replace("-", "").toLowerCase();
				})
				.map((stat) => (
					<li
						key={stat}
						onClick={() => updateHandler(stat)}
						className="px-4 py-3 cursor-pointer hover:bg-[#F1F2FD] transition duration-300 ease-in-out"
					>
						{stat.toLowerCase() === "technician enroute" ? "En Route" : stat}
					</li>
				))}
		</ul>
	);
};

const ChangeTicketStatus = ({ ticket }) => {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<div className="relative w-full">
			<button
				onClick={(e) => {
					e.stopPropagation()
					setShowDropdown((pv) => !pv);
				}}
				className="flex w-[8.1875rem] h-10 items-center justify-between text-white px-3 py-2 rounded-lg bg-[#2B2E72] transition duration-300 ease-in-out transform active:scale-95 hover:bg-opacity-95"
			>
				<span className="">{formatStatus(ticket.status)}</span>
				<DropDownIcon />
			</button>
			{showDropdown && (
				<ClickAwayComp onClickAway={() => setShowDropdown(false)}>
					<DropDown
						className="w-full absolute top-full right-0"
						ticket={ticket}
						setShowDropdown={setShowDropdown}
					/>
				</ClickAwayComp>
			)}
		</div>
	);
};

ChangeTicketStatus.propTypes = {
	ticket: PropTypes.object,
};

DropDown.propTypes = {
	ticket: PropTypes.object,
	setShowDropdown: PropTypes.func,
	className: PropTypes.string,
};

export default ChangeTicketStatus;
