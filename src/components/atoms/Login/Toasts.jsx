import React, { useEffect, useRef} from "react";
import PropTypes from "prop-types";
import ErrorIcon from "@mui/icons-material/Error";
import { styled } from "@mui/material";

const Toasts = ({ children, onClose, message, title}) => {
	const Container = styled("div")`
		display: flex;
		width: 22.625rem;
		padding: 0.75rem 1rem;
		justify-content: start;
		align-items: center;
		gap: 0.75rem;
		border-radius: 0.5rem;
		background: rgba(238, 6, 6, 0.1);
		z-index: 110;
		.error-icon {
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
		}, 10000);

		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<Container className="">
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
