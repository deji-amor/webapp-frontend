import React from "react";
import HeadName from "../../atoms/CustomerDashboard/HeadName";
import HeadGreeting from "../../atoms/CustomerDashboard/HeadGreeting";
import { useSelector } from "react-redux";

const Greeting = () => {
	const {firstName} = useSelector((state) => state.authUser.data);

	return (
		<div className="" style={{marginTop: '40px'}}>
			<HeadGreeting>Hi</HeadGreeting> <HeadName>{firstName},</HeadName>
		</div>
	);
};

export default Greeting;
