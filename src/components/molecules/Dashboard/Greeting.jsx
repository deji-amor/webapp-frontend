import React from "react";
import HeadingEmail from "../../atoms/Dashboard/HeadingEmail";
import HeadingGreeting from "../../atoms/Dashboard/HeadingGreeting";
import { useSelector } from "react-redux";

const Greeting = () => {
	const {email} = useSelector((state) => state.authUser.data);

	return (
		<div className="">
			<HeadingGreeting>Hi</HeadingGreeting> <HeadingEmail>{email}</HeadingEmail>
		</div>
	);
};

export default Greeting;
