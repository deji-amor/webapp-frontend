import React from "react";
import Overlay from "../../../atoms/tickets/CreateTicketSuperAdmin/Overlay";
import Modal from "../../../atoms/tickets/CreateTicketSuperAdmin/Modal";
import ModalContent from "../../../molecules/tickets/CreateTicketSuperAdmin/ModalContent";

const InitialAdminCreationFormAndModal = () => {
	return (
		<>
			<Overlay />
			<div className="max-w-[74rem] w-full">
				<Modal>
					<ModalContent/>
				</Modal>
			</div>
		</>
	);
};

export default InitialAdminCreationFormAndModal;
