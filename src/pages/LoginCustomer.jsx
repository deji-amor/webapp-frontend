import React from 'react'
import CustomerSide from '../components/molecules/Login/CustomerSide'
import CustomerFormComponent from '../components/molecules/Login/CustomerFormComponent'
import CustomerLoginToastContainer from '../components/molecules/Login/CustomerLoginToastContainer'
import Logo from '../components/atoms/Login/Logo'

const LoginCustomer = () => {
  return (
		<div className="min-h-screen h-screen">
			<CustomerLoginToastContainer />
			<div className="px-[3rem] py-[0.5rem] mb-[1.5rem] lg:hidden">
				<Logo />
			</div>
			<div className="flex h-full">
				<div className="h-full hidden lg:block lg:basis-[35%]">
					<CustomerSide />
				</div>
				<div className="basis-[100%] lg:basis-[65%] w-full h-full flex items-center justify-center">
					<CustomerFormComponent />
				</div>
			</div>
		</div>
	);
}

export default LoginCustomer