import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

const ScopeOfWork = ({ ticket }) => {
	const { scope_of_work_description } = ticket;

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
					<Text style={styles.detailText}>Scope of Work Description</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{scope_of_work_description}</Text>
				</View>
			</View>
		</>
	);
};

ScopeOfWork.propTypes = {
	ticket: PropTypes.object,
};

export default ScopeOfWork