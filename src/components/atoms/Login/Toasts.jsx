import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ErrorIcon from "@mui/icons-material/Error";
import { styled } from "@mui/material";

const Toasts = ({ children, onClose, message, title }) => {
	const Container = styled("div")`
		display: flex;
		max-width: 20rem;
		padding: 0.75rem 1rem;
		justify-content: center;
		align-items: center;
		gap: 0.2rem;
		border-radius: 0.5rem;
		background: rgba(238, 6, 6, 0.1);
		position: fixed;
		top: 1.25rem;
		right: 1.25rem .error-icon {
			width: 1.5rem;
			height: 1.5rem;
			flex-shrink: 0;
		}

		.error-title {
			color: #d73d3d;
			font-family: "Poppins", sans-serif;
			font-size: 1rem;
			font-style: normal;
			font-weight: 700;
			line-height: 1.5rem; /* 150% */
		}

		.error-message {
			color: rgba(215, 61, 61, 0.5);
			font-family: "Poppins", sans-serif;
			font-size: 0.75rem;
			font-style: normal;
			font-weight: 500;
			line-height: 0.75rem; /* 100% */
		}
	`;

	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, 5000);

		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<Container className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 right-5">
			<ErrorIcon className="error-icon text-[#D73D3D]" />
			<div className="border-none">
				<p className="error-title">{title}</p>
				<p className="error-message">{message}</p>
			</div>
		</Container>
	);
};

Toasts.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func,
	message: PropTypes.string,
	title: PropTypes.string,
};

export default Toasts;
