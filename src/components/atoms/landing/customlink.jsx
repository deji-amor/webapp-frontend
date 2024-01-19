import { styled, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-scroll";


const LinkWrapper = styled("li")(({matches}) => ({
	position: 'relative',
	zIndex: "10",

	".title": {
		fontFamily: "Poppins",
		fontSize: matches ? "14px" : "16px",
		fontStyle: "normal",
		lineHeight: "120%",
		letterSpacing: "1px",
		color: "#fff",
		cursor: "pointer"
	},

	".dropdown": {
		width: "240px",
		background: "#fff",
		position: "absolute",
		borderRadius: "10px",
		display: "flex",
		flexDirection: "column",
		gap: "5px",
		padding: '10px',
		color: "#2B2E72",
		transition: "all 10s ease"
	},

	".dropdown.service": {
		left: '-145%',
	},

	".dropdown div": {
		cursor: "pointer",
		padding: "5px"
	},

	".dropdown div:hover": {
		background: "#2B2E72",
		color: "#fff",
		borderRadius: "5px",
	},

	".dropdown div h5": {
		fontSize: '14px',
		fontWeight: '600'
	},

	".dropdown div p": {
		fontSize: "12px"
	}
}));

const CustomLink = ({ text, type, link, onClickValue, name, dropDownValues }) => {
	const [isToggle, setIsToggle] = useState(false);
	const matches = useMediaQuery('(max-width: 1250px)');

	return (
		<LinkWrapper matches={matches}>
			{type != "dropdown" ? (
				<Link className="link title" spy={true} smooth={true} offset={-200} duration={2000} to={link}>
					{text}
				</Link>
			) : (
				<div style={{cursor: "pointer"}} onClick={() => setIsToggle(prev => !prev)}>
					<span style={{color: '#FEFEFE'}}>{text}</span>
				{
					type === "dropdown" && (<ExpandMoreIcon style={{ color: "white", marginLeft: "10px", opacity: ".7" }} />)
				}
				</div>
			)}
			{(name === 'services') && (type === "dropdown" && isToggle) && (
				<div className="dropdown service">
					{dropDownValues.map((item) => (
						<div key={item.id}>
							<NavLink to="/">
								<h5>{item.title}</h5>
								<p>{item.des}</p>
							</NavLink>
						</div>
					))}
				</div>
			)}
			{(name === 'solutions') && (type === 'dropdown' && isToggle) && (
				(type === "dropdown" && isToggle) && (
					<div className={isToggle ? "dropdown solution" : ""}>
						{dropDownValues.map((item) => (
							<div key={item.id}>
								<NavLink to="/">
									<h5>{item.title}</h5>
									<p>{item.des}</p>
								</NavLink>
							</div>
						))}
					</div>
				)
			)}
		</LinkWrapper>
	);
};

CustomLink.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	link: PropTypes.string,
	onClickValue: PropTypes.bool,
	dropDownValues: PropTypes.array,
};

export default CustomLink;
