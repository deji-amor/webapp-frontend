import React from 'react'
import PropTypes from 'prop-types'
import { styled } from "@mui/material";

const Modal = ({children}) => {
	const Wrapper = styled("div")`
		width: 100%;
    max-width: 74rem;
		padding: 1.5rem;
    margin: 1rem;
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
}

Modal.propTypes = {
	children: PropTypes.node,
};

export default Modal