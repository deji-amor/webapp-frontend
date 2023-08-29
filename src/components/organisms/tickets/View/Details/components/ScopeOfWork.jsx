import React from 'react'
import DetailText from '../DetailText';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ScopeOfWork = () => {
		const params = useParams();
		const { ticketId } = params;
		const { tickets } = useSelector((state) => state.tickets);
		const ticketInView = tickets.find((ticket) => +ticket.id === +ticketId);
		const { scope_of_work_description } = ticketInView;

  return (
		<>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Scope of Work Description</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{scope_of_work_description}</DetailText>
				</div>
			</div>
		</>
	);
}

export default ScopeOfWork