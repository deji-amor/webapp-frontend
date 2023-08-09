import React from "react";
import Overlay from "../../../atoms/tickets/CreateTicketSuperAdmin/Overlay";
import Modal from "../../../atoms/tickets/CreateTicketSuperAdmin/Modal";
import ModalContent from "../../../molecules/tickets/CreateTicketSuperAdmin/ModalContent";
import { createTicketActions } from "../../../../state-manager/reducers/tickets/ticketCreation";
import { useDispatch } from "react-redux";

const InitialAdminCreationFormAndModal = () => {
	const dispatch = useDispatch()

	const clickHandler = () => {
		dispatch(createTicketActions.toggleAddTicketModal());
	}

	return (
		<>
			<Overlay onClick={clickHandler}/>
			<div className="max-w-[74rem] w-full">
				<Modal>
					<ModalContent/>
				</Modal>
			</div>
		</>
	);
};

export default InitialAdminCreationFormAndModal;
