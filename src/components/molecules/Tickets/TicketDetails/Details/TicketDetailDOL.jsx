import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const FormatLocation = ({loc, ind}) => {
	const {address, type} = loc
	return (
		<div className="space-y-[0.1rem] mb-[0.5rem]">
			<span className="inline-block">
				<span className="text-[#706E6E] block text-sm not-italic font-light leading-5 tracking-[0.00938rem]">
					Drop Off Location {ind} address:
				</span>
				<span className="text-[#706E6E] block text-sm not-italic font-semibold leading-5 tracking-[0.00938rem]">
					{address}
				</span>
			</span>
			<span className="inline-block">
				<span className="text-[#706E6E] block text-sm not-italic font-light leading-5 tracking-[0.00938rem]">
					Drop Off Location {ind} building type:
				</span>
				<span className="text-[#706E6E] block text-sm not-italic font-semibold capitalize leading-5 tracking-[0.00938rem]">
					{type}
				</span>
			</span>
		</div>
	);
}

const TicketDetailDOL = ({ticket}) => {
  const { drop_off_locations } = ticket;

	const locs = JSON.parse(drop_off_locations)

	const locDet = locs.map((loc, ind) => <div key={loc} className="">
		<FormatLocation loc={loc} ind={ind+1}/>
	</div>);

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