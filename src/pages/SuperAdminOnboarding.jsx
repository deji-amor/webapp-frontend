import React from "react";
import { Container } from "@mui/material";
import RegisterForm from "../components/organisms/SuperAdmin/RegisterForm";
// import CustomLogo from "../components/atoms/Password/customLogo";
import Logo from "../components/atoms/Login/Logo";

const SuperAdminOnboarding = () => {
	return (
		<>
			<Logo className=""/>
			<Container maxWidth="md">
				<RegisterForm />
			</Container>
		</>
	);
};

export default SuperAdminOnboarding;
