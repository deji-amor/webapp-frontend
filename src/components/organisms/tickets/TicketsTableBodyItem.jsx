import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import ChangeTicketStatusDropdown from "../../molecules/tickets/ChangeTicketStatusDropdown";
import { changeATicketStatus} from "../../../state-manager/reducers/tickets/ticketDetails";
import RecentTicketTableText from "../../atoms/Dashboard/RecentTicketTableText";
import StatusTab from "../../atoms/tickets/StatusTab";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Loader from './Loader';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDateFromDateTime } from "../../../helpers/date-manipulation";
import { styled } from '@mui/material';

const Edit = styled("p")`
	color: #2b2e72;
	font-family: Poppins;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 2.25rem; /* 225% */
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 0.2rem;
`;

const TicketsTableBodyItem = ({ ticket }) => {
  const {
    statuses,
  } = useSelector((state) => state.tickets);
	const { loading, currentTicketIdThatISEditing } = useSelector((state) => state.ticketDetails);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showStatusDrop, setShowStatusDrop] = useState(false);

  const ViewTicket = (event, id) => {
    if (event.target.closest("a") || event.target.closest("button.changeTicketDropdown")) return;
    navigate(`view/detail/${id}`);
  };

  const setShowStatusDropHandler = (event) => {
    event?.preventDefault()
    setShowStatusDrop((pv) => !pv);
  };

	const id = `ticketStatusDropdownWrapper${ticket.id}`

	useEffect(() => {
		const listener = (event) => {
			if(!event.target.closest(`#${id}`)) {
				setShowStatusDrop(false)
			}
		}

		document.body.addEventListener("click", listener)
		return () => {
			document.body.removeEventListener("click", listener)
		}
	}, [])

	const isThisTicketLoading = loading && +currentTicketIdThatISEditing === +ticket.id;

  const changeTicketStatusHandler = (ticketId, status) => {
    setShowStatusDrop(false);
		// setIsThisTicketLoading(true)
		let newStatus = status.toLowerCase() === "inprogress" ? "IN-PROGRESS" : status.toUpperCase();
    dispatch(changeATicketStatus({ ticketId: ticketId, status: newStatus }));
  };

	return (
		<tr
			className="bg-white border-b hover:bg-gray-50 relative cursor-pointer"
			onClick={(event) => ViewTicket(event, ticket.id)}
		>
			<RecentTicketTableText>
				{ticket.company_name}
			</RecentTicketTableText>
			<RecentTicketTableText className="max-w-[10rem] border truncate">
				{ticket.ticket_form}
			</RecentTicketTableText>
			<RecentTicketTableText>
				{ticket.email}
			</RecentTicketTableText>
			<RecentTicketTableText>
				<StatusTab status={ticket.status} />
			</RecentTicketTableText>
			<RecentTicketTableText>{getDateFromDateTime(ticket.created_at)}</RecentTicketTableText>
			<RecentTicketTableText>
				<Edit className="flex justify-center items-center cursor-pointer hover:underline">
					<NavLink to={`edit/${ticket.id}`}>
						Edit Ticket
						<EditIcon fontSize="small" />
					</NavLink>
					<button
						disabled={loading}
						className={`changeTicketDropdown ${(loading || isThisTicketLoading) && "cursor-not-allowed"}`}
						id={id}
					>
						{showStatusDrop && (
							<ChangeTicketStatusDropdown
								onClick={changeTicketStatusHandler}
								currentStatus={ticket.status.toLowerCase().replaceAll("-", "")}
								id={ticket.id}
								statuses={statuses
									.filter((status) => status.toLowerCase() !== "all")
									.filter((status) => status.toLowerCase() !== "overdue")
									.filter(
										(status) =>
											status.toLowerCase().replaceAll("-", "") !==
											ticket.status.toLowerCase().replaceAll("-", "")
									)}
							/>
						)}
						{(isThisTicketLoading && loading) ? (
							<Loader blue={true}/>
						) : (
							<MoreVertIcon fontSize="small" onClick={(event) => setShowStatusDropHandler(event)} />
						)}
					</button>
				</Edit>
			</RecentTicketTableText>
		</tr>
	);
};

TicketsTableBodyItem.propTypes = {
  ticket: PropTypes.object
}

export default TicketsTableBodyItem