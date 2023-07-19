import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const ModalWrapper = ({ children }) => {
	const Wrapper = styled("div")`
		display: flex;
		width: 25.9375rem;
		padding: 1.5rem;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		border-radius: 0.75rem;
		background: #fff;
		box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08);
		z-index: 60;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	`;

	return <Wrapper className="">{children}</Wrapper>;
};

ModalWrapper.propTypes = {
	children: PropTypes.node,
};

const t = (
	<div className="fixed top-0 left-0 right-0 translate-y-[50%] z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"></div>
);

export default ModalWrapper;
