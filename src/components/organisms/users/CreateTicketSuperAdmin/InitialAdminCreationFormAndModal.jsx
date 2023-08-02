import React from "react";
import Overlay from "../../../atoms/users/CreateTicketSuperAdmin/Overlay";
import Modal from "../../../atoms/users/CreateTicketSuperAdmin/Modal";
import ModalContent from "../../../molecules/users/CreateTicketSuperAdmin/ModalContent";

const InitialAdminCreationFormAndModal = () => {
	return (
		<>
			<Overlay />
			<Modal>
        <ModalContent/>
			</Modal>
		</>
	);
};

export default InitialAdminCreationFormAndModal;
