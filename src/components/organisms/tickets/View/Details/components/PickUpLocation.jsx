import React from 'react'
import DetailText from '../DetailText';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PickUpLocation = () => {
	const params = useParams();
	const { ticketId } = params;
	const { tickets } = useSelector((state) => state.tickets);
	const ticketInView = tickets.find((ticket) => +ticket.id === +ticketId);
	const { pick_locations } = ticketInView;
	const list = JSON.parse(pick_locations);

	return (
		<>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Number of Locations</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>{list.length}</DetailText>
				</div>
			</div>
			<div className="flex">
				<div className="basis-[50%] py-[0.75rem]">
					<DetailText>Location Details</DetailText>
				</div>
				<div className="basis-[50%] py-[0.75rem] flex flex-col">
					{list.map((item, ind) => (
						<div key={item} className="space-y-[0.5rem]">
							<div className="space-y-[0.25rem]">
								<DetailText>Location {ind + 1} address:</DetailText>
								<DetailText bolder={true}>{item.address}</DetailText>
							</div>
							<div className="space-y-[0.25rem]">
								<DetailText>Location {ind + 1} building type:</DetailText>
								<DetailText bolder={true}>{item.type}</DetailText>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default PickUpLocation