import { styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const QuestionWrapper = styled("div")(() => ({
	width: "504px",
	height: "86px",
	borderRadius: "8px",
	border: "1px solid #89D6FB",
	background: "#FEFEFE",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "20px",
	cursor: "Pointer",
	position: "relative",
	zIndex: "55",

	p: {
		color: "#2B2E72",
		width: "424px",
		fontFamily: "Poppins",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "120%",
		letterSpacing: "0.08px",
	},
}));

const Question = () => {
	return (
		<QuestionWrapper>
			<p>
				What is IT Service Management and how does Nexium help me and my team to manage our service
				delivery?
			</p>
			<ExpandMoreIcon />
		</QuestionWrapper>
	);
};

export default Question;
