import React from 'react'
import GenModal from '../../../atoms/Tickets/Modal/GenModal'
import TicketPathHeading from '../../../atoms/Tickets/Typography/Headers/TicketPathHeading'
import TicketIDHeading from '../../../atoms/Tickets/Typography/Headers/TicketIDHeading'
import ExportTicket from '../../../molecules/Tickets/ViewTicket/ExportTicket'
import ChangeTicketStatus from '../../../molecules/Tickets/ViewTicket/ChangeTicketStatus'
import TicketCustomerDetail from '../../../molecules/Tickets/ViewTicket/TicketCustomerDetail'
import TicketNav from '../../../molecules/Tickets/ViewTicket/TicketNav'
import { Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ViewTicketsLayout = () => {
  const params = useParams()
  const {ticketId} = params
  const { tickets, loading } = useSelector((state) => state.tickets);

  let ticket = tickets.find(tic => +tic.id === +ticketId)
  if(loading || !ticket) return <></>

  return (
		<GenModal className="max-w-[58rem] min-h-[95vh]">
			<TicketPathHeading ticket={ticket} className="mb-[1rem]" />
			<div className="flex items-center justify-between mb-[1.25rem]">
				<TicketIDHeading>{ticket.id}</TicketIDHeading>
				<div className="flex gap-[1.25rem] items-center">
					<ChangeTicketStatus ticket={ticket} />
					<ExportTicket ticket={ticket} />
				</div>
			</div>
			<TicketCustomerDetail ticket={ticket} className="mb-[1.5rem]" />
			<div className="flex gap-[1.5rem]">
				<div className="basis-[20%] space-y-[0.5rem]">
					<TicketNav to={`../view/detail/${ticket.id}`} text="Ticket Details" />
					<TicketNav to={`../view/history/${ticket.id}`} text="Ticket History" />
				</div>
				<div className="basis-[80%] self-stretch rounded-xl border-[1px] border-solid border-[#2B2E72] bg-white p-[1.5rem] max-h-[18rem] overflow-y-auto">
					<Outlet />
				</div>
			</div>
		</GenModal>
	);
}

export default ViewTicketsLayout