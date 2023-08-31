import React from 'react'
import { Document, Page, StyleSheet, View, Text } from "@react-pdf/renderer";

const TicketTemplatePDF = () => {
  const styles = StyleSheet.create({
		section: {
			display: "flex",
			flexDirection: "row",
			borderWidth: 1,
			borderColor: "#ECECEC",
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
	});

  return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<View style={styles.side}>
						<Text style={styles.detailText}>Point of contact Name</Text>
					</View>
					<View style={styles.side}>
						<Text style={styles.detailText}>Yetunde Coker</Text>
					</View>
				</View>
			</Page>
		</Document>
	);
}

export default TicketTemplatePDF