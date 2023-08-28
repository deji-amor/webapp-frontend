import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import ChangeTicketStatusDropdown from "../../molecules/tickets/ChangeTicketStatusDropdown";
import { changeATicketStatus, ticketDetailsActions } from "../../../state-manager/reducers/tickets/ticketDetails";
import { ticketsActions } from '../../../state-manager/reducers/tickets/tickets';
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
		const { loading, data, error, successful } = useSelector((state) => state.ticketDetails);
    const { customers} = useSelector((state) => state.customers);
		const { users} = useSelector((state) => state.users);

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

	const [isThisTicketLoading, setIsThisTicketLoading] = useState(false)

	useEffect(() => {
		if (successful === true) {
			if (data) dispatch(ticketsActions.replaceTicket(data));
			dispatch(
				ticketDetailsActions.changeMultipleState([
					{ key: "successful", value: null },
					{ key: "error", value: null },
				])
			);
			setIsThisTicketLoading(false)
		}
		if (error === true) {
			dispatch(
				ticketDetailsActions.changeMultipleState([
					{ key: "successful", value: null },
					{ key: "error", value: null },
				])
			);
			setIsThisTicketLoading(false)
		}
	}, [successful, error, data, dispatch])

  const changeTicketStatusHandler = (ticketId, status) => {
    setShowStatusDrop(false);
		setIsThisTicketLoading(true)
		// console.log({ticketId, status});
    dispatch(changeATicketStatus({ ticketId: ticketId, status: status.toUpperCase() }));
  };

	return (
		<tr
			className="bg-white border-b hover:bg-gray-50 relative"
			onClick={(event) => ViewTicket(event, ticket.id)}
		>
			<RecentTicketTableText>
				{customers.find((customer) => +customer.id === +ticket.customer_id)?.company_name}
			</RecentTicketTableText>
			<RecentTicketTableText className="max-w-[10rem] border truncate">
				{ticket.ticket_form}
			</RecentTicketTableText>
			<RecentTicketTableText>
				{users.find((user) => +user.id === +ticket.user_id)?.email}
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
					<button disabled={loading} className={`changeTicketDropdown relati ${loading && "cursor-not-allowed"}`} id={id}>
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
						{
						isThisTicketLoading ? <Loader/> :
						<MoreVertIcon fontSize="small" onClick={(event) => setShowStatusDropHandler(event)} />
						}
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