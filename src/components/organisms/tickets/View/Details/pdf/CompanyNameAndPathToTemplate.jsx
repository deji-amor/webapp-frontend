import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

const CompanyNameAndPathToTemplate = ({chosenTemplate, ticket, customer}) => {
	const { id } = ticket;
  const pathToTemplate = JSON.parse(ticket.ticket_path)
	const { company_name, first_name, last_name, company_email } = customer;

	const styles = StyleSheet.create({
		section: {
			display: "flex",
			flexDirection: "row",
			borderWidth: 1,
			borderColor: "#ECECEC",
			flexWrap: "wrap",
		},
		side: {
			flexBasis: "50%",
			paddingTop: 12,
			paddingBottom: 12,
		},
		oneLine: {
			display: "flex",
			flexDirection: "row",
			alignItems: "flex-start",
			marginBottom: 16,
			flexWrap: "wrap",
			// justifyContent: "center",
		},
		BlueThemeMedium: {
			color: "#2b2e72",
			fontSize: 16, // 1.25rem in pixels (adjust as needed)
			fontStyle: "normal",
			fontWeight: 600,
		},
		BlueThemeSmall: {
			color: "#2b2e72",
			fontSize: 12.8, // 1rem in pixels (adjust as needed)
			fontStyle: "normal",
			fontWeight: 600,
		},
		BlueThemeLight: {
			color: "#2b2e72",
			fontSize: 14.4, // 1.125rem in pixels (adjust as needed)
			fontStyle: "normal",
			fontWeight: 600,
		},
		ticketId: {
			color: "#2B2E72",
			fontSize: 25.6,
			fontWeight: 600,
			marginBottom: 28.8
		},
		customer: {
			color: "#706E6E",
			fontSize: 16,
			fontWeight: 600,
			marginBottom: 10,
		},
		customerName: {
			color: "#2B2E72",
			fontSize: 19.2,
			fontWeight: 600,
		},
		customerEmail: {
			color: "#706E6E",
			fontSize: 14.4,
			fontWeight: 400,
			marginBottom: 35,
		},
	});

	const path = pathToTemplate.slice().map((p, ind, arr) => {
		return ind === arr.length - 1 ? (
			<Text style={styles.BlueThemeSmall} key={p}>
				{p}
			</Text>
		) : (
			<Text style={styles.BlueThemeLight} key={p}>
				{p}/
			</Text>
		);
	});

	return (
		<>
			<View style={styles.oneLine}>
				<Text style={styles.BlueThemeMedium}>{company_name} </Text>
				<Text style={styles.BlueThemeSmall}>- </Text>
				{path}
			</View>
			<View>
				<Text style={styles.ticketId}>ID {id}</Text>
			</View>
			<View>
				<Text style={styles.customer}>Customer</Text>
				<Text style={styles.customerName}>{first_name} {last_name}</Text>
				<Text style={styles.customerEmail}>{company_email}</Text>
			</View>
		</>
	);
}

CompanyNameAndPathToTemplate.propTypes = {
	chosenTemplate: PropTypes.array,
	customer: PropTypes.object,
	ticket: PropTypes.object,
};

export default CompanyNameAndPathToTemplate