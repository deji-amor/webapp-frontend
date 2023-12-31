import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const SearchIcon = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11 2C15.9706 2 20 6.02944 20 11C20 13.1248 19.2637 15.0776 18.0323 16.6172L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3466 22.0676 20.7794 22.0953 20.3871 21.7903L20.2929 21.7071L16.6172 18.0323C15.0776 19.2637 13.1248 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2ZM11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z"
			fill="#898989"
		/>
	</svg>
);

const SearchInput = ({ className, placeholder, value, onChange, onFocus, onBlur }) => {
	return (
		<span className="relative">
			<input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onFocus={onFocus}
				onBlur={onBlur}
				placeholder={placeholder || ""}
				className={twMerge(
					`w-[29.4375rem] px-4 py-3 rounded-lg outline-none focus:ring-2 ring-offset-0 focus:ring-[#2B2E72] transition duration-300 ease-in-out font-poppins text-[#706E6E] ${className}`
				)}
			/>
			<SearchIcon className="absolute top-1/2 -translate-y-1/2 right-4" />
		</span>
	);
};

SearchInput.propTypes = {
	className: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func
};

SearchIcon.propTypes = {
	className: PropTypes.string,
};

export default SearchInput;
