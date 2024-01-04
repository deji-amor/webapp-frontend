import React, { useEffect } from 'react'
import GenModal from '../../../atoms/Tickets/Modal/GenModal'
import TicketPathHeading from '../../../atoms/Tickets/Typography/Headers/TicketPathHeading'
import TicketIDHeading from '../../../atoms/Tickets/Typography/Headers/TicketIDHeading'
import ExportTicket from '../../../molecules/Tickets/ViewTicket/ExportTicket'
import ChangeTicketStatus from '../../../molecules/Tickets/ViewTicket/ChangeTicketStatus'
import TicketCustomerDetail from '../../../molecules/Tickets/ViewTicket/TicketCustomerDetail'
import TicketNav from '../../../molecules/Tickets/ViewTicket/TicketNav'
import { Outlet, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTicketHistory } from '../../../../state-manager/reducers/tickets/ticketHistory'
import { styled } from "@mui/material";
// import "./view-tickets-layout.css";

	const Container = styled("div")`
		::-webkit-scrollbar {
			width: 20px;
		}

		::-webkit-scrollbar-track {
			background-color: transparent;
		}

		::-webkit-scrollbar-thumb {
			background-color: #d6dee1;
			border-radius: 20px;
			border: 6px solid transparent;
			background-clip: content-box;
		}

		::-webkit-scrollbar-thumb:hover {
			background-color: #2b2e72;
		}
	`;

const ViewTicketsLayout = () => {
  const params = useParams()
	const dispatch = useDispatch()
  const {ticketId} = params
  const { tickets, loading } = useSelector((state) => state.tickets);
  const { loading: ticketDetailLoading } = useSelector((state) => state.ticketDetails);

  let ticket = tickets.find(tic => +tic.id === +ticketId)

	useEffect(() => {
		if (!ticketDetailLoading) dispatch(fetchTicketHistory(ticketId));
	}, [dispatch, ticketId, ticketDetailLoading]);

  if(loading || !ticket) return <></>

  return (
		<GenModal className="max-w-[58rem] flex flex-col h-full">
			<div className="flex-shrink">
				<TicketPathHeading ticket={ticket} className="mb-[1rem]" />
				<div className="flex items-center justify-between mb-[1.25rem]">
					<TicketIDHeading>{ticket.id}</TicketIDHeading>
					<div className="flex gap-[1.25rem] items-center">
						<ChangeTicketStatus ticket={ticket} />
						<ExportTicket ticket={ticket} />
					</div>
				</div>
				<TicketCustomerDetail ticket={ticket} className="mb-[1.5rem]" />
			</div>
			<div id="detail-history-container" className="flex gap-[1.5rem] flex-grow overflow-y-hidden">
				<div className="basis-[20%] space-y-[0.5rem]">
					<TicketNav to={`../view/detail/${ticket.id}`} text="Ticket Details" />
					<TicketNav to={`../view/history/${ticket.id}`} text="Ticket History" />
				</div>
				<Container className="basis-[80%] rounded-xl border-[1.5px] border-[#2B2E72] bg-white p-[1.5rem] overflow-y-auto h-full">
					<Outlet />
				</Container>
			</div>
		</GenModal>
	);
}

export default ViewTicketsLayout