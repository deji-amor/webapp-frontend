import { styled, useMediaQuery } from "@mui/material";
import "./board.css";
import NavLinks from "./navlinks";
import Circle from "../../atoms/landing/circle";
import HeroMessage from "./hero-message";
import HeroImage from "../../../assets/password/ticket.png";
import DecorCircle from "../../atoms/landing/decorCircle";

const BoardParentWrapper = styled("div")(() => ({
	maxWidth: "100%",
	height: "auto",
	position: "relative",
}));

const BoardWrapper = styled("div")(() => ({
	width: "100%",
	height: "857px",
	flexShrink: "0",
	position: "relative",
	overflow: "hidden",
	background: "#2B2E72",

	".hero-message": {
		position: "absolute",
		top: "21rem",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
}));

const HeroImageWrapper = styled("div")(({ query}) => ({
	width: "100%",
	height: "670px",
	position: "absolute",
	zIndex: "10",
	top: "490px",
	left: "50%",
	display: "flex",
	justifyContent: "center",
	alignItems: "start",
	transform: "translate(-50%, 0%)",

	".ticketImage": {
		width: query ? "90%" : "80%",
		position: "relative",
		display: "flex",
	},

	".heroImage": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		position: "relative",
		zIndex: "20",
		filter: "drop-shadow(4px 8px 20px rgba(76, 111, 255, 0.16))",
	},
}));

const HeroBoard = () => {
	let query = useMediaQuery("(max-width: 1200px)");

	return (
		<BoardParentWrapper>
			<BoardWrapper>
				<NavLinks />
				<Circle></Circle>
				<Circle width="1600px" height="1600px" top="945px"></Circle>
				<Circle width="1000px" height="1000px" top="945px"></Circle>
				<DecorCircle left="-370px" top="150px" />
				<DecorCircle right="-300px" top="650px" />
				<DecorCircle right="-300px" top="950px" color="rgba(76, 111, 255, 0.12)" zIndex="100" />
				<div className="hero-message">
					<HeroMessage />
				</div>
			</BoardWrapper>
			<HeroImageWrapper query2={query}>
				<div className="ticketImage">
					<img className="heroImage" src={HeroImage} alt="Hero-Banner-Image" />
				</div>
			</HeroImageWrapper>
		</BoardParentWrapper>
	);
};

export default HeroBoard;
