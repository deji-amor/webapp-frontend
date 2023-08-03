import { styled } from "@mui/material";
import Header from "../../atoms/landing/headings";
import Feature from "../../atoms/landing/feature";

const FeaturesWrapper = styled("div")(() => ({
    width: "1448px",
    position: "relative",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "64px",
    top: "1500px",

    ".features": {
        width: "90%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-evenly"
    }
}))

const Features = () => {
	return (
		<FeaturesWrapper>
			<Header
				title="Core Features"
				description="We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company"
				width=""
			/>
			<div className="features">
				<Feature
					title="Ticket Management"
					description="Fulfill service requests faster than ever with features such as bulk actions. Automate approvals and how you assign responsibilities"
					color="#ffffff"
					color2="#EFEFEF"
                    shadow="0px 32px 80px -16px rgba(76, 111, 255, 0.36)"
					background="#2B2E72"
				/>

				<Feature
					title="Project Management"
					description="Fulfill service requests faster than ever with features such as bulk actions. Automate approvals and how you assign responsibilities"
			
				/>

				<Feature
					title="Record Keeping"
					description="Fulfill service requests faster than ever with features such as bulk actions. Automate approvals and how you assign responsibilities"
			
				/>

				<Feature
					title="Customer Transparency"
					description="Fulfill service requests faster than ever with features such as bulk actions. Automate approvals and how you assign responsibilities"
			
				/>
			</div>
		</FeaturesWrapper>
	);
};

export default Features;
