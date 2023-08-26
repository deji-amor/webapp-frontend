import React, { useEffect, useId } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const DropdownWrapper = styled("div")`
	position: absolute;
	z-index: 14000 !important;
	top: 90%;
	right: 3%;
	padding: 0.5rem 0.5rem 0.75rem 0.5rem;
	flex-direction: column;
	border-radius: 0.5rem;
	background: #fff;
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
`;

const DropDownItem = styled("div")`
	color: #2b2e72;
	font-family: Poppins;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem; /* 142.857% */
	letter-spacing: 0.0175rem;
`;

const ChangeTicketStatusDropdown = ({ statuses, onClick, currentStatus, remove }) => {
	const id = `ticketStatusDropdownWrapper`;

	useEffect(() => {
		const listener = (event) => {
			if (!event.target.closest(`#${id}`)) {
				console.log("yufffu");
				remove();
			}
		};
		document.body.addEventListener("click", listener);
		return () => {
			document.body.removeEventListener("click", listener);
		};
	}, []);

	return (
		<DropdownWrapper id={id} className="space-y-[1rem]">
			{statuses
				.filter((status) => status !== currentStatus)
				.map((status) => (
					<DropDownItem key={status} onClick={onClick}>
						Move to {status}
					</DropDownItem>
				))}
		</DropdownWrapper>
	);
};

ChangeTicketStatusDropdown.propTypes = {
	statuses: PropTypes.array,
	onClick: PropTypes.func,
	remove: PropTypes.func,
	currentStatus: PropTypes.string,
};

export default ChangeTicketStatusDropdown;
