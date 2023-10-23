import React from "react";
import NavBarIconList from "./NavBarIconList";
import { styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { UIActions } from "../../../state-manager/reducers/UI/ui";

const HamburgerMenu = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
		<path
			d="M1.66768 3.33366H20.3344C21.1344 3.33366 21.6677 2.80033 21.6677 2.00033C21.6677 1.20033 21.1344 0.666992 20.3344 0.666992H1.66768C0.867684 0.666992 0.334351 1.20033 0.334351 2.00033C0.334351 2.80033 0.867684 3.33366 1.66768 3.33366ZM1.66768 11.3337H20.3344C21.1344 11.3337 21.6677 10.8003 21.6677 10.0003C21.6677 9.20033 21.1344 8.66699 20.3344 8.66699H1.66768C0.867684 8.66699 0.334351 9.20033 0.334351 10.0003C0.334351 10.8003 0.867684 11.3337 1.66768 11.3337ZM1.66768 19.3337H20.3344C21.1344 19.3337 21.6677 18.8003 21.6677 18.0003C21.6677 17.2003 21.1344 16.667 20.3344 16.667H1.66768C0.867684 16.667 0.334351 17.2003 0.334351 18.0003C0.334351 18.8003 0.867684 19.3337 1.66768 19.3337Z"
			fill="black"
		/>
	</svg>
);

const Navbar = () => {
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

	const { workspace_name } = useSelector((state) => state.authUser.data);

	const dispatch = useDispatch()

	return (
		<NavigationBar>
			<button onClick={() => dispatch(UIActions.toggleSidebar())} className="sm:hidden" >
				<HamburgerMenu />
			</button>
			<CompanyName className="hidden sm:inline-block">{workspace_name}</CompanyName>
			<NavBarIconList />
		</NavigationBar>
	);
};

export default Navbar;
