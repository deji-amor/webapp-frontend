import React from 'react'
import Overlay from '../../../atoms/tickets/CreateTicketSuperAdmin/Overlay'
import Modal from '../../../atoms/tickets/CreateTicketSuperAdmin/Modal';
import ModalTemplateContent from '../../../molecules/tickets/CreateTicketSuperAdmin/ModalTemplateContent';

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