import { styled } from "@mui/material";
import Header from "../../atoms/landing/headings";
import Question from "../../atoms/landing/faq";
import DecorCircle from "../../atoms/landing/decorCircle";

const FaqWrapper = styled("div")(() => ({
	width: "100%",
	height: "auto",
	position: "relative",
	margin: "0 auto",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	gap: "64px",

	".questions": {
		width: "90%",
		display: "flex",
		justifyContent: "center",
		gap: "20px",
		flexWrap: "wrap",
	},
}));

const Faq = () => {
	return (
		<FaqWrapper>
			<Header
				title="Frequently Asked Questions"
				description="We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company"
				width="467px"
				containerWidth="65%"
			/>
			<div className="questions">
				<Question />
				<Question />
				<Question />
				<Question />
				<Question />
				<Question />
				<DecorCircle
					top="100px"
					right="0px"
					color="rgba(76, 111, 255, 0.12)"
					filter="blur(120.32733917236328px)"
				/>
			</div>
		</FaqWrapper>
	);
};

export default Faq;
