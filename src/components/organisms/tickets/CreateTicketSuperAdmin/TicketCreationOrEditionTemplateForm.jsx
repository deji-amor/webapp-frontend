import React from 'react'
import Overlay from '../../../atoms/tickets/CreateTicketSuperAdmin/Overlay'
import Modal from '../../../atoms/tickets/CreateTicketSuperAdmin/Modal';
import ModalTemplateContent from '../../../molecules/tickets/CreateTicketSuperAdmin/ModalTemplateContent';
import { useDispatch } from 'react-redux';
import { createTicketActions } from '../../../../state-manager/reducers/tickets/ticketCreation';

const TicketTemplateCreationOrEditionForm = () => {
	const dispatch = useDispatch();

	const clickHandler = () => {
		dispatch(createTicketActions.toggleAddTicketModal());
	}; 

	return (
		<>
			<Overlay onClick={clickHandler}/>
			<div className="max-w-[75rem] w-full">
				<Modal>
					<ModalTemplateContent />
				</Modal>
			</div>
		</>
	);
}

export default TicketTemplateCreationOrEditionForm