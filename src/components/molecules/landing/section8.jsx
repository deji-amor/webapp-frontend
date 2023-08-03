import { styled } from "@mui/material";
import Ornament from "../../../assets/password/Ornament.png"

const NewsLetterWrapper = styled("div")(() => ({
	width: "1024px",
	height: "307px",
	background: "#2B2E72",
	borderRadius: "8px",
	boxShadow: "0px 40px 92px -16px rgba(76, 111, 255, 0.32)",
	position: "relative",
	margin: "auto",
	marginBottom: "200px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "64px",
	top: "1400px",

	h2: {
		color: "#FEFEFE",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: "48px",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: "120%",
		letterSpacing: "0.24px",
	},

	form: {
		display: "flex",
		justifyContent: "space-between",
        gap: "20px"
	},

	"form input": {
		width: "644px",
		height: "56px",
		borderRadius: "8px",
		paddingLeft: "20px",
	},

	"form button": {
        color: "#ffffff",
		display: "flex",
		height: "56px",
		padding: "18px 24px",
		justifyContent: "center",
		alignItems: "center",
		gap: "10px",
        borderRadius: "8px",
        background: "linear-gradient(180deg, #9265E5 0%, rgba(65, 45, 102, 0.90) 100%)",
	},

    ".onee": {
        position: 'absolute',
        left: "20px",
        bottom: "250px",
    },

    ".twoo": {
        position: 'absolute',
        right: "-30px",
        top: "250px",
    }
}));

const NewsLetter = () => {
	return (
		<NewsLetterWrapper>
            <img className="onee" src={Ornament} alt="Ornament" />
			<h2>Subscribe to our Newsletter</h2>
			<form>
				<input type="text" name="email" placeholder="Enter your email address in here" />
				<button type="button">Subscribe Now</button>
			</form>
            <img className="twoo" src={Ornament} alt="Ornament" />
		</NewsLetterWrapper>
	);
};

export default NewsLetter;
