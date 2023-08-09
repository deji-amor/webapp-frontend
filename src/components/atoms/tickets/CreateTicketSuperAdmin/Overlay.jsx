import React from 'react'
import PropTypes from 'prop-types'
import { styled } from "@mui/material";

const Overlay = ({onClick}) => {
	const OverlayWrapper = styled("div")`
		opacity: 0.800000011920929;
		background: #4f4f4f;
		backdrop-filter: blur(13.5px);
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100vw;
		height: 100vh;
		z-index: 50;
	`;

	return <OverlayWrapper onClick={onClick}></OverlayWrapper>;
}

Overlay.propTypes = {
  onClick: PropTypes.func
}

export default Overlay