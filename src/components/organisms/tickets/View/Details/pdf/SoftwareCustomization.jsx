import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

const SoftwareCustomization = ({ ticket }) => {
	const { software_customization_quantity, software_customization_name } = ticket;

	const styles = StyleSheet.create({
		section: {
			display: "flex",
			flexDirection: "row",
			borderWidth: 1,
			borderColor: "#ECECEC",
		},
		side: {
			flexBasis: "50%",
			paddingTop: 12,
			paddingBottom: 12,
		},
		detailText: {
			color: "#706e6e",
			fontSize: 18,
			fontWeight: "heavy",
			// lineHeight: 0.5,
		},
	});

	return (
		<>
			<View style={styles.section}>
				<View style={styles.side}>
					<Text style={styles.detailText}>Software to Customize Name</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{software_customization_name}</Text>
				</View>
			</View>
			<View style={styles.section}>
				<View style={styles.side}>
					<Text style={styles.detailText}>Software to Customize Quantity</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{software_customization_quantity}</Text>
				</View>
			</View>
		</>
	);
};

SoftwareCustomization.propTypes = {
	ticket: PropTypes.object,
};

export default SoftwareCustomization