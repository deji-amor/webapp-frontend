import React from 'react'
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Search = styled("div")`
	position: relative;
	flex-basis: 20rem /* 320px */;

	input {
		background-color: #fff;
		border-radius: 0.5rem;
		border-width: 1px;
		// border-color: rgb(209, 213, 219);
		font-size: 1.25rem /* 20px */;
		display: block;
		width: 100%;
		padding: 0.625rem /* 10px */;
		outline: 2px solid transparent;
		outline-offset: 2px;
		color: #706e6e;
		font-family: Poppins;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.25rem; /* 125% */
		letter-spacing: 0.00938rem;
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

const SearchBar = ({value, onChange, inverted, placeholder}) => {

	return (
		<div className="relative">
			<div className=''>
				<input
					value={value}
					placeholder={placeholder}
					onChange={(e) => onChange(e.target.value)}
					type="text"
					className={`${
						inverted ? "bg-[#EEE]" : "bg-white"
					} border border-gray-300 block w-full outline-none outline-offset-2 text-[#706e6e] text-base not-italic font-medium leading-5 tracking-[0.00938rem] p-2.5 rounded-lg`}
				/>
			</div>
			<div className="absolute flex items-center pr-4 right-0 inset-y-0">
				<SearchOutlinedIcon />
			</div>
		</div>
	);
}

SearchBar.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	inverted: PropTypes.bool,
	placeholder: PropTypes.string,
}

export default SearchBar