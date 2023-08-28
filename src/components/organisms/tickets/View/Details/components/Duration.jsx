import React from 'react'
import DetailText from '../DetailText';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? 'pm' : 'am';
  const formattedHours = (hours % 12 === 0 ? 12 : hours % 12);
	const paddedFormattedHours = String(formattedHours).padStart(2, "0")

  const formattedDate = `${day}-${month}-${year}/${paddedFormattedHours}:${minutes} ${period}`;
  return formattedDate;
}

const Duration = () => {
	const params = useParams();
	const { ticketId } = params;
	const { tickets } = useSelector((state) => state.tickets);
	const ticketInView = tickets.find((ticket) => +ticket.id === +ticketId);
	const { start_date_time, end_date_time, created_at } = ticketInView;

  return (
		<>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Creation Date/Time</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{formatDate(created_at)}</DetailText>
				</div>
			</div>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Start Date/Time</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{formatDate(start_date_time)}</DetailText>
				</div>
			</div>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>End Date/time</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{formatDate(end_date_time)}</DetailText>
				</div>
			</div>
		</>
	);
}

export default Duration