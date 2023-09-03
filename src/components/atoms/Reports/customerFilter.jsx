import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { handleFilterByStatus } from "../../organisms/Reports/filters";
import {
	removeMultipleCustomersFilterStatus,
	filterCustomersByStatus,
	setMultipleCustomersFilterStatus,
	setMultipleCustomerDropdownFilterStatus,
} from "../../../state-manager/reducers/reports/customers/customers";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FilterDropdownItem from "./filterdropdownitem";

const CustomerFilterByWrapper = styled("div")(() => ({
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
		width: "225px",
		height: "130px",
		overflow: "hidden",
		background: "white",
		borderRadius: "8px",
		position: "absolute",
		padding: "8px 6px 8px 6px",
		boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.20)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: "3px",
		transition: "all",
	},

	".dropdownCard .item": {
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
		color: "rgba(43, 46, 114, 1)",
	},

	".dropdownCard .item.active": {
		background: "rgba(76, 111, 255, 0.08)",
	},

	".dropdownCard .item:hover": {
		width: "100%",
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

const CustomerFilterBy = ({ dropItems }) => {
	const [status, setStatus] = useState("");
	const [active, setActive] = useState(false);
	const [toggle, setToggle] = useState(false);

	const { filteredCustomers, filteredCustomersByDate, customerStatus } = useSelector(
		(state) => state.customerReports
	);

	const dispatch = useDispatch();

	const handleClick = (active) => {
		if (active) {
			setActive(true);
		} else {
			setActive(false);
		}
	};

	useEffect(() => {
		if (status != "") {
			if (!active) {
				handleFilterByStatus(
					status,
					filteredCustomers,
					filteredCustomersByDate,
					filterCustomersByStatus,
					setMultipleCustomersFilterStatus,
					dispatch
				);
			} else {
				dispatch(removeMultipleCustomersFilterStatus(status));
			}
		}
		setStatus("");
	}, [status]);

	useEffect(() => {
			if (status === 'active') {
				dispatch(setMultipleCustomerDropdownFilterStatus({status, title: "Active Customers"}))
			}else if (status === "inactive") {
				dispatch(setMultipleCustomerDropdownFilterStatus({status, title: "Inactive Customers"}))
			}else if (status === "suspend") {
				dispatch(setMultipleCustomerDropdownFilterStatus({status, title: "Suspended Customers"}))
			}
	}, [status])

	return (
		<CustomerFilterByWrapper>
			<div>
				<button type="button" onClick={() => setToggle((prev) => !prev)}>
					All Customers
					<ExpandMoreIcon />
				</button>
				{toggle && (
					<div className="dropdownCard">
						{customerStatus.map((item) => (
							<FilterDropdownItem
								key={item.status}
								item={item}
								setStatus={setStatus}
								handleClick={handleClick}
							/>
						))}
					</div>
				)}
			</div>
		</CustomerFilterByWrapper>
	);
};

CustomerFilterBy.propTypes = {
	dropItems: PropTypes.array,
	filteredReports: PropTypes.array,
};

export default CustomerFilterBy;
