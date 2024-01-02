import React from 'react'
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import SingleTicketTypeBlock from './SingleTicketTypeBlock';
import tree from '../../../../state-manager/reducers/tickets/ticketCreationMultiplePath';

const initialTicketType = ["Project Tickets", "Service Tickets"];

const RecursiveSelectTicketType = ({className}) => {
  return (
    <div className={twMerge(`bg-white ${className} w-full max-w-[17rem]`)}>
      <SingleTicketTypeBlock className="w-full" types={initialTicketType}/>
    </div>
  )
}

export default RecursiveSelectTicketType

RecursiveSelectTicketType.propTypes = {
	className: PropTypes.string,
};