import React from 'react'
import DetailText from "../DetailText";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SoftwareCustomization = () => {
  const params = useParams();
	const { ticketId } = params;
	const { tickets } = useSelector((state) => state.tickets);
	const ticketInView = tickets.find((ticket) => +ticket.id === +ticketId);
	const { software_customization_quantity, software_customization_name } = ticketInView;

	return (
		<>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Software to Customize Name</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{software_customization_name}</DetailText>
				</div>
			</div>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Software To Customize Quantity</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{software_customization_quantity}</DetailText>
				</div>
			</div>
		</>
	);
}

export default SoftwareCustomization