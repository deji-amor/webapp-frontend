import React from "react";
import CustomerSide from "../components/molecules/Login/CustomerSide";
import CustomerFormComponent from "../components/molecules/Login/CustomerFormComponent";
import CustomerLoginToastContainer from "../components/molecules/Login/CustomerLoginToastContainer";
import CustomerBanner from "../components/molecules/Password/customerpasswordbanner";
import CustomLogo from "../components/atoms/Password/customLogo";
import Logo from "../components/atoms/Login/Logo";

const LoginCustomer = () => {
	return (
		<div className="min-h-screen h-screen">
			<CustomerLoginToastContainer />
			<CustomLogo color="#E9E5E5" />
			<div className="flex h-full">
				<CustomerBanner
					title="Streamlined IT Service Management."
					description="Our robust solution is built and optimized specifically for IT teams and workflows,
					influenced by feedback, and centred around end-user and endpoint support.."
				/>
				<div className="basis-[100%] lg:basis-[65%] w-full h-full flex items-center justify-center">
					<CustomerFormComponent />
				</div>
			</div>
		</div>
	);
};

export default LoginCustomer;
