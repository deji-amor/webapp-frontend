import React from "react";
import HeadingEmail from "../../atoms/Dashboard/HeadingEmail";
import Button from "../../atoms/Dashboard/button";
import Tab from "../../atoms/Dashboard/Tab";
import FilterButton from "../../atoms/Dashboard/FilterButton";
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
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-[1rem]">
					<Tab>Projects</Tab>
					<Tab>Done</Tab>
					<FilterButton />
				</div>
				<div className="">
					<Button>View All Tickets</Button>
				</div>
			</div>
		</Wrapper>
	);
};

export default RecentTickets;
