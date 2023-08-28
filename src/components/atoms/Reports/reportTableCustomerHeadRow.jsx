import React, { useState, useEffect } from "react";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import ReportTableHeadCell from "./reportTableHeadCell";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { setSingleCustomersFilterByStatus } from "../../../state-manager/reducers/reports/customers/customers";
import { handleCustomerFilterByStatus } from "../../organisms/Reports/filters";
import { singleFilterCustomers } from "../../molecules/Reports/objects";

const ReportTableCustomerHeadRowWrapper = styled("tr")(() => ({
	width: "100%",
	height: "66px",
	borderBottom: "4px solid rgba(250, 250, 250, 1)",
	background: "rgba(255, 255, 255, 1)",

	th: {
		fontFamily: "Poppins",
		fontSize: "16px",
		fontWeight: "600",
		lineHeight: "36px",
		letterSpacing: "0em",
		textAlign: "left",
		color: "rgba(29, 29, 29, 1)",
	},

	".first": {
		paddingLeft: "30px",
	},

	".filterBy": {
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%)",
		right: "10px",
		float: "right",
		marginRight: "45px",
		display: "flex",
		alignItems: "center",
		gap: "10px",
		color: "rgba(43, 46, 114, 1)",
	},

	".filter": {
		width: "60p",
		height: "44",
		borderRadius: "8px",
		border: ".5px solid rgba(172, 172, 172, 1)",
		padding: "4px",
		cursor: "pointer",
	},

	".status": {
		borderRadius: "8px",
		padding: "5px",
		width: "130px",
		position: "absolute",
		top: "55px",
		background: "white",
		boxShadow: "0 0 5px gray"
	},

	".status-item": {
		height: "38px",
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

	".status-item:hover": {
		background: "rgba(76, 111, 255, 0.08)",
		cursor: "pointer"
	}
}));

const ReportTableCustomerHeadRow = () => {
	const [text, setText] = useState("All");
	const [status, setStatus] = useState("");
	const [toggle, setToggle] = useState(false);
	const { filteredCustomers, filteredCustomersByDate } = useSelector((state) => state.customerReports);
	const dispatch = useDispatch();

	const handleClick = (obj) => {
		setText(obj.title);
		setToggle(prev => !prev);
		setStatus(obj.status);
	};

	useEffect(() => {
		if (status != "") {
			handleCustomerFilterByStatus(
				status,
				filteredCustomers,
				filteredCustomersByDate,
				setSingleCustomersFilterByStatus,
				dispatch
			);
		}
	}, [status]);

	return (
		<ReportTableCustomerHeadRowWrapper>
			<ReportTableHeadCell>
				<span className="first">Company Name</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Representative Name</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Representative Email</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Status</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span className="filterBy">
					Filter By:
					<span className="filter" onClick={() => setToggle(prev => !prev)}>
						{text}
						<ExpandMoreIcon />
					</span>
					{toggle && (
						<div className="status">
							{singleFilterCustomers.map((obj) => (
								<div className="status-item" onClick={() => handleClick(obj)} key={obj.status}>
									{obj.title}
								</div>
							))}
						</div>
					)}
				</span>
			</ReportTableHeadCell>
		</ReportTableCustomerHeadRowWrapper>
	);
};

ReportTableCustomerHeadRow.propTypes = {
	// text: PropTypes.string,
};

export default ReportTableCustomerHeadRow;
