import { styled } from "@mui/material";
import Banner from "../../../assets/password/butbanner.png";
import Female from "../../../assets/password/female.png";
import Analysis from "../../../assets/password/analysis.png"
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const PremiumWrapper = styled("div")(() => ({
	width: "90%",
	height: "577px",
	position: "relative",
	margin: "auto",
	marginBottom: "200px",
	display: "flex",
	flexDirection: "column",
	gap: "64px",
	top: "1700px",

	img: {
		position: "absolute",
		top: "0",
		left: "0",
		zIndex: "12",
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},

	".layer": {
		width: "100%",
		height: "100%",
		position: "absolute",
		zIndex: "10",
		top: "0",
		left: "0",
		background: "linear-gradient(176deg, #506B85 0%, #2B2E72 100%)",
	},

	".female": {
		width: "400px",
		height: "100%",
		position: "absolute",
		zIndex: "13",
		top: "0",
		right: "170px",
	},

	".female .femaleImage": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},

	".female .icon": {
		width: "100px",
		height: "100px",
		position: "relative",
		top: "150px",
		left: "310px",
		objectFit: "cover",
	},

	".prem": {
		position: "absolute",
		zIndex: "13",
		top: "50%",
		transform: "translate(20%, -50%)",
		left: "0",
	},

	".prem h1": {
		width: "567px",
		color: "#FFF",
		fontFamily: "Poppins",
		fontSize: "40px",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: "61px",
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
			<div className="female">
				<img className="icon" src={Analysis} alt="banner" />
				<img className="femaleImage" src={Female} alt="banner" />
			</div>
			<img src={Banner} alt="banner" />
			<div className="layer"></div>
			<div className="prem">
				<h1>Premium user and endpoint management experience</h1>
				<div className="butIcon">
					<button type="button">Free Trial</button>
					<div className="icon">
						<PlayCircleIcon style={{ color: "#ffffff" }} />
						<span>See how it works</span>
					</div>
				</div>
			</div>
		</PremiumWrapper>
	);
};

export default Premium;
