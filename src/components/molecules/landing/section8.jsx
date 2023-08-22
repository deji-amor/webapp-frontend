import { styled } from "@mui/material";
import Ornament from "../../../assets/password/Ornament.png";

const NewsLetterWrapper = styled("div")(() => ({
	maxWidth: "100%",
	height: "auto",
	// margin: "auto",

	".container": {
		width: "80%",
		height: "307px",
		background: "#2B2E72",
		borderRadius: "8px",
		boxShadow: "0px 40px 92px -16px rgba(76, 111, 255, 0.32)",
		position: "relative",
		margin: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "64px",
	},

	".container h2": {
		color: "#FEFEFE",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: "3vw",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: "120%",
		letterSpacing: "0.24px",
	},

	form: {
		width: "80%",
		display: "flex",
		justifyContent: "center",
		gap: "20px",
	},

	"form input": {
		width: "80%",
		height: "56px",
		borderRadius: "8px",
		paddingLeft: "20px",
	},

	"form button": {
		color: "#ffffff",
		display: "flex",
		height: "56px",
		width: "200px",
		// padding: "15px 24px",
		justifyContent: "center",
		alignItems: "center",
		gap: "10px",
		borderRadius: "8px",
		background: "linear-gradient(180deg, #9265E5 0%, rgba(65, 45, 102, 0.90) 100%)",
	},

	".onee": {
		width: "100px",
		height: "100px",
		position: "absolute",
		left: "0px",
		bottom: "250px",
	},

	".twoo": {
		width: "100px",
		height: "100px",
		position: "absolute",
		right: "-30px",
		top: "250px",
	},
}));

const NewsLetter = () => {
	return (
		<NewsLetterWrapper>
			<div className="container">
				<img className="onee" src={Ornament} alt="Ornament" />
				<h2 className="containerh2">Subscribe to our Newsletter</h2>
				<form>
					<input type="text" name="email" placeholder="Enter your email address in here" />
					<button type="button">Subscribe Now</button>
				</form>
				<img className="twoo" src={Ornament} alt="Ornament" />
			</div>
		</NewsLetterWrapper>
	);
};

export default NewsLetter;
