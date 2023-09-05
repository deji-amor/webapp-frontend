import React, {useEffect} from 'react'
import CompanyNameAndPathToTemplate from '../Edit/CompanyNameAndPathToTemplate'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editTicketActions } from '../../../../state-manager/reducers/tickets/ticketEdition'
import BigBlueText from './BigBlueText'
import ExportTicket from './ExportTicket'
import ChangeTicketStatus from './ChangeTicketStatus'
import TicketCustomerDetail from './TicketCustomerDetail'
import HorizontalRule from '../../../atoms/tickets/CreateTicketSuperAdmin/HorizontalRule'
import LinkButton from './LinkButton'

const TicketViewOutlet = () => {
    const params = useParams();
		const { ticketId } = params;
		const { tickets } = useSelector((state) => state.tickets);
		const ticketToEdit = tickets.find((ticket) => +ticket.id === +ticketId);
		const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation()
    const {pathname} = location

		useEffect(() => {
			if (ticketToEdit) dispatch(editTicketActions.setTicketToEdit(ticketToEdit));
		}, [ticketToEdit, dispatch, ticketId]);

		if (!ticketToEdit) return <></>;

  return (
		<div>
			<CompanyNameAndPathToTemplate />
			<div className="flex items-center justify-between">
				<BigBlueText>ID {ticketId}</BigBlueText>
				<div className="flex items-center gap-[1.25rem]">
					<ChangeTicketStatus />
					<ExportTicket />
				</div>
			</div>
			<div className="max-w-[28rem] mb-[2rem]">
				<HorizontalRule />
			</div>
			<TicketCustomerDetail />
      <div className='mb-[1.2rem]'>
        <HorizontalRule></HorizontalRule>
      </div>
			<div className="flex justify-between gap-[1.5rem] min-h-[17rem]">
				<div className="basis-[15%]">
					<LinkButton active={pathname.includes("detail/")} onClick={() => navigate(`../view/detail/${ticketId}`)}>Ticket Detail</LinkButton>
					<LinkButton active={pathname.includes("history/")} onClick={() => navigate(`../view/history/${ticketId}`)}>Ticket History</LinkButton>
				</div>
				<div className="basis-[85%] py-[1rem] px-[1.25rem] self-stretch border-[0.5px] border-[#2B2E72] rounded-[0.75rem]">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default TicketViewOutlet