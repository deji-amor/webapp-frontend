import React from 'react'
import TicketsTableHeading from '../../components/organisms/tickets/TicketsTableHeading';
import TicketsSearchBar from '../../components/organisms/tickets/TicketsSearchBar';
import TicketsHeaderActiveTicketType from '../../components/organisms/tickets/TicketsHeaderActiveTicketType';
import TicketsTableBody from '../../components/organisms/tickets/TicketsTableBody';
import TicketsTablePagination from '../../components/organisms/tickets/TicketsTablePagination';
import { styled } from '@mui/material';

const Wrapper = styled("div")`
  position: relative;
  overflow-x: auto;

  table {
    border-bottom: 1px solid #828282;
    background: #fff;
    width: 100%;
    text-align: left;
    padding: 0.8rem;
    // border-radius: 0.75rem 0.75rem 0rem 0rem;
  }
`;

const Tickets = () => {
  return (
		<div className="space-y-[1.62rem]">
      <TicketsSearchBar/>
      <Wrapper>
        <TicketsHeaderActiveTicketType/>
        <table>
          <TicketsTableHeading/>
          <TicketsTableBody/>
        </table>
          <TicketsTablePagination/>
      </Wrapper>
		</div>
	);
}

export default Tickets