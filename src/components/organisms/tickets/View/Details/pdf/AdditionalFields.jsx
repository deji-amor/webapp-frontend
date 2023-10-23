import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

const AdditionalFields = ({ ticket }) => {
	const { additional_fields } = ticket;
	const list = JSON.parse(additional_fields);

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
		sideDown: {
			flexBasis: "50%",
			paddingTop: 12,
			paddingBottom: 12,
			display: "flex",
			flexDirection: "column",
			gap: 0.5,
		},
		spaceY: {
			display: "flex",
			flexDirection: "column",
			columnGap: 0.5,
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

	if(list.length === 0) return <></>

	return (
		<>
			{list.map((item) => (
				<View style={styles.section} key={item}>
					<View style={styles.side}>
						<Text style={styles.detailText}>{Object.entries(item)[0][0]}</Text>
					</View>
					<View style={styles.side}>
						<Text style={styles.detailText}>{Object.entries(item)[0][1]}</Text>
					</View>
				</View>
			))}
		</>
	);
};

AdditionalFields.propTypes = {
	ticket: PropTypes.object,
};

export default AdditionalFields