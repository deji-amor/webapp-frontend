import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import Logo from "../../atoms/SuperAdmin/logo";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	color: "#000",
	backgroundColor: "#fff",
});

const Navbar = () => {
	return (
		<AppBar position="sticky" elevation={0}>
			<StyledToolbar>
				<Logo />
			</StyledToolbar>
		</AppBar>
	);
};

export default Navbar;
