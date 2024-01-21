import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import Banner from "../../../assets/password/prem.png";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const PremiumWrapper = styled("div")(() => ({
	width: "100%",
	height: "auto",
	position: "relative",
	margin: "0 auto",
	display: "flex",
	flexDirection: "column",
	gap: "64px",

	img: {
		maxWidth: "100%",
		height: "100%",
		position: "relative",
		top: "0",
		left: "0",
		zIndex: "12",
		objectFit: "contain",
	},

	".prem": {
		width: "50%",
		position: "absolute",
		zIndex: "13",
		top: "50%",
		transform: "translate(20%, -50%)",
		left: "0",
	},

	".prem h1": {
		color: "#FFF",
		fontFamily: "Poppins",
		fontSize: "2.8vw",
		fontStyle: "normal",
		fontWeight: "600",
		letterSpacing: "-0.4px",
	},

	".butIcon": {
		display: "flex",
		gap: "40px",
        marginTop: "20px"
	},

	".butIcon button": {
        color: "#ffffff",
		display: "flex",
		padding: "14px 40px",
		justifyContent: "center",
		alignItems: "center",
		gap: "10px",
		borderRadius: "8px",
		background: "linear-gradient(181deg, #9265E5 0%, rgba(65, 45, 102, 0.90) 100%)",
	},

    ".butIcon .icon": {
        color: "#ffffff",
        height: "50px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer"
    }
}));

const Premium = () => {
	return (
		<PremiumWrapper>
			<img src={Banner} alt="banner" />
			<div className="prem">
				<h1>Premium user and endpoint management experience</h1>
				<div className="butIcon">
					<button type="button">Contact Us</button>
					{/* <div className="icon">
						<PlayCircleIcon style={{ color: "#ffffff" }} />
						<span>See how it works</span>
					</div> */}
				</div>
			</div>
		</PremiumWrapper>
	);
};
// 

export default Premium;
