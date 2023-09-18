import React from "react";
import HeadingEmail from "../../atoms/Dashboard/HeadingEmail";
import HeadingGreeting from "../../atoms/Dashboard/HeadingGreeting";
import { useSelector } from "react-redux";

const Greeting = () => {
	const {first_name} = useSelector((state) => state.authUser.data);

	return (
		<div className="" style={{marginTop: "40px"}}>
			<HeadingGreeting>Hi</HeadingGreeting> <HeadingEmail>{first_name},</HeadingEmail>
		</div>
	);
};

export default Greeting;
