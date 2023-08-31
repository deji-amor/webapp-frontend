import React from 'react'
import PropTypes from "prop-types";
import {StyleSheet, View, Text } from "@react-pdf/renderer";

const PointOfContact = ({ticket}) => {
	const { point_of_contact_name, point_of_contact_phone_number, point_of_contact_address } = ticket;

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
					<Text style={styles.detailText}>Point of contact Name</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{point_of_contact_name}</Text>
				</View>
			</View>
			<View style={styles.section}>
				<View style={styles.side}>
					<Text style={styles.detailText}>Point of contact Phone</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{point_of_contact_phone_number}</Text>
				</View>
			</View>
			<View style={styles.section}>
				<View style={styles.side}>
					<Text style={styles.detailText}>Point of contact address</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{point_of_contact_address}</Text>
				</View>
			</View>
		</>
	);
}

PointOfContact.propTypes = {
	ticket: PropTypes.object,
};

export default PointOfContact