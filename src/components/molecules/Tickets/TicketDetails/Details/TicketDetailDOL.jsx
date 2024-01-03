import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const FormatLocation = ({loc, ind}) => {
	const {address, type} = loc
	return (
		<span className="flex flex-col">
			<span className="text-[#706E6E] inline-block text-sm not-italic font-light leading-5 tracking-[0.00938rem]">
				Drop Off Location {ind} address:
			</span>
			<span className="text-[#706E6E] text-sm not-italic font-semibold leading-5 tracking-[0.00938rem] mb-[0.5rem]">
				{address}
			</span>
			<span className="text-[#706E6E] inline-block text-sm not-italic font-light leading-5 tracking-[0.00938rem]">
				Drop Off Location {ind} building type:
			</span>
			<span className="text-[#706E6E] text-sm not-italic font-semibold capitalize leading-5 tracking-[0.00938rem]">
				{type}
			</span>
		</span>
	);
}

const TicketDetailDOL = ({ticket}) => {
  const { drop_off_locations } = ticket;

	const locs = JSON.parse(drop_off_locations)

	const locDet = locs.map((loc, ind) => <span key={loc} className="space-y-[1.25rem]">
		<FormatLocation loc={loc} ind={ind+1}/>
	</span>);

	return (
		<>
			<TicketDetailItem field="Drop Off Location Details" value={locDet} />
		</>
	);
}

FormatLocation.propTypes = {
	loc: PropTypes.object,
	ind: PropTypes.number
};

TicketDetailDOL.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailDOL