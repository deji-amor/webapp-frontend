import React from 'react'
import BlueThemedMediumText from "../../../atoms/tickets/CreateTicketSuperAdmin/BlueThemedMediumText";
import BlueThemeSmall from "../../../atoms/tickets/CreateTicketSuperAdmin/BlueThemedSmall";
import BlueThemedLightText from "../../../atoms/tickets/CreateTicketSuperAdmin/BlueThemedLightText";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CompanyNameAndPathToTemplate = () => {
  const { pathToTemplate } = useSelector((state) => state.ticketEdition);
	const params = useParams();
	const { ticketId } = params;
	const { tickets } = useSelector((state) => state.tickets);
	const ticket = tickets.find((ticket) => +ticket.id === +ticketId);
	const {company_name} = ticket

	const path = pathToTemplate.slice().map((p, ind, arr) => {
		return ind === arr.length - 1 ? (
			<BlueThemeSmall key={p}>{p}</BlueThemeSmall>
		) : (
			<BlueThemedLightText key={p}>{p}/</BlueThemedLightText>
		);
	});

	return (
		<div>
			<div className="mb-[0.75rem]">
				<BlueThemedMediumText>{company_name} </BlueThemedMediumText>{" "}
				<BlueThemedLightText>-</BlueThemedLightText> {path}
			</div>
		</div>
	);
}

export default CompanyNameAndPathToTemplate