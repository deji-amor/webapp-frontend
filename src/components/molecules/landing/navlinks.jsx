import { styled, useMediaQuery } from "@mui/material";
import CustomLogo from "../../atoms/Password/customLogo";
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
    display: 'flex',
	gap: "25px",
	position: "relative",
	zIndex: "200",
  }
}));

const NavLinks = () => {
	const matches = useMediaQuery('(max-width: 1250px)');

	return (
		<NavWrapper>
			<CustomLogo color="#ffffff" style={{ top: "0", left: `${matches ? "-20px" : "25px"}` }} />
			<div className="butLink">
				<Links />
				<NavigateButtons />
			</div>
		</NavWrapper>
	);
};

export default NavLinks;
