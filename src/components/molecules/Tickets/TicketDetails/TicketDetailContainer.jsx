import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailPOC from './Details/TicketDetailPOC'
import TicketDetailNumOfTech from './Details/TicketDetailNumOfTech'
import TicketDetailSOW from './Details/TicketDetailSOW'
import TicketDetailDuration from './Details/TicketDetailDuration'
import TicketDetailHardQuan from './Details/TicketDetailHardQuan'
import TicketDetailHardType from './Details/TicketDetailHardType'
import TicketDetailLoc from './Details/TicketDetailLoc'
import TicketDetailMatPro from './Details/TicketDetailMatPro'
import TicketDetailNumSta from './Details/TicketDetailNumSta'
import TicketDetailNumSys from './Details/TicketDetailNumSys'
import TicketDetailSAI from './Details/TicketDetailSAI'
import TicketDetailSAC from './Details/TicketDetailSAC'
import TicketDetailPUL from './Details/TicketDetailPUL'
import TicketDetailDOL from './Details/TicketDetailDOL'
import TicketDetailAddFields from './Details/TicketDetailAddFields'
import tree from '../../../../state-manager/reducers/tickets/ticketCreationMultiplePath'

const TicketDetailContainer = ({ticket}) => {
console.log(ticket);
const { ticket_form } = ticket;
console.log(tree[ticket_form]);

const requiredSections = tree[ticket_form].fields;

  return (
		<>
			{requiredSections.includes("pointOfContact") && <TicketDetailPOC ticket={ticket}/>}
			{requiredSections.includes("numberOfTechniciansNeeded") && <TicketDetailNumOfTech ticket={ticket}/>} 
			{requiredSections.includes("scopeOfWork") && <TicketDetailSOW ticket={ticket}/>} 
			{requiredSections.includes("duration") && <TicketDetailDuration ticket={ticket}/>}
			{requiredSections.includes("hardwareComponentQuantity") && <TicketDetailHardQuan ticket={ticket}/>}
			{requiredSections.includes("hardwareComponentType") && <TicketDetailHardType ticket={ticket}/>}
			{requiredSections.includes("materialsProcurement") && <TicketDetailMatPro ticket={ticket}/>}
			{requiredSections.includes("numberOfWorkStation") && <TicketDetailNumSta ticket={ticket}/>}
			{requiredSections.includes("numberOfWorkSystems") && <TicketDetailNumSys ticket={ticket}/>}
			{requiredSections.includes("softwareApplicationInstallation") && <TicketDetailSAI ticket={ticket}/>}
			{requiredSections.includes("softwareApplicationCustomization") && <TicketDetailSAC ticket={ticket}/>}
			{requiredSections.includes("location") && <TicketDetailLoc ticket={ticket}/>} 
			{requiredSections.includes("pickUpLocation") && <TicketDetailPUL ticket={ticket}/>}
			{requiredSections.includes("dropOffLocation") && <TicketDetailDOL ticket={ticket}/>} 
			{requiredSections.includes("additionalFields") && <TicketDetailAddFields ticket={ticket}/>}
		</>
	);
}

TicketDetailContainer.propTypes = {
	ticket: PropTypes.object
};

export default TicketDetailContainer