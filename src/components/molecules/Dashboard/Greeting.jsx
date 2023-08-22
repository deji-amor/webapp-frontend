import React from "react";
import HeadingEmail from "../../atoms/Dashboard/HeadingEmail";
import HeadingGreeting from "../../atoms/Dashboard/HeadingGreeting";
import { useSelector } from "react-redux";

const Greeting = () => {
	const {firstName} = useSelector((state) => state.authUser.data);

	return (
		<div className="" style={{marginTop: "40px"}}>
			<HeadingGreeting>Hi</HeadingGreeting> <HeadingEmail>{firstName},</HeadingEmail>
		</div>
	);
};

export default Greeting;
