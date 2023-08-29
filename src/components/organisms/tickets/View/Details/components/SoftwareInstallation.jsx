import React from 'react'
import DetailText from "../DetailText";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SoftwareInstallation = () => {
  const params = useParams();
	const { ticketId } = params;
	const { tickets } = useSelector((state) => state.tickets);
	const ticketInView = tickets.find((ticket) => +ticket.id === +ticketId);
	const { software_installation_quantity, software_installation_name } = ticketInView;

	return (
		<>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Software to Installation Name</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{software_installation_name}</DetailText>
				</div>
			</div>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Software To Installation Quantity</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{software_installation_quantity}</DetailText>
				</div>
			</div>
		</>
	);
}

export default SoftwareInstallation