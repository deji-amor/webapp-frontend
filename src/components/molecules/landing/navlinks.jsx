import { useState } from "react";
import { styled, useMediaQuery } from "@mui/material";
import CustomLogo from "../../atoms/Password/customLogo";
import MobileLink from "../../atoms/landing/mobileLink";
import MenuIcon from "@mui/icons-material/Menu";
import Links from "./links";
import NavigateButtons from "./buttons";

const NavWrapper = styled("div")(() => ({
	maxWidth: "90%",
	height: "40px",
	position: "relative",
	zIndex: "10",
	top: "30px",
	display: "flex",
	gap: "20px",
	justifyContent: "space-between",
	margin: "auto",

	".butLink": {
		justifyContent: "flex-end",
		display: "flex",
		gap: "25px",
		position: "relative",
		zIndex: "200",
	},

	".ham": {
		color: "#ffffff",
		width: "40px",
		height: "40px",
		position: "absolute",
		right: "0",
	},

	".menu": {
		width: "230px",
		borderRadius: "10px",
		position: "relative",
		top: "50px",
		background: "#ffffff",
	},
}));

const NavLinks = () => {
	const matches = useMediaQuery("(max-width: 1200px)");
	const [isOpen, setIsOpen] = useState(false);

	return (
		<NavWrapper>
			<CustomLogo color="#ffffff" style={{ top: "0", left: `${matches ? "-20px" : "25px"}` }} />
			<div className="butLink">
				{!matches ? (
					<>
						<Links />
						<NavigateButtons />
					</>
				) : (
					<div>
						<MenuIcon onClick={() => setIsOpen((prev) => !prev)} className="ham" />
						{isOpen ? (
							<div className="menu">
								<MobileLink />
							</div>
						) : (
							""
						)}
					</div>
				)}
			</div>
		</NavWrapper>
	);
};

export default NavLinks;
