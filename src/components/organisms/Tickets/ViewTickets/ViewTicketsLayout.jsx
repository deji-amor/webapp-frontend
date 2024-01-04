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
		<GenModal className="max-w-[58rem] flex flex-col overflow-hidden">
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
			<div className="flex gap-[1.5rem] flex-grow max-h-max border border-green-500">
				<div className="basis-[20%] space-y-[0.5rem]">
					<TicketNav to={`../view/detail/${ticket.id}`} text="Ticket Details" />
					<TicketNav to={`../view/history/${ticket.id}`} text="Ticket History" />
				</div>
				<div className="basis-[80%] rounded-xl border-[1px] border-solid border-[#2B2E72] bg-white p-[1.5rem] overflow-y-auto h-full border border-red-500">
					{/* <Outlet /> */}
					<p className="text-[#2B2E72]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex blanditiis facere odit enim vero omnis illum ratione quae, esse sapiente repellat repudiandae ipsum repellendus, animi, molestiae voluptates dolore perferendis veniam labore aperiam quisquam! At porro iure fugit illo assumenda quasi nesciunt vel, quaerat aspernatur dolor impedit labore neque ipsa aperiam placeat vitae nam natus officiis, velit id temporibus nobis voluptate vero. Impedit facere nostrum tempora harum reiciendis iusto sint eveniet reprehenderit aut eligendi qui, dicta possimus ad eius sit totam earum necessitatibus. Excepturi libero deserunt perferendis, aperiam ipsam mollitia cumque ab autem dolorem ex sunt. Nam ducimus perspiciatis, obcaecati nobis placeat itaque nesciunt nihil praesentium, numquam accusantium eum et non minus iusto ad ipsa quaerat blanditiis alias repellendus quidem. Laboriosam, iste expedita velit quod et id sunt neque recusandae exercitationem voluptatibus quae aperiam amet deleniti temporibus explicabo, laudantium a facilis tenetur dolor commodi voluptatum eos iure. Nostrum dolorum perspiciatis beatae vitae suscipit tempora, accusantium unde voluptas vel saepe, corrupti iure iste incidunt maxime dolor pariatur culpa animi doloribus sapiente odio nobis alias error. Eius praesentium quas, repellendus cupiditate itaque sit officia consectetur ut laboriosam beatae incidunt atque, voluptatum dolor unde. Ipsum et ab a cupiditate eum, minus quas harum ex vel in labore quo? Veritatis, necessitatibus dolorem! Velit, ad! Cupiditate dicta porro accusantium. Optio consequuntur iure minus deserunt nisi omnis soluta dolor sint ex tempore quos assumenda, obcaecati perspiciatis perferendis recusandae similique illum debitis veritatis excepturi esse fuga error, voluptatibus saepe? Quibusdam ipsa voluptatibus corporis quod voluptatem, dolor soluta illum nam? Et, minus suscipit tempora, voluptas quas reiciendis expedita saepe molestiae eveniet eum nisi facere sit aliquam quidem reprehenderit, laudantium non voluptate quaerat. Voluptates inventore quas enim cupiditate ad autem aut soluta omnis eveniet ullam architecto est, provident aliquid neque blanditiis fugiat esse odit beatae. Voluptatem dolor voluptas impedit vero, atque modi nobis quas perferendis molestias iusto eveniet ab illum tenetur molestiae nostrum quae eos in at quo illo quia aperiam asperiores laborum nulla. Rerum, dolore doloremque. Optio id voluptates ipsa voluptatem inventore aspernatur tempora facere placeat, dolores animi, dolore laboriosam omnis eius officia commodi sint nisi suscipit eos deleniti! Fugiat accusantium sint quibusdam repellendus! Ut dolores ipsam officiis dolore fugit omnis architecto? Reiciendis itaque at sit labore pariatur optio illo voluptatum dicta ipsa amet asperiores facere provident culpa ut similique, ullam quos earum voluptates tenetur. Similique officiis delectus numquam dolor quasi aliquid voluptatibus culpa amet asperiores ea eos minima voluptatum nam error maiores dolorem sit, porro rerum molestiae quidem tenetur adipisci excepturi illum maxime? Numquam voluptatibus explicabo distinctio suscipit veniam eius eos ipsum quam placeat ut provident veritatis repellendus quas eaque vitae possimus temporibus deleniti fuga ullam commodi vel, quo alias expedita blanditiis. Doloribus quis maiores odio ea dolorum dolor veniam molestias culpa iusto, nisi quas reiciendis sed nobis minima? Perferendis dolor impedit perspiciatis hic sunt at veniam beatae facilis similique, tempore placeat reiciendis obcaecati totam inventore ratione libero expedita, quidem eius architecto nulla ullam, rem officia! Ex fugiat placeat dicta. Vero est dolor voluptate, autem cupiditate obcaecati ullam!</p>
				</div>
			</div>
		</GenModal>
	);
}

export default ViewTicketsLayout