import React from 'react'
import NavBarIconList from '../Dashboard/NavBarIconList';
import { styled } from "@mui/material";
import { useSelector } from "react-redux";

const CustomerNavbar = () => {
    const NavigationBar = styled("div")`
			padding: 1.125rem 2.5rem;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-shadow: 0 2px 2px rgb(0 0 0 / 0.2);
			z-index: 10;

			.search {
				position: relative;
				flex-basis: 20rem /* 320px */;
			}
		`;

	const CompanyName = styled("h1")`
		color: #2b2e72;
		font-family: "Poppins", sans-serif;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.5rem;
	`;

		const { workspaceName } = useSelector((state) => state.authUser.data);

	return (
		<NavigationBar>
			<CompanyName>{workspaceName}</CompanyName>
			<NavBarIconList />
		</NavigationBar>
	);
}

export default CustomerNavbar