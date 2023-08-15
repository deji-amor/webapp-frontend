import React from 'react'
import TicketsTableHeading from '../../components/organisms/tickets/TicketsTableHeading';
import TicketsSearchBar from '../../components/organisms/tickets/TicketsSearchBar';
import TicketsHeaderActiveTicketType from '../../components/organisms/tickets/TicketsHeaderActiveTicketType';
import TicketsTableBody from '../../components/organisms/tickets/TicketsTableBody';
import TicketsTablePagination from '../../components/organisms/tickets/TicketsTablePagination';
import { styled } from '@mui/material';
import { useSelector } from 'react-redux';
import Placeholder from '../../components/molecules/general/Placeholder';

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
	const {
		tickets,
		successful,
		error,
		loading: ticketsLoading,
	} = useSelector((state) => state.tickets);

  if(ticketsLoading) return <></>
  if(error) return <p>An error occurred please refresh</p>
  
  if(successful && tickets.length === 0) return <Placeholder messageHeader={"seems you don’t have anything here yet!"} messageParagraph={"No worries, you can start by creating your first user and adding some information about them."} isThereActionButton={true} buttonText={"Create customer"} onClick={() => {}}/>;

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