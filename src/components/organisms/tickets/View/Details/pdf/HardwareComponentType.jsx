import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "@react-pdf/renderer";

const HardwareComponentType = ({ ticket }) => {
	const { hardware_component_type_list, hardware_component_type_quantity } = ticket;
	const list = JSON.parse(hardware_component_type_list);

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
					<Text style={styles.detailText}>Hardware Types</Text>
				</View>
				<View style={styles.sideDown} >
					{list.map((item) => (
						<Text key={item}>{item}.</Text>
					))}
				</View>
			</View>
			<View style={styles.section}>
				<View style={styles.side}>
					<Text style={styles.detailText}>Number of Hardware Types</Text>
				</View>
				<View style={styles.side}>
					<Text style={styles.detailText}>{hardware_component_type_quantity}</Text>
				</View>
			</View>
		</>
	);
};

HardwareComponentType.propTypes = {
	ticket: PropTypes.object,
};

export default HardwareComponentType