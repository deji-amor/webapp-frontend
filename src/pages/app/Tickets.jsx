import React from 'react'
import TicketsTableHeading from '../../components/organisms/tickets/TicketsTableHeading';
import TicketsSearchBar from '../../components/organisms/tickets/TicketsSearchBar';
import TicketsHeaderActiveTicketType from '../../components/organisms/tickets/TicketsHeaderActiveTicketType';
import TicketsTableBody from '../../components/organisms/tickets/TicketsTableBody';
import TicketsTablePagination from '../../components/organisms/tickets/TicketsTablePagination';

const Tickets = () => {
  return (
		<div className="space-y-[1.25rem]">
        <TicketsSearchBar/>
      <div>
        <TicketsHeaderActiveTicketType/>
        <TicketsTableHeading/>
        <TicketsTableBody/>
      </div>
      <TicketsTablePagination/>
		</div>
	);
}

export default Tickets