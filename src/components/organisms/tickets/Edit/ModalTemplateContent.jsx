import React, {useEffect} from 'react'
import CompanyNameAndPathToTemplate from './CompanyNameAndPathToTemplate';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HorizontalRule from '../../../atoms/tickets/CreateTicketSuperAdmin/HorizontalRule';
import { editTicketActions } from '../../../../state-manager/reducers/tickets/ticketEdition';
import MainTicketEditionForm from './MainTicketEditionForm';

const ModalTemplateContent = () => {
	const params = useParams()
	const {ticketId} = params
	const {tickets} = useSelector(state => state.tickets)
	const ticketToEdit = tickets.find((ticket) => +ticket.id === +ticketId);
	const dispatch = useDispatch()

	useEffect(() => {
		if(ticketToEdit) dispatch(editTicketActions.setTicketToEdit(ticketToEdit))
	}, [ticketToEdit, dispatch, ticketId])

		if(!ticketToEdit) return <></>

  return (
		<div className="container mx-auto">
			<div className="">
				<CompanyNameAndPathToTemplate />
			</div>
			<div className="max-w-[20rem] mb-[0.75rem]">
				<HorizontalRule />
			</div>
			<div className="">
				<MainTicketEditionForm/>
			</div>
		</div>
	);
}

export default ModalTemplateContent