import { styled } from "@mui/material";
import PropTypes from "prop-types";

const FooterItemWrapper = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	gap: "25px",

	h5: {
		color: "#2B2E72",
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
		color: "#010101",
		fontFamily: "Poppins",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "400",
		lineHeight: "125%",
		letterSpacing: "0.08px",
	},
}));

const FooterItem = ({ title, items }) => {
	return (
		<FooterItemWrapper>
			<h5>{title}</h5>
			<div className="items">
				{items.map((item) => (
					<p key={item}>{item}</p>
				))}
			</div>
		</FooterItemWrapper>
	);
};

FooterItem.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array,
};

export default FooterItem;
