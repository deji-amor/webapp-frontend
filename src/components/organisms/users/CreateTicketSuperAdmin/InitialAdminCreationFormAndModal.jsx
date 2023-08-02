import React from "react";
import Overlay from "../../../atoms/users/CreateTicketSuperAdmin/Overlay";
import Modal from "../../../atoms/users/CreateTicketSuperAdmin/Modal";
import ModalContent from "../../../molecules/users/CreateTicketSuperAdmin/ModalContent";

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
