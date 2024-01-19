import React from "react";
import { Container } from "@mui/material";
import RegisterForm from "../components/organisms/SuperAdmin/RegisterForm";
import Logo from "../components/atoms/Login/Logo";

const SuperAdminOnboarding = () => {
	return (
		<>
			<Logo className="absolute top-[1.5rem] left-[1.5rem]"/>
			<Container maxWidth="md">
				<RegisterForm />
			</Container>
		</>
	);
};

export default SuperAdminOnboarding;
