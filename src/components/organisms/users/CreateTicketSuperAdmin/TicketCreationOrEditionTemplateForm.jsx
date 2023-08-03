import React from 'react'
import Overlay from '../../../atoms/users/CreateTicketSuperAdmin/Overlay'
import Modal from '../../../atoms/users/CreateTicketSuperAdmin/Modal';
import ModalTemplateContent from '../../../molecules/users/CreateTicketSuperAdmin/ModalTemplateContent';

const TicketTemplateCreationOrEditionForm = () => {
	// const 

	return (
		<>
			<Overlay />
			<div className="max-w-[75rem] w-full">
				<Modal>
					<ModalTemplateContent />
				</Modal>
			</div>
		</>
	);
}

export default TicketTemplateCreationOrEditionForm