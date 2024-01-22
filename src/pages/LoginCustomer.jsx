import React from "react";
import CustomLogo from "../components/atoms/Password/customLogo";
import CustomerFormComponent from "../components/molecules/Login/CustomerFormComponent";
import CustomerLoginToastContainer from "../components/molecules/Login/CustomerLoginToastContainer";
import CustomerBanner from "../components/molecules/Password/customerpasswordbanner";

const LoginCustomer = () => {

	return (
		<div className="min-h-screen h-screen" style={{position: "relative"}}>
			<CustomerLoginToastContainer />
			<CustomLogo color="#ffffff" style={{left: "35px", zIndex: "60"}} />
			<div className="flex h-full">
				<CustomerBanner
					title="Streamlined IT Field Management."
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
