import React from 'react'
import DetailText from "../DetailText";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AdditionalFields = () => {
	const params = useParams();
	const { ticketId } = params;
	const { tickets } = useSelector((state) => state.tickets);
	const ticketInView = tickets.find((ticket) => +ticket.id === +ticketId);
	const { additional_fields } = ticketInView;
	const list = JSON.parse(additional_fields);
	if(list.length === 0) return <></>

	return (
		<>
			{list.map((item) => (
				<div key={item} className="flex">
					<div className="basis-[50%] py-[0.75rem]">
						<DetailText>{Object.entries(item)[0][0]}</DetailText>
					</div>
					<div className="basis-[50%] py-[0.75rem]">
						<DetailText>{Object.entries(item)[0][1]}</DetailText>
					</div>
				</div>
			))}
		</>
	);
}

export default AdditionalFields