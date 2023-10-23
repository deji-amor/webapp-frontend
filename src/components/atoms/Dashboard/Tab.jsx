import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const Tab = ({ children }) => {
	const Tablet = styled("div")`
		border-radius: 0.5rem;
		background: #fff;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
		color: #000;
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.25rem; /* 142.857% */
		letter-spacing: 0.00938rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	`;

	return (
		<Tablet>
			<span className="">{children}</span>
			<span onClick={() => {}} className="">
				<CloseOutlinedIcon style={{ fontSize: 16 }} className="text-black cursor-pointer" />
			</span>
		</Tablet>
	);
};

Tab.propTypes = {
	children: PropTypes.node,
};

export default Tab;
