import { styled } from "@mui/material";
import CustomLogo from "../../atoms/Password/customLogo";
import Links from "./links";
import NavigateButtons from "./buttons";


const NavWrapper = styled("div")(() => ({
	width: "90%",
	height: "40px",
	position: "relative",
	zIndex: "10",
	top: "30px",
	display: "flex",
	justifyContent: "space-between",
	margin: "auto",

  ".butLink": {
    justifyContent: "flex-end",
    display: 'flex',
	position: "relative",
	zIndex: "200",
  }
}));

const NavLinks = () => {
	return (
		<NavWrapper>
			<CustomLogo color="#ffffff" style={{ top: "0", left: "25px" }} />
			<div className="butLink">
				<Links />
				<NavigateButtons />
			</div>
		</NavWrapper>
	);
};

export default NavLinks;
