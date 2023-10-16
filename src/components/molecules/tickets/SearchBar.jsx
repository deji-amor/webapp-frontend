import React from 'react'
import PropTypes from "prop-types";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBar = ({value, onChange, inverted, placeholder}) => {

	return (
		<div className="relative">
			<div className="">
				<input
					value={value}
					placeholder={placeholder}
					onChange={(e) => onChange(e.target.value)}
					type="text"
					className={`${
						inverted ? "bg-[#EEE]" : "bg-white"
					} border focus:outline-[#2b2e72] focus:outline-offset-0 border-gray-300 block w-full outline-none text-[#706e6e] text-base not-italic font-medium leading-5 tracking-[0.00938rem] p-2.5 rounded-lg`}
				/>
			</div>
			<div className="absolute flex items-center pr-4 right-0 inset-y-0">
				<SearchOutlinedIcon/>
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