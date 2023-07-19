import React from "react";
import { Container } from "@mui/material";
import RegisterForm from "../organisms/SuperAdmin/RegisterForm";
import Navbar from "../organisms/SuperAdmin/Navbar";

const SuperAdminOnboarding = () => {
	return (
		<div>
			<Navbar />
			<Container maxWidth="md">
				<RegisterForm />
			</Container>
		</div>
	);
};

export default SuperAdminOnboarding;
