import { styled, useMediaQuery } from "@mui/material";
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
	const query = useMediaQuery("(max-width: 1100px)");

	return (
		<FaqWrapper>
			<Header
				title="Frequently Asked Questions"
				description="Here are some frequently asked questions about our IT Field Management web app:"
				width={query ? "380px" : "450px"}
				containerWidth="80%"
			/>
			<div className="questions">
				<Question
					question={"How does your app help me manage my IT operations?"}
					answer={
						"Our IT Field Management web app is here to help! Our app is designed to help you streamline your IT operations and make your life easier."
					}
				/>
				<Question
					question={
						"What is IT Field Management and how does ProjectInfo help me and my team to manage our service delivery?"
					}
					answer={
						"IT Field Management tools are systems that organizations use to coordinate resources to deliver services outside of their company property. This includes equipment installation, maintenance, break/fix, and asset monitoring. Our app is designed to help you streamline your IT operations and make your life easier."
					}
				/>
				<Question
					question={"What are the benefits of using your app?"}
					answer={
						"Enhancing your day to day operations and giving you a dashboard view for clear transparency and tracking."
					}
				/>
				<Question
					question={"What core features does your app have?"}
					answer={
						"Ticket Management. Project Management, Team Management. Customer Management."
					}
				/>
				<Question
					question={"How do i get started with ProjectInfo?"}
					answer={
						"Contact us to get started."
					}
				/>
				<Question
					question={"Can I register more than one business with ProjectInfo application?"}
					answer={
						"Depending on the plan that you're subscribed to, you’ll be able to register more than one company on the Product."
					}
				/>
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
