import { styled } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { Link as NLink } from "react-router-dom"

const FooterItemWrapper = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	gap: "25px",

	h5: {
		color: "#4C6FFF",
		fontFamily: "Poppins",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: "120%",
		letterSpacing: "0.8px",
		textTransform: "uppercase",
	},

	".items": {
		display: "flex",
		flexDirection: "column",
		gap: "15px",
	},

	p: {
		color: "#fff",
		fontFamily: "Poppins",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "400",
		lineHeight: "125%",
		letterSpacing: "0.08px",
	},
}));

const FooterItem = ({ title, items, to, type }) => {
	return (
		<FooterItemWrapper>
			<h5>{title}</h5>
			<div className="items">
				{type !== "navigate" && items.map((item) => (
					<Link key={item.title} className="link" to={to} spy={true} smooth={true} offset={-200} duration={2000} >
						{item.title}
					</Link>
				))}
				{
					type === "navigate" && items.map(item => (
						<NLink key={item.title} className="link" to={item.link}>
							{item.title}
						</NLink>
					))
				}
			</div>
		</FooterItemWrapper>
	);
};

FooterItem.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array,
	to: PropTypes.string,
	type: PropTypes.string
};

export default FooterItem;
