import { styled, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MobileLinkWrapper = styled("div")(() => ({
	".mobileL": {
		display: "flex",
		flexDirection: "column",
        padding: "10px 10px",
		gap: "10px",
	},

	button: {
		color: "#2B2E72",
		height: "40px",
		borderRadius: "8px",
		cursor: "pointer",
		position: "relative",
		zIndex: "20",
	},

    ".but": {
        margin: "0 auto",
    },

    ".li": {
        textAlign: "left",
        width: "100%",
        padding: "0 10px",
		borderRadius: "8px",
    },

    ".li:hover": {
        color: "#ffffff",
        background: "#2B2E72",
    },

	".try": {
		width: "142px",
        color: "#ffffff",
        background: "linear-gradient(180deg, #9265E5 0%, #412D66 100%)",
	},

	".login": {
		width: "96px",
		border: "2px solid #2B2E72",
	},
}));

const MobileLink = () => {
	return (
		<MobileLinkWrapper>
			<ul className="mobileL">
				<li className="li">
					<NavLink>Home</NavLink>
				</li>
				<li className="serv li">
					<ChevronLeftIcon />
					<NavLink>Products</NavLink>
				</li>
				<li className="sol li">
					<ChevronLeftIcon />
					<NavLink>Solutions</NavLink>
				</li>
				<li className="li">
					<NavLink>Pricing</NavLink>
				</li>
				<li className="li">
					<NavLink>Contact</NavLink>
				</li>
                <hr />
				<li className="but">
					<NavLink to="/super-admin-onboarding">
						<button className="try">Try For Free</button>
					</NavLink>
				</li>
				<li className="but">
					<NavLink to="/login-admin">
						<button className="login">Log In</button>
					</NavLink>
				</li>
			</ul>
		</MobileLinkWrapper>
	);
};

export default MobileLink;
