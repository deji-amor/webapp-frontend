import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

export function formatDate(inputDate, addTime = true) {
	const date = new Date(inputDate);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const period = hours >= 12 ? "pm" : "am";
	const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
	const paddedFormattedHours = String(formattedHours).padStart(2, "0");

	const formattedDate = `${day}-${month}-${year}`;
	const formattedDateTime = `${day}-${month}-${year}/${paddedFormattedHours}:${minutes} ${period}`;
	return addTime ? formattedDateTime : formattedDate;
}

const Duration = ({ ticket }) => {
	const { start_date_time, end_date_time, created_at } = ticket;

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
					<Text style={styles.detailText}>Creation Date/Time</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{formatDate(created_at)}</Text>
				</View>
			</View>
			<View style={styles.section}>
				<View style={styles.side}>
					<Text style={styles.detailText}>Start Date</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{formatDate(start_date_time, false)}</Text>
				</View>
			</View>
			<View style={styles.section}>
				<View style={styles.side}>
					<Text style={styles.detailText}>End Date</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{formatDate(end_date_time, false)}</Text>
				</View>
			</View>
		</>
	);
};

Duration.propTypes = {
	ticket: PropTypes.object,
};

export default Duration