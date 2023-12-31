import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const GeneralActionBtn = ({ className, children, onClick }) => {
	return (
		<button
			className={twMerge(
				`shadow-[0px_2px_4px_0px_rgba(0,0,0,0.24)] flex justify-center items-center text-white text-base not-italic font-semibold leading-5 tracking-[0.00938rem] px-4 py-3 rounded-lg font-poppins bg-[#2B2E72] gap-[0.25rem] transition duration-300 ease-in-out transform active:scale-95 hover:bg-opacity-95 ${className}`
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

GeneralActionBtn.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export default GeneralActionBtn;
