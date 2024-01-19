import { styled } from "@mui/material";
import Header from "../../atoms/landing/headings";
import Feature from "../../atoms/landing/feature";

const FeaturesWrapper = styled("div")(() => ({
	width: "100%",
	position: "relative",
	margin: "0 auto",
	display: "flex",
	flexDirection: "column",
	gap: "64px",

	".features": {
		width: "90%",
		margin: "0 auto",
		display: "flex",
		justifyContent: "space-evenly",
		gap: "10px",
		flexWrap: "wrap",
	},
}));

const Features = () => {
	return (
		<FeaturesWrapper>
			<Header
				title="Core Features"
				description="Our IT Service Management web app comes with a host of features tailored to help streamline your business processes. "
			/>
			<div className="features" id="features">
				<Feature
					title="Ticket Management"
					description="Fulfill service requests faster than ever with features such as bulk actions. Automate approvals and how you assign responsibilities."
					color="#ffffff"
					color2="#EFEFEF"
					shadow="0px 32px 80px -16px rgba(76, 111, 255, 0.36)"
					background="#2B2E72"
				/>

				<Feature
					title="Project Management"
					description="Our robust application helps your team effectively track and manage project and service requests efficiently without the fuss of using different applications."
					color="#ffffff"
					color2="#EFEFEF"
					shadow="0px 32px 80px -16px rgba(76, 111, 255, 0.36)"
					background="#2B2E72"

				/>

				<Feature
					title="Record Keeping"
					description="No more lost data or missing records, easily utilise our cloud based application to store and retrieve your operational data, whenever you want it, how you want it."
					color="#ffffff"
					color2="#EFEFEF"
					shadow="0px 32px 80px -16px rgba(76, 111, 255, 0.36)"
					background="#2B2E72"

				/>

				<Feature
					title="Customer Transparency"
					description="No more lost data or missing records, easily utilise our cloud based application to store and retrieve your operational data, whenever you want it, how you want it."
					color="#ffffff"
					color2="#EFEFEF"
					shadow="0px 32px 80px -16px rgba(76, 111, 255, 0.36)"
					background="#2B2E72"

				/>
			</div>
		</FeaturesWrapper>
	);
};

export default Features;
