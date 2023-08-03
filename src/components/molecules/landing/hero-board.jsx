import { styled } from "@mui/material";
import NavLinks from "./navlinks";
import Circle from "../../atoms/landing/circle";
import HeroMessage from "./hero-message";
import HeroImage from "../../../assets/password/heroImage.png";
import OrnamentImage from "../../../assets/password/Ornament.png";
import DecorCircle from "../../atoms/landing/decorCircle";

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

const HeroImageWrapper = styled("div")(() => ({
	width: "1224px",
	height: "749px",
	margin: "auto",
	position: "absolute",
	top: "510px",
	left: "50%",
	transform: "translate(-50%, 0%)",

	".heroImage": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		position: "absolute",
		zIndex: "20",
		filter: "drop-shadow(4px 8px 20px rgba(76, 111, 255, 0.16))"
	},

	".one, .two": {
		position: "absolute",
		zIndex: "1",
	},

	".one": {
		bottom: "340px",
		left: "18px",
	},

	".two": {
		top: "-25px",
		right: "50px",
	},
}));

const HeroBoard = () => {
	return (
		<>
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
			<HeroImageWrapper className="hero-image">
				<img className="one" src={OrnamentImage} alt="dots" />
				<img className="heroImage" src={HeroImage} alt="Hero-Banner-Image" />
				<img className="two" src={OrnamentImage} alt="dots" />
			</HeroImageWrapper>
		</>
	);
};

export default HeroBoard;
