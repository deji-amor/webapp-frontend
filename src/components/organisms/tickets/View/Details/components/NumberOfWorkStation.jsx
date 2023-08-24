import React from 'react'
import DetailText from "../DetailText";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NumberOfWorkStation = () => {
	const params = useParams();
	const { ticketId } = params;
	const { tickets } = useSelector((state) => state.tickets);
	const ticketInView = tickets.find((ticket) => +ticket.id === +ticketId);
	const { number_of_work_station } = ticketInView;

  return (
		<>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Number of technicians</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{number_of_work_station}</DetailText>
				</div>
			</div>
		</>
	);
}

export default NumberOfWorkStation