import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
	filterTicketsByStatus,
	setMultipleFilterStatus,
	removeMultipleFilterStatus,
	setMultipleDropdownFilterStatus,
} from "../../../state-manager/reducers/reports/tickets/ticketreport";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { handleFilterByStatus } from "../../organisms/Reports/filters";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FilterDropdownItem from "./filterdropdownitem";

const FilterByWrapper = styled("div")(() => ({
	position: "relative",
	left: "17px",
	top: "20px",
	display: "flex",
	gap: "10px",

	button: {
		minWidth: "140px",
		height: "43px",
		padding: "10px 14px 10px 14px",
		borderRadius: "8px",
		background: "rgba(43, 46, 114, 1)",
		color: "white",
		gap: "4px",
		texAlign: "center",
	},

	".dropdownCard": {
		width: "205px",
		height: "140px",
		overflow: "hidden",
		background: "white",
		borderRadius: "8px",
		position: "absolute",
		zIndex: "20",
		padding: "8px 6px 8px 6px",
		boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.20)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: "2px",
		transition: "all",
	},

	".dropdownCard .item": {
		display: "flex",
		alignItems: "center",
		fontFamily: "Poppins",
		fontSize: "14px",
		fontWeight: "500",
		lineHeight: "20px",
		letterSpacing: "0.02em",
		textAlign: "left",
		padding: "5px",
		borderRadius: "5px",
	},

	".dropdownCard .item.active": {
		background: "rgba(76, 111, 255, 0.08)",
	},

	".dropdownCard .item:hover": {
		width: "100%",
		height: "38px",
		border: "0px 0px 1px 0px",
		gap: "16px",
		cursor: "pointer",
		background: "rgba(76, 111, 255, 0.08)",
	},

	".status": {
		display: "flex",
		gap: "20px",
		alignItems: "center",
		color: "rgba(43, 46, 114, 1)",
	},

	".status span": {
		border: ".5px solid rgba(43, 46, 114, 1)",
		borderRadius: "8px",
		padding: "5px",
		cursor: "pointer",
	},

	".status span:hover": {
		background: "rgba(43, 46, 114, 1)",
		color: "white",
	},
}));

const ProjectFilterBy = ({ click, handleClicked }) => {
	const [status, setStatus] = useState("");
	const [active, setActive] = useState(false);
	const [toggle, setToggle] = useState(false);

	const { filteredProjectTickets, filteredProjectTicketsByDate, projectStatus, reportTabIndex } = useSelector(
		(state) => state.ticketReports
	);

	const dispatch = useDispatch();

	const handleClick = (active) => {
		if (active) {
			setActive(true)
		}else {
			setActive(false)
		}
	};

	useEffect(() => {
		if (status != "") {
			if (!active) {
				handleFilterByStatus(
					status,
					filteredProjectTickets,
					filteredProjectTicketsByDate,
					filterTicketsByStatus,
					setMultipleFilterStatus,
					dispatch
				);
			}else {
				dispatch(removeMultipleFilterStatus(status))
			}
		}
		setStatus("")
	}, [status, active]);

	useEffect(() => {
		if (reportTabIndex === 1) {
			if (status === 'done') {
				dispatch(setMultipleDropdownFilterStatus({status, title: "Tickets Done"}))
			}else if (status === "in-progress") {
				dispatch(setMultipleDropdownFilterStatus({status, title: "Tickets Inprogress"}))
			}else if (status === "pending") {
				dispatch(setMultipleDropdownFilterStatus({status, title: "Tickets Pending"}))
			}else if (status === "technician enroute") {
				dispatch(setMultipleDropdownFilterStatus({status, title: "Technician Enroute"}))
			}
		}
	}, [status])

	useEffect(() => {
		const listener = (e) => {
			if (!e.target.closest("#drop-one") || e.target.closest("#drop-two")) {
				setToggle(false);
			}
		};

		document.body.addEventListener("click", listener);
		return () => document.body.removeEventListener("click", listener);
	}, []);

	return (
		<FilterByWrapper>
			<div>
				<button type="button" onClick={(e) => {
					e.stopPropagation()
					setToggle((prev) => !prev)
				}}>
					All Tickets
					<ExpandMoreIcon />
				</button>
				{toggle && (
					<div className="dropdownCard">
						{projectStatus.map((item) => (
							<FilterDropdownItem key={item.status} item={item} setStatus={setStatus} handleClick={handleClick} />
						))}
					</div>
				)}
			</div>
		</FilterByWrapper>
	);
};

ProjectFilterBy.propTypes = {
	dropItems: PropTypes.array,
	filteredReports: PropTypes.array,
	handleClicked: PropTypes.func,
	click: PropTypes.bool
};

export default ProjectFilterBy;
