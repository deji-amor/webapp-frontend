import React from 'react'
import Overlay from "../../../atoms/tickets/CreateTicketSuperAdmin/Overlay";
import Modal from "../../../atoms/tickets/CreateTicketSuperAdmin/Modal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editTicketActions } from "../../../../state-manager/reducers/tickets/ticketEdition";
import TicketViewOutlet from './TicketViewOutlet';

const ViewTicket = () => {
    const navigate = useNavigate();
		const dispatch = useDispatch();

		const goBackToTicketHandler = () => {
			dispatch(editTicketActions.reset());
			navigate("../");
		};

  return (
		<>
			<Overlay onClick={goBackToTicketHandler} />
			<div className="max-w-[75rem] w-full">
				<Modal>
          <TicketViewOutlet/>
				</Modal>
			</div>
		</>
	);
}

export default ViewTicket