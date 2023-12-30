import React from 'react'
import PropTypes from 'prop-types'
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const heading = cva(["text-[#2B2E72]", "not-italic", "leading-[normal]"], {
	variants: {
		intent: {
			primary: [],
			secondary: [],
		},
		size: {
			sm: ["text-xl", "font-medium"],
			md: ["text-xl", "font-medium"],
			lg: ["text-2xl", "font-semibold"],
		},
	},
	compoundVariants: [],
	defaultVariants: {},
});

const TicketHeading = ({children}) => {
  return (
    <h1>{children}</h1>
  )
}

TicketHeading.propTypes = {
  children: PropTypes.node
}

export default TicketHeading