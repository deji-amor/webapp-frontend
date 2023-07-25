import React from "react";
import { Container } from "@mui/material";
import RegisterForm from "../organisms/SuperAdmin/RegisterForm";
import Navbar from "../organisms/SuperAdmin/Navbar";
import CustomLogo from "../atoms/Password/customLogo";

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
