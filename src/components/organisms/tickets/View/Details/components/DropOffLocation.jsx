import React from 'react'
import DetailText from '../DetailText';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DropOffLocation = () => {
		const params = useParams();
		const { ticketId } = params;
		const { tickets } = useSelector((state) => state.tickets);
		const ticketInView = tickets.find((ticket) => +ticket.id === +ticketId);
		const { drop_off_locations } = ticketInView;
		const list = JSON.parse(drop_off_locations);

		return (
			<>
				<div className="flex">
					<div className="basis-[50%] py-[0.75rem]">
						<DetailText>Number of Drop Off Locations</DetailText>
					</div>
					<div className="basis-[50%] py-[0.75rem]">
						<DetailText>{list.length}</DetailText>
					</div>
				</div>
				<div className="flex">
					<div className="basis-[50%] py-[0.75rem]">
						<DetailText>Drop Off Location Details</DetailText>
					</div>
					<div className="basis-[50%] py-[0.75rem] flex flex-col">
						{list.map((item, ind) => (
							<div key={item} className="space-y-[0.5rem]">
								<div className="space-y-[0.25rem]">
									<DetailText>Drop Off Location {ind + 1} address:</DetailText>
									<DetailText bolder={true}>{item.address}</DetailText>
								</div>
								<div className="space-y-[0.25rem]">
									<DetailText>Drop Off Location {ind + 1} building type:</DetailText>
									<DetailText bolder={true}>{item.type}</DetailText>
								</div>
							</div>
						))}
					</div>
				</div>
			</>
		);
}

export default DropOffLocation