import { styled, useMediaQuery } from "@mui/material";
import "./board.css";
import NavLinks from "./navlinks";
import Circle from "../../atoms/landing/circle";
import HeroMessage from "./hero-message";
import HeroImage from "../../../assets/password/tickets.webp";
import SideImg from "../../../assets/password/side-img.webp";
import DecorCircle from "../../atoms/landing/decorCircle";
import Slide from "./slide";

const BoardParentWrapper = styled("div")(() => ({
	width: "100%",
	height: "auto",
	position: "relative",
}));

const BoardWrapper = styled("div")(({query}) => ({
	width: "100%",
	height: "857px",
	flexShrink: "0",
	position: "relative",
	overflow: "hidden",
	background: "#2B2E72",

	".hero-message": {
		width: query ? "500px" : "100%",
		position: "absolute",
		top: "21rem",
		left: "50%",
		zIndex: "15",
		transform: "translate(-50%, -50%)",
	},
}));

const HeroImageWrapper = styled("div")(({ query1, query2 }) => ({
	width: "90%",
	height: "700px",
	position: "absolute",
	zIndex: "10",
	top: query1 ? "410px" : "390px",
	left: "50%",
	paddingTop: "70px",
	transform: "translate(-50%, 0%)",

	".inner-container": {
		width: "100%",
		height: "100%",
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "start",
	},

	".ticketImage": {
		width: query2 ? "100%" : "90%",
		position: "relative",
		top: query2 ? "10px" : "",
	},

	".heroImage": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		position: "relative",
		zIndex: "20",
		filter: "drop-shadow(4px 8px 20px rgba(76, 111, 255, 0.16))",
	},

	".absolute-slide": {
		position: "absolute",
		top: "400px",
		right: "-50px",
		zIndex: "21",
		display: "flex",
		justifyContent: "flex-end",
	},

	".image-container": {
		width: query1 ? "350px" : "100%",
		height: query1 ? "350px" : "100%",
		position: "relative",
	},

	".image-container .side": {
		width: "100%",
		height: "100%",
		objectFit: "contain",
	},
}));

const HeroBoard = () => {
	let query = useMediaQuery("(max-width: 1200px)");
	let query1 = useMediaQuery("(max-width: 950px)");
	let query2 = useMediaQuery("(max-width: 850px)");

	return (
		<BoardParentWrapper>
			<BoardWrapper query={query2}>
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
			<HeroImageWrapper query={query} query1={query1} query2={query2}>
				<div className="inner-container">
					<div className="ticketImage">
						<img className="heroImage" src={HeroImage} alt="Hero-Banner-Image" />
					</div>
					<Slide y_axis_start={100} y_axis_end={query1 ? -250 : -200}>
						<div className="image-container">
							<img className="side" src={SideImg} alt="Side-Image" />
						</div>
					</Slide>
				</div>
			</HeroImageWrapper>
		</BoardParentWrapper>
	);
};

export default HeroBoard;
