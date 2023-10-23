import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

const Location = ({ ticket }) => {
	const { locations } = ticket;
	const list = JSON.parse(locations);

	const styles = StyleSheet.create({
		page: {
			backgroundColor: "#fff",
		},
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

	return (
		<>
			<View style={styles.section}>
				<View style={styles.side}>
					<Text style={styles.detailText}>Number of Locations</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{list.length}</Text>
				</View>
			</View>
			<View style={styles.section}>
				<View style={styles.side}>
					<Text style={styles.detailText}>Location Details</Text>
				</View>
				<View style={styles.sideDown}>
					{list.map((item, ind) => (
						<View style={styles.spaceY} key={item}>
							<View style={styles.spaceY}>
								<Text style={styles.detailText}>Location {ind + 1} address:</Text>
								<Text style={styles.detailTextBolder}>{item.address}</Text>
							</View>
							<View style={styles.spaceY}>
								<Text style={styles.detailText}>Location {ind + 1} building type:</Text>
								<Text style={styles.detailTextBolder}>{item.type}</Text>
							</View>
						</View>
					))}
				</View>
			</View>
		</>
	);
};

Location.propTypes = {
	ticket: PropTypes.object,
};

export default Location