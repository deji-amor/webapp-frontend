import React from "react";
import { styled } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const NavBarSearch = (props) => {
	const Search = styled("div")`
		position: relative;
		flex-basis: 20rem /* 320px */;

		input {
			background-color: #d7d7d7;
			border-radius: 0.75rem /* 12px */;
			border-width: 1px;
			border-color: rgb(209, 213, 219);
			color: #64748b;
			font-family: "Open-Sans", sans-serif;
			font-size: 1.25rem /* 20px */;
			display: block;
			width: 100%;
			padding: 0.625rem /* 10px */;
			outline: 2px solid transparent;
			outline-offset: 2px;
		}

		button {
			position: absolute;
			top: 0px;
			bottom: 0px;
			right: 0px;
			display: flex;
			align-items: center;
			padding-right: 1rem /* 16px */;
		}
	`;

	return (
		<Search className="">
			<input type="text" className="" placeholder="Search" />
			<button type="button" className="">
				<SearchOutlinedIcon />
			</button>
		</Search>
	);
};

NavBarSearch.propTypes = {};

export default NavBarSearch;
