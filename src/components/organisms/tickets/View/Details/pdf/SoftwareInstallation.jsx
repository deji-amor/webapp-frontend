import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

const SoftwareInstallation = ({ ticket }) => {
	const { software_installation_quantity, software_installation_name } = ticket;

	const styles = StyleSheet.create({
		section: {
			display: "flex",
			flexDirection: "row",
			borderTopWidth: 1,
			borderTopColor: "#ECECEC",
			borderBottomWidth: 1,
			borderBottomColor: "#ECECEC",
		},
		side: {
			flexBasis: "50%",
			paddingTop: 12,
			paddingBottom: 12,
		},
		detailText: {
			color: "#706e6e",
			fontSize: 11.2,
			fontWeight: 400,
		},
		detailTextBolder: {
			color: "#333",
			fontSize: 11.2,
			fontWeight: 500,
		},
	});

	return (
		<>
			<View style={styles.section}>
				<View style={styles.side}>
					<Text style={styles.detailText}>Software to Customize Name</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{software_installation_name}</Text>
				</View>
			</View>
			<View style={styles.section}>
				<View style={styles.side}>
					<Text style={styles.detailText}>Software to Customize Quantity</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{software_installation_quantity}</Text>
				</View>
			</View>
		</>
	);
};

SoftwareInstallation.propTypes = {
	ticket: PropTypes.object,
};

export default SoftwareInstallation