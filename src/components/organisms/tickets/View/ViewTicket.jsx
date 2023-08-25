import React, { useEffect } from "react";
import Overlay from "../../../atoms/tickets/CreateTicketSuperAdmin/Overlay";
import Modal from "../../../atoms/tickets/CreateTicketSuperAdmin/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTicketActions } from "../../../../state-manager/reducers/tickets/ticketEdition";
import TicketViewOutlet from "./TicketViewOutlet";
import { fetchTicketHistory } from "../../../../state-manager/reducers/tickets/ticketHistory";

const ViewTicket = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	const { ticketId } = params;

	const { loading: ticketsLoading, error: ticketsError } = useSelector((state) => state.tickets);
	const { loading: customersLoading, error: customersError } = useSelector(
		(state) => state.customers
	);
	const { loading: ticketHistoryLoading, error: ticketHistoryError} = useSelector(
		(state) => state.ticketHistory
	);

	const goBackToTicketHandler = () => {
		dispatch(editTicketActions.reset());
		navigate("../");
	};

	useEffect(() => {
		dispatch(fetchTicketHistory(ticketId));
	}, []);

	if(ticketHistoryLoading || ticketsLoading || customersLoading) return <></>
	if(ticketHistoryError || customersError || ticketsError) return <p>An error occurred please refresh</p>

	return (
		<>
			<Overlay onClick={goBackToTicketHandler} />
			<div className="max-w-[75rem] w-full">
				<Modal>
					{(ticketHistoryError || customersError || ticketHistoryError) ? (
						<p>An error occurred please refresh</p>
					) : (
						<TicketViewOutlet />
					)}
				</Modal>
			</div>
		</>
	);
};

export default ViewTicket;
