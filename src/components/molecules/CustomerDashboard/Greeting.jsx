import React from "react";
import HeadName from "../../atoms/CustomerDashboard/HeadName";
import HeadGreeting from "../../atoms/CustomerDashboard/HeadGreeting";
import { useSelector } from "react-redux";

const Greeting = () => {
	const {first_name} = useSelector((state) => state.authUser.data);

	return (
		<div className="" style={{marginTop: '40px'}}>
			<HeadGreeting>Hi</HeadGreeting> <HeadName>{first_name},</HeadName>
		</div>
	);
};

export default Greeting;
