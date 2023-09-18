import React from 'react'
import Overlay from '../../../atoms/tickets/CreateTicketSuperAdmin/Overlay';
import Modal from '../../../atoms/tickets/CreateTicketSuperAdmin/Modal';
import ModalTemplateContent from './ModalTemplateContent';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editTicketActions } from '../../../../state-manager/reducers/tickets/ticketEdition';

const EditTicket = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const goBackToTicketHandler = () => {
		dispatch(editTicketActions.reset())
		navigate(-1)
	}

  return (
		<>
			<Overlay onClick={goBackToTicketHandler}/>
			<Modal maxWidth="70">
				<ModalTemplateContent />
			</Modal>
		</>
	);
}

export default EditTicket