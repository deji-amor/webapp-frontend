import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ButtonWithIcon from "../../atoms/CustomerDashboard/ButtonWithIcon";
import CheckIcon from "@mui/icons-material/Check";

const FilterButton = ({
	typeOptions,
	statusOptions,
	selectedFilters,
	onTypeFilterSelect,
	onStatusFilterSelect,
}) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const [typeAnchorEl, setTypeAnchorEl] = useState(null);
	const [statusAnchorEl, setStatusAnchorEl] = useState(null);
	const typeOpen = Boolean(typeAnchorEl);
	const statusOpen = Boolean(statusAnchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleTypeClick = (event) => {
		setTypeAnchorEl(event.currentTarget);
	};

	const handleStatusClick = (event) => {
		setStatusAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setTypeAnchorEl(null);
		setStatusAnchorEl(null);
	};

	const handleTypeMenuItemClick = (value) => {
		onTypeFilterSelect(value);
	};

	const handleStatusMenuItemClick = (value) => {
		onStatusFilterSelect(value);
	};

	const menuStyle = {
		borderRadius: "8px",
		boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)",
		padding: "8px 8px 14px 8px",
	};

	const menuItemStyle = {
		color: "#2B2E72",
		fontSize: "16px",
		letterSpacing: "0.5px",
		fontWeight: "500",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	};

	const filterContainerStyle = {
		display: "flex",
		alignItems: "center",
	};

	const filterMenuStyle = {
		transformOrigin: "right",
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "right",
		},
	};

	return (
		<div>
			<ButtonWithIcon
				icon={<FilterAltIcon />}
				icone={<KeyboardArrowDownIcon />}
				text="Filter By"
				onClick={handleClick}
			/>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose} style={menuStyle}>
				<MenuItem onClick={handleTypeClick} style={menuItemStyle}>
					<div>
						<FilterAltIcon style={{ marginRight: "5px" }} />
						Type
					</div>
					<ArrowForwardIosIcon />
				</MenuItem>
				<MenuItem onClick={handleStatusClick} style={menuItemStyle}>
					<div>
						<FilterAltIcon style={{ marginRight: "5px" }} />
						Status
					</div>
					<ArrowForwardIosIcon />
				</MenuItem>
			</Menu>

			<div style={{ ...filterContainerStyle }}>
				<Menu
					anchorEl={typeAnchorEl}
					open={typeOpen}
					onClose={handleClose}
					style={{ ...menuStyle, ...filterMenuStyle, top: "-45px", left: "140px" }}
				>
					{typeOptions.map((type) => (
						<MenuItem
							key={type}
							onClick={() => handleTypeMenuItemClick(type)}
							style={{
								background: "transparent",
								margin: "8px",
								color: "#2B2E72",
								fontSize: "16px",
								letterSpacing: "0.5px",
								fontWeight: "500",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<div>{type}</div>
							{/* <CheckIcon style={{ marginLeft: "15px" }} /> */}
						</MenuItem>
					))}
				</Menu>

				<Menu
					anchorEl={statusAnchorEl}
					open={statusOpen}
					onClose={handleClose}
					style={{ ...menuStyle, ...filterMenuStyle, top: "-40px", left: "140px" }}
				>
					{statusOptions.map((status) => (
						<MenuItem
							key={status}
							onClick={() => handleStatusMenuItemClick(status)}
							style={{
								background: "transparent",
								margin: "8px",
								color: "#2B2E72",
								fontSize: "16px",
								letterSpacing: "0.5px",
								fontWeight: "500",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<div>{status}</div>
							{/* <CheckIcon style={{ marginLeft: "15px" }} /> */}
						</MenuItem>
					))}
				</Menu>
			</div>
		</div>
	);
};

export default FilterButton;
