import React from 'react'
import PropTypes from "prop-types"
import { Document, Page, StyleSheet, View, Text } from "@react-pdf/renderer";
import tree from '../../../../../state-manager/reducers/tickets/ticketCreationMultiplePath';
import EditFromPdf from './pdf/EditFromPdf';
import CompanyNameAndPathToTemplate from './pdf/CompanyNameAndPathToTemplate';
import AdditionalFields from "./pdf/AdditionalFields";
import DropOffLocation from "./pdf/DropOffLocation";
import Duration from "./pdf/Duration";
import HardwareComponentQuantity from "./pdf/HardwareComponentQuantity";
import HardwareComponentType from "./pdf/HardwareComponentType";
import Location from "./pdf/Location";
import MaterialsProcurement from "./pdf/MaterialsProcurement";
import NumberOfTechNeeded from "./pdf/NumberOfTechNeeded";
import NumberOfWorkStation from "./pdf/NumberOfWorkStation";
import NumberOfWorkSystem from "./pdf/NumberOfWorkSystem";
import PickUpLocation from "./pdf/PickUpLocation";
import PointOfContact from "./pdf/PointOfContact";
import ScopeOfWork from "./pdf/ScopeOfWork";
import SoftwareCustomization from "./pdf/SoftwareCustomization";
import SoftwareInstallation from "./pdf/SoftwareInstallation";
import Attachments from "./pdf/Attachments";

const TicketTemplatePDF = ({ticket, customer}) => {
  const styles = StyleSheet.create({
		page: {
			backgroundColor: "#fff",
			padding: "25.6",
		},
		section: {
			display: "flex",
      flexDirection: "row"
		},
		side: {
			flexBasis: "50%",
			paddingTop: 18,
			paddingBottom: 18,
		},
		detailText: {
			color: "#706e6e",
			fontSize: 18,
			fontWeight: "heavy",
			lineHeight: 1.2,
		},
		border: {
			borderRadius: 9.6,
			borderWidth: 1,
			borderColor: "#2B2E72",
			padding: 16,
		}
	});

		const ticketPath = JSON.parse(ticket.ticket_path);
		const ticketForm = ticketPath.at(-1)
		const chosenTemplate = tree[ticketForm].fields
		const pointOfContact = chosenTemplate.includes("pointOfContact");
		const numberOfTechniciansNeeded = chosenTemplate.includes("numberOfTechniciansNeeded");
		const scopeOfWork = chosenTemplate.includes("scopeOfWork");
		const duration = chosenTemplate.includes("duration");
		const hardwareComponentQuantity = chosenTemplate.includes("hardwareComponentQuantity");
		const hardwareComponentType = chosenTemplate.includes("hardwareComponentType");
		const location = chosenTemplate.includes("location");
		const materialsProcurement = chosenTemplate.includes("materialsProcurement");
		const numberOfWorkStation = chosenTemplate.includes("numberOfWorkStation");
		const numberOfWorkSystems = chosenTemplate.includes("numberOfWorkSystems");
		const softwareApplicationInstallation = chosenTemplate.includes(
			"softwareApplicationInstallation"
		);
		const softwareApplicationCustomization = chosenTemplate.includes(
			"softwareApplicationCustomization"
		);
		const pickUpLocation = chosenTemplate.includes("pickUpLocation");
		const dropOffLocation = chosenTemplate.includes("dropOffLocation");
		const additionalFields = chosenTemplate.includes("additionalFields");


  return (
		<Document>
			<Page size="A4" style={styles.page}>
				<CompanyNameAndPathToTemplate ticket={ticket} customer={customer} />
				<View style={styles.border}>
					<EditFromPdf ticket={ticket} customer={customer}/>
					{pointOfContact && <PointOfContact ticket={ticket} />}
					{numberOfTechniciansNeeded && <NumberOfTechNeeded ticket={ticket} />}
					{numberOfWorkStation && <NumberOfWorkStation ticket={ticket} />}
					{numberOfWorkSystems && <NumberOfWorkSystem ticket={ticket} />}
					{scopeOfWork && <ScopeOfWork ticket={ticket} />}
					{duration && <Duration ticket={ticket} />}
					{materialsProcurement && <MaterialsProcurement ticket={ticket} />}
					{softwareApplicationInstallation && <SoftwareInstallation ticket={ticket} />}
					{softwareApplicationCustomization && <SoftwareCustomization ticket={ticket} />}
					{hardwareComponentQuantity && <HardwareComponentQuantity ticket={ticket} />}
					{hardwareComponentType && <HardwareComponentType ticket={ticket} />}
					{location && <Location ticket={ticket} />}
					{dropOffLocation && <DropOffLocation ticket={ticket} />}
					{pickUpLocation && <PickUpLocation ticket={ticket} />}
					{/* {additionalFields && <AdditionalFields ticket={ticket} />} */}
					{<Attachments ticket={ticket}/>}
				</View>
			</Page>
		</Document>
	);
}

TicketTemplatePDF.propTypes = {
	ticket: PropTypes.object,
	customer: PropTypes.object,
}

export default TicketTemplatePDF