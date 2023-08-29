import React from 'react'
import DetailText from '../DetailText';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PointOfContact = () => {
		const params = useParams();
		const { ticketId } = params;
		const { tickets } = useSelector((state) => state.tickets);
		const ticketInView = tickets.find((ticket) => +ticket.id === +ticketId);
		const { point_of_contact_name, point_of_contact_phone_number, point_of_contact_address} = ticketInView

  return (
		<>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Point of contact Name</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{point_of_contact_name}</DetailText>
				</div>
			</div>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Point of contact Phone</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{point_of_contact_phone_number}</DetailText>
				</div>
			</div>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Point of contact address</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{point_of_contact_address}</DetailText>
				</div>
			</div>
		</>
	);
}

export default PointOfContact