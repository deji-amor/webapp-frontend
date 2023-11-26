import { useState } from "react";
import { styled } from "@mui/material";
import "./atom.css"
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const QuestionWrapper = styled("div")(() => ({
	width: "500px",
	height: "80px",
	borderRadius: "8px",
	border: "1px solid #89D6FB",
	background: "#FEFEFE",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "20px",
	padding: "20px",
	cursor: "Pointer",
	position: "relative",
	zIndex: "55",

	"p.question": {
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

const AnswerWrapper = styled("div")(() => ({
	width: "500px",
	overflow: "hidden",
	
	"p.answer": {
		width: "100%",
		height: "0px",
		paddingLeft: "5px",
		display: "none",
		transition: "all 2s ease-out"

	},

	"p.answer.active": {
		display: "flex",
		height: "auto",
		border: "1px solid #89D6FB",
		borderRadius: "8px",
		padding: "20px",	
		transition: "all 2s ease-in"
	}
}));


const Question = ({question, answer}) => {
	const [toggle, setToggle] = useState(false)

	return (
		<div>
			<QuestionWrapper className="quest">
				<div style={{display: "flex", alignItems: "center"}}>
					<p className="question">
						{question}
					</p>
					<ExpandMoreIcon onClick={() => setToggle(prev => !prev)} />
				</div>
			</QuestionWrapper>
			<AnswerWrapper>
			<p className={toggle ? "answer active" : "answer"}>
				{answer}	
			</p>
			</AnswerWrapper>
			
		</div>
	);
};

Question.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
}

export default Question;
