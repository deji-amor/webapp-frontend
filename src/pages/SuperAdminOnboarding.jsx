import React from "react";
import { Container } from "@mui/material";
import RegisterForm from "../components/organisms/SuperAdmin/RegisterForm";
import Navbar from "../components/organisms/SuperAdmin/Navbar";
import CustomLogo from "../components/atoms/Password/customLogo";

const SuperAdminOnboarding = () => {
	return (
		<>
			<CustomLogo />
			<Container maxWidth="md">
				<RegisterForm />
			</Container>
		</>
	);
};

export default SuperAdminOnboarding;
