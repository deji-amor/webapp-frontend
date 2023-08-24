import React from 'react'
import DetailText from '../DetailText';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const HardwareComponentType = () => {
  const params = useParams();
	const { ticketId } = params;
	const { tickets } = useSelector((state) => state.tickets);
	const ticketInView = tickets.find((ticket) => +ticket.id === +ticketId);
	const { hardware_component_type_list, hardware_component_type_quantity } = ticketInView;
	const list = JSON.parse(hardware_component_type_list);

  return (
		<>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Hardware Types</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					{list.map((item) => (
						<DetailText key={item}>{item}.</DetailText>
					))}
				</div>
			</div>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Number of Hardware Types</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{hardware_component_type_quantity}</DetailText>
				</div>
			</div>
		</>
	);
}

export default HardwareComponentType