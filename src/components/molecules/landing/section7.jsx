import { styled } from "@mui/material";
import Header from "../../atoms/landing/headings";
import Question from "../../atoms/landing/faq";

const FaqWrapper = styled("div")(() => ({
	width: "80%",
	height: "577px",
	position: "relative",
	margin: "auto",
	marginBottom: "200px",
	display: "flex",
	flexDirection: "column",
	gap: "64px",
	top: "1600px",

	".questions": {
        width: "100%",
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
			/>
			<div className="questions">
				<Question />
				<Question />
				<Question />
				<Question />
				<Question />
				<Question />
			</div>
		</FaqWrapper>
	);
};

export default Faq;
