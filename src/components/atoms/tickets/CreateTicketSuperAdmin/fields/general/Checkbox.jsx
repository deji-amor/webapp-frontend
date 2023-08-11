import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ onChange, isActive, children }) => {

	return (
		<div className="flex items-center gap-[0.75rem]">
			<input
				type="checkbox"
				checked={isActive}
				className="w-[1.25rem] h-[1.25rem] p-[0.1875rem] rounded-[0.375rem] accent-[#2b2e72] cursor-pointer"
				onChange={() => onChange(children)}
			/>
			<label className="text-[#2b2e72] text-[0.875rem] font-[500] capitalize leading-[1.5rem]">
				{children}
			</label>
		</div>
	);
};

Checkbox.propTypes = {
	onChange: PropTypes.func,
	isActive: PropTypes.bool,
	children: PropTypes.node,
};

export default Checkbox;
