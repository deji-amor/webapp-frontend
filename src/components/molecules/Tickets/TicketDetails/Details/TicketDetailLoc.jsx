import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const FormatLocation = ({loc, ind}) => {
	const {address, type} = loc
	return (
		<div className="space-y-[0.1rem] mb-[0.5rem]">
			<span className="inline-block">
				<span className="text-[#706E6E] block text-sm not-italic font-light leading-5 tracking-[0.00938rem]">
					Location {ind} address:
				</span>
				<span className="text-[#706E6E] block text-sm not-italic font-semibold leading-5 tracking-[0.00938rem]">
					{address || "null"}
				</span>
			</span>
			<span className="inline-block">
				<span className="text-[#706E6E] block text-sm not-italic font-light leading-5 tracking-[0.00938rem]">
					Location {ind} building type:
				</span>
				<span className="text-[#706E6E] block text-sm not-italic font-semibold capitalize leading-5 tracking-[0.00938rem]">
					{type || "null"}
				</span>
			</span>
		</div>
	);
}

const TicketDetailLoc = ({ticket}) => {
  const { locations } = ticket;

	const locs = JSON.parse(locations)
	console.log(locs);

	const locDet = locs.map((loc, ind) => <span key={loc} className="">
		<FormatLocation loc={loc} ind={ind+1}/>
	</span>);

	return (
		<>
			<TicketDetailItem field="Location Details" value={locDet}/>
		</>
	);
}

FormatLocation.propTypes = {
	loc: PropTypes.object,
	ind: PropTypes.number
};

TicketDetailLoc.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailLoc