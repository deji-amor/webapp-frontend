import React from "react";
import HeadingEmail from "../../atoms/Dashboard/HeadingEmail";
import { styled } from "@mui/material";

const RecentTickets = () => {
	const Wrapper = styled("div")`
		border-radius: 0.75rem;
		background: #fefefe;
		padding: 0.8rem;
	`;
	return (
		<Wrapper>
			<div className="mb-[1.2rem]">
				<HeadingEmail>Recent Tickets</HeadingEmail>
			</div>
		</Wrapper>
	);
};

export default RecentTickets;
