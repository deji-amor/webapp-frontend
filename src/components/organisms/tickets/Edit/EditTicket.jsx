import React from 'react'
import Overlay from '../../../atoms/tickets/CreateTicketSuperAdmin/Overlay';
import Modal from '../../../atoms/tickets/CreateTicketSuperAdmin/Modal';
import ModalTemplateContent from './ModalTemplateContent';
import { useNavigate } from 'react-router-dom';

const EditTicket = () => {
	const navigate = useNavigate()

	const goBackToTicketHandler = () => {
		navigate("../")
	}

  return (
		<>
			<Overlay onClick={goBackToTicketHandler}/>
			<div className="max-w-[75rem] w-full">
				<Modal>
					<ModalTemplateContent />
				</Modal>
			</div>
		</>
	);
}

export default EditTicket