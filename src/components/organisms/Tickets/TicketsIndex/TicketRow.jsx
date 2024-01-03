import React, { useEffect, useState } from "react";
import ClickAwayComp from "../../../atoms/general/ClickAwayComp";
import {
	changeATicketStatus,
} from "../../../../state-manager/reducers/tickets/ticketDetails";
import { parseISO, format } from "date-fns";
import TicketTypeTableBodyText from "../../../atoms/Tickets/Typography/Paragraphs/TicketTypeTableBodyText";
import TicketStatusTablet from "../../../atoms/Tickets/Typography/Paragraphs/TicketStatusTablet";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";

const EditIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="28"
		height="28"
		className="cursor-pointer"
		viewBox="0 0 28 28"
		fill="none"
	>
		<path
			d="M5.87012 18.787H7.02148C7.28516 18.787 7.39062 18.7343 7.58398 18.5849L8.17285 18.1366C8.49805 18.4618 8.98145 18.5321 9.46484 18.3212L12.374 17.1083C12.5938 17.0204 12.708 16.9325 12.8486 16.7919L21.3389 8.3632C22.1826 7.51945 22.1826 6.50871 21.3301 5.64738L19.4229 3.73136C18.5703 2.87882 17.5596 2.87003 16.7158 3.71378L8.22559 12.1337C8.07617 12.2831 7.99707 12.3886 7.90039 12.6171L6.66992 15.5175C6.46777 15.9833 6.52051 16.4403 6.8457 16.8007L5.58008 18.1103C5.30762 18.4003 5.43945 18.787 5.87012 18.787ZM17.6914 4.87394C17.9199 4.65421 18.1924 4.64542 18.4033 4.86515L20.1963 6.66691C20.416 6.88664 20.4072 7.15031 20.1699 7.37882L19.5986 7.95011L17.1113 5.45402L17.6914 4.87394ZM9.78125 12.7402L16.1621 6.40324L18.6406 8.89933L12.2686 15.2362L9.78125 12.7402ZM9.28906 16.7655C9.12207 16.8271 9.00781 16.8271 8.8584 16.6777L8.30469 16.1327C8.16406 15.9921 8.16406 15.8603 8.22559 15.7109L9.0166 13.8739L11.126 16.0009L9.28906 16.7655ZM5.57129 21.9071H22.4375C22.8594 21.9071 23.2021 21.5468 23.2021 21.1249C23.2021 20.703 22.8594 20.3515 22.4375 20.3515H5.57129C5.14062 20.3515 4.79785 20.703 4.79785 21.1249C4.79785 21.5468 5.14941 21.9071 5.57129 21.9071Z"
			fill="#2B2E72"
		/>
	</svg>
);

const ChangeStatus = ({ className, status, ticket, setShowBlock }) => {
	const dispatch = useDispatch();
	const { statuses } = useSelector((state) => state.tickets);

	const updateHandler = (e, status) => {
		e.stopPropagation()
		let formattedStatus = status;
		if (status === "Done") formattedStatus = "DONE";
		if (status === "Technician enroute") formattedStatus = "TECHNICIAN ENROUTE";
		if (status === "Inprogress") formattedStatus = "IN-PROGRESS";
		if (status === "Pending") formattedStatus = "PENDING";

		dispatch(
			changeATicketStatus({
				ticketId: +ticket.id,
				status: formattedStatus, // PENDING, TECHNICIAN ENROUTE, IN-PROGRESS or DONE
			})
		);

		setShowBlock(false)
	};

	return (
		<ClickAwayComp onClickAway={() => setShowBlock(false)}>
			<ul
				className={twMerge(
					`flex w-[15rem] flex-col gap-2 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] pt-2 pb-3 px-2 rounded-lg bg-white ${className}`
				)}
			>
				{statuses
					.filter((stat) => stat !== "All")
					.filter((stat) => stat !== "Overdue")
					.filter((stat) => {
						return stat.toLowerCase() !== status.replace("-", "").toLowerCase();
					})
					.map((stat) => (
						<li
							onClick={(e) => updateHandler(e, stat)}
							key={stat}
							className="text-[#2B2E72] text-sm text-left not-italic font-medium leading-5 cursor-pointer tracking-[0.0175rem] hover:bg-[#F1F2FD] transition duration-300 ease-in-out"
						>
							Move to {stat}
						</li>
					))}
			</ul>
		</ClickAwayComp>
	);
};

const EditText = ({ ticket }) => {
	const [showBlock, setShowBlock] = useState(false);
	const { loading, currentTicketIdThatISEditing } = useSelector((state) => state.ticketDetails);

	if(loading && +currentTicketIdThatISEditing === +ticket.id){
			return (
				<span className="text-[#2B2E72] animate-pulse text-base not-italic font-semibold leading-9 font-poppins flex items-center gap-1">
					<span>Updating Ticket...</span>
				</span>
			);
	}

	return (
		<span className="text-[#2B2E72] text-base not-italic font-semibold leading-9 font-poppins flex items-center gap-1">
			<span>{loading ? "Updating Other Ticket" : "Edit Ticket"}</span>
			{!loading && (
				<span className="flex items-center relative">
					<EditIcon />
					<MoreVertIcon
						onClick={(e) => {
							e.stopPropagation();
							setShowBlock((pv) => !pv);
						}}
						className="w-7 h-7 cursor-pointer"
					/>
					{showBlock && (
						<ChangeStatus
							ticket={ticket}
							status={ticket.status}
							setShowBlock={setShowBlock}
							className="absolute top-full right-0 z-20"
						/>
					)}
				</span>
			)}
		</span>
	);
};

const TicketRow = ({ ticket }) => {
	const navigate = useNavigate()
	const dateObject = parseISO(ticket?.created_at);
	const formattedDate = format(dateObject, "MM/dd/yyyy");

	const viewTicketHandler = () => {
		navigate(`view/detail/${ticket.id}`)
	}

	return (
		<tr onClick={viewTicketHandler} className="border-b-2 border-b-[#ECECEC] hover:bg-[#F1F2FD] transition duration-300 ease-in-out cursor-pointer">
			<td scope="ro" className="pl-4 py-4">
				<TicketTypeTableBodyText>{ticket?.company_name}</TicketTypeTableBodyText>
			</td>
			<td scope="ro" className="py-4 px-1">
				<TicketTypeTableBodyText>{ticket?.ticket_form}</TicketTypeTableBodyText>
			</td>
			<td scope="ro" className="py-4 px-1">
				<TicketTypeTableBodyText>{ticket?.email}</TicketTypeTableBodyText>
			</td>
			<td scope="ro" className="py-4 px-1">
				<TicketStatusTablet>{ticket?.status}</TicketStatusTablet>
			</td>
			<td scope="ro" className="py-4 px-1">
				<TicketTypeTableBodyText>{formattedDate}</TicketTypeTableBodyText>
			</td>
			<td scope="ro" className="py-4 px-1">
				<EditText ticket={ticket} />
			</td>
		</tr>
	);
};

TicketRow.propTypes = {
	ticket: PropTypes.object,
};

ChangeStatus.propTypes = {
	className: PropTypes.string,
	status: PropTypes.string,
	setShowBlock: PropTypes.func,
	ticket: PropTypes.object,
};

EditText.propTypes = {
	ticket: PropTypes.object,
};

export default TicketRow;
