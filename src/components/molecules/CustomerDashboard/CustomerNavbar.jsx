import React from 'react'
import NavBarSearch from "../../atoms/Dashboard/NavBarSearch";
import NavBarIconList from '../Dashboard/NavBarIconList';
import { styled } from "@mui/material";

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

	return (
		<NavigationBar>
			<NavBarSearch />
			<NavBarIconList />
		</NavigationBar>
	);
}

export default CustomerNavbar