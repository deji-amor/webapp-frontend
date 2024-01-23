import React, { useEffect } from "react";
import Overlay from "../../../atoms/tickets/CreateTicketSuperAdmin/Overlay";
import Modal from "../../../atoms/tickets/CreateTicketSuperAdmin/Modal";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTicketActions } from "../../../../state-manager/reducers/tickets/ticketEdition";
import TicketViewOutlet from "./TicketViewOutlet";
import { fetchTicketHistory } from "../../../../state-manager/reducers/tickets/ticketHistory";

const ViewTicket = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation()
	const params = useParams();
	const {pathname} = location
	const { ticketId } = params;
	const { tickets } = useSelector((state) => state.tickets);

	const goBackToTicketHandler = () => {
		dispatch(editTicketActions.reset());
		if(pathname.startsWith("/customer")){
			navigate("/customer/dashboard");
		}else{
			navigate("../");
		}
	};

	const ticketInView = tickets.find(ticket => +ticket.id === +ticketId);
	const ticketStatus = ticketInView?.status

	useEffect(() => {
		dispatch(fetchTicketHistory(ticketId));
	}, [ticketStatus, dispatch, ticketId]);

	return (
		<>
			<Overlay onClick={goBackToTicketHandler} />
			<div className="max-w-[75rem]">
				<Modal>
					<TicketViewOutlet />
				</Modal>
			</div>
		</>
	);
};

export default ViewTicket;
