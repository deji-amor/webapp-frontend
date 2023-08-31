import React, { useEffect } from 'react'
import Overlay from '../../../atoms/tickets/CreateTicketSuperAdmin/Overlay'
import Modal from '../../../atoms/tickets/CreateTicketSuperAdmin/Modal';
import ModalTemplateContent from '../../../molecules/tickets/CreateTicketSuperAdmin/ModalTemplateContent';
import { useDispatch } from 'react-redux';
import { createTicketActions } from '../../../../state-manager/reducers/tickets/ticketCreation';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import tree from '../../../../state-manager/reducers/tickets/ticketCreationMultiplePath';

const TicketTemplateCreationOrEditionForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch();
	const params = useParams()
	const [searchParams] = useSearchParams()
	const {customerId} = params
	const ticketPath = JSON.parse(searchParams.get("ticketPath"));
	const ticketForm = ticketPath.at(-1)
	const chosenTemplate = tree[ticketForm].fields

	useEffect(() => {
		dispatch(createTicketActions.changeAnyState({ key: "pathToTemplate", value: ticketPath }));
		dispatch(createTicketActions.changeAnyState({ key: "chosenTemplate", value: chosenTemplate }));
		dispatch(createTicketActions.updateField({ key: "customerId", value: customerId }));
	}, [])

	const clickHandler = () => {
		navigate(-1)
		dispatch(createTicketActions.reset())
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