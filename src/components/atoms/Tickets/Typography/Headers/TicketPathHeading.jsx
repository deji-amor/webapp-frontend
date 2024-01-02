import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge';

const TicketCompany = ({children}) => (
	<span className="text-[#2B2E72] text-xl not-italic font-semibold leading-[2.57006rem] font-poppins">{children}</span>
);
const TicketPathsHeading = ({ children }) => (
	<span className="text-[#2B2E72] text-xl not-italic font-medium leading-[2.57006rem] font-poppins">{children}</span>
);
const TicketTypeHeading = ({ children }) => (
	<span className="text-[#2B2E72] text-base not-italic font-bold leading-[2.57006rem] font-poppins">{children}</span>
);

const TicketPathHeading = ({ticket, className}) => {
	const { company_name, ticket_path } = ticket;
	let path = JSON.parse(ticket_path); // '["Service Tickets","Break Fix Maintenance","Troubleshooting"]'

	return (
		<div className={twMerge(`flex ${className}`)}>
			<TicketCompany>
				{company_name}
				{" - "}
			</TicketCompany>
			{path.map((p, ind, arr) =>
				ind === arr.length - 1 ? (
					<TicketTypeHeading key={p}>{p}</TicketTypeHeading>
				) : (
					<TicketPathsHeading key={p}>
						{ind === 0 && " "} {p}/
					</TicketPathsHeading>
				)
			)}
		</div>
	);
}

TicketCompany.propTypes = {
  children: PropTypes.node
}
TicketPathsHeading.propTypes = {
  children: PropTypes.node
};
TicketTypeHeading.propTypes = {
  children: PropTypes.node
};
TicketPathHeading.propTypes = {
	ticket: PropTypes.object,
	className: PropTypes.string
};

export default TicketPathHeading