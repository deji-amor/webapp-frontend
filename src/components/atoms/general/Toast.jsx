import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material";

const Container = styled("div")`
	display: flex;
	width: 22.625rem;
	padding: 0.75rem 1rem;
	justify-content: start;
	align-items: center;
	gap: 0.75rem;
	border-radius: 0.5rem;
	background: ${({ type }) => (type === "successful" ? "#D3DED4" : "rgb(254 226 226)")};
	margin-bottom: 5px;
	z-index: 110;
	.error-icon {
		width: 1.5rem;
		height: 1.5rem;
		flex-shrink: 0;
	}

	.title {
		color: ${({ type }) => (type === "successful" ? "#04850D" : "#D73D3D")};
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 700;
		line-height: 1.5rem; /* 150% */
	}

	.message {
		color: ${({ type }) => (type === "successful" ? "#04850D" : "#D73D3D")};
		font-family: "Poppins", sans-serif;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 500;
		line-height: 0.75rem; /* 100% */
	}
`;

const Toasts = ({ onClose, message, title, type, className }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, 10000);

		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<Container className={className} type={type}>
			{type === "successful" ? (
				<CheckCircleIcon className="text-[#04850D]" />
			) : (
				<ErrorIcon className="text-[#D73D3D]" />
			)}
			<div className="border-none">
				<p className="title">{title}</p>
				<p className="message">{message}</p>
			</div>
		</Container>
	);
};

Toasts.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func,
	message: PropTypes.string,
	title: PropTypes.string,
  type: PropTypes.string,
	className: PropTypes.string
};

export default Toasts;
