import React from 'react'
import CustomerSide from '../molecules/Login/CustomerSide'
import CustomerFormComponent from '../molecules/Login/CustomerFormComponent'
import CustomerLoginToastContainer from '../molecules/Login/CustomerLoginToastContainer'
import Logo from '../atoms/Login/Logo'

const LoginCustomer = () => {
  return (
		<div className="min-h-screen h-screen">
			<CustomerLoginToastContainer />
			<div className="px-[3rem] py-[0.5rem] mb-[1.5rem] lg:hidden">
				<Logo />
			</div>
			<div className="flex h-full">
				<div className="h-full hidden lg:block lg:basis-[40%]">
					<CustomerSide />
				</div>
				<div className="basis-[100%] lg:basis-[60%] w-full h-full flex items-center justify-center">
					<CustomerFormComponent />
				</div>
			</div>
		</div>
	);
}

export default LoginCustomer