import React from "react";
import { cva} from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const button = cva("bg-teal-500", {
	variants: {
		intent: {
			primary: ["bg-blue-500", "text-white", "border-transparent", "hover:bg-blue-600"],
			secondary: ["bg-purple-300", "text-gray-800", "border-gray-400", "hover:bg-gray-100"],
		},
		size: {
			small: ["text-sm", "py-1", "px-2"],
			medium: ["text-base", "py-2", "px-4"],
		},
	},
	compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
	defaultVariants: {
		intent: "primary",
		size: "medium",
	},
});


const Button = ({ className, intent, size, ...props }) => (
	<button className={twMerge(button({ intent, size, className }))} {...props} />
);

export default Button

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  intent: PropTypes.oneOf(['primary', 'secondary']),
};