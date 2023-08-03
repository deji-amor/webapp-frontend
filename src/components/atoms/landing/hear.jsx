import { styled } from "@mui/material";
import PropTypes from "prop-types";

const HeadingWrapper = styled("div")(({ width }) => ({
	width: "400px",
	height: "240px",
	display: "flex",
	flexDirection: "column",
	gap: "25px",
	padding: "40px 20px",
	borderRadius: "8px",
	background: "#FEFEFE",
	boxShadow: "4px 32px 116px -16px rgba(211, 211, 211, 0.42)",

	".user": {
		display: "flex",
		alignItems: "center",
		gap: "20px",
	},

	".user img": {
		width: "40px",
		height: "40px",
		objectFit: "cover",
	},

	p: {
		color: "#4F4F4F",
		fontFamily: "Poppins",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "120%",
		letterSpacing: "0.08px",
	},

  ".name h4": {
    color: "#2B2E72",
		fontFamily: "Poppins",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: "120%",
		letterSpacing: "0.08px",
  },

  ".name p": {
    color: "#010101",
		fontFamily: "Poppins",
		fontSize: "14px",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: "130%",
		letterSpacing: "0.112px",
  }
}));

const Hear = ({ description, img, name, position }) => {
	return (
		<HeadingWrapper>
			<p>{description}</p>
			<div className="user">
				<img src={img} alt="Icon" />
				<div className="name">
					<h4>{name}</h4>
					<p>{position}</p>
				</div>
			</div>
		</HeadingWrapper>
	);
};

Hear.propTypes = {
	description: PropTypes.string,
	img: PropTypes.element,
	name: PropTypes.string,
	position: PropTypes.string,
};

export default Hear;
