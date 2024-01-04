import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useNavigate, useLocation} from "react-router-dom";

const GenModal = (props) => {
  const { children, className } = props
	const navigate = useNavigate()
	const {pathname} = useLocation()

	const goBackHandler = () => {
		if (pathname.startsWith("/customer")) {
			navigate("/customer/dashboard");
		} else {
			navigate("../");
		}
	}

	return (
		<div>
			<div
				onClick={goBackHandler}
				className="bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-[1000] cursor-pointer"
			></div>
			<div
				className={twMerge(
					`fixed flex w-full max-w-[65rem] h-full max-h-[90vh] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-8 rounded-xl bg-white z-[1001] ${className}`
				)}
			>
				{children}
			</div>
		</div>
	);
};

GenModal.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default GenModal;
