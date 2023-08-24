import React, { Component } from "react";
import TicketDropdown from "./TicketDropdown";
import CustomerDropdown from "./CustomerDropdown";
import Checkbox from "../../atoms/Dashboard/Checkbox";
import { styled } from "@mui/material";

class Dropdown extends Component {
	state = {
		selectedOption: "Tickets",
		selectedCheckbox: "project",
	};

	handleOptionSelect = (event) => {
		this.setState({ selectedOption: event.target.value });
	};

	handleCheckboxChange = (value) => {
		this.setState({ selectedCheckbox: value });
	};

	render() {
		const { selectedOption, selectedCheckbox } = this.state;

		const containerStyle = {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
            justifyContent: "space-between",
			gap: "400px"
		};

		const checkboxContainerStyle = {
			display: "flex",
			alignItems: "flex-end",
			justifyContent: "flex-end",
			gap: "14.995px",
		};
		const dropdownStyle = {
			display: "flex",
			borderRadius: "8px",
			background: "#2B2E72",
			padding: "8px 10px",
			alignItems: "center",
			flexShrink: "0",
			color: "#FFFFFF",
			fontFamily: "Poppins",
			fontSize: "20px",
			fontStyle: "normal",
			fontWeight: "600",
			lineHeight: "57.441px",
			cursor: "pointer",
			letterSpacing: "1px",
		};

		const selectOptionStyle = {
			backgroundColor: "#FFFFFF",
			color: "#000000",
			fontSize: "18px",
			fontWeight: "600",
			border: "none",
			borderRadius: "8px",
		};

		const lineStyle = {
			borderBottom: "2px solid #000",
			width: "830px",
			margin: "15px 0",
		};
		const Typography = styled("h3")`
			color: #706e6e;
			font-family: Poppins;
			font-size: 20px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			padding-bottom: 14px;
		`;

		return (
			<div>
				<Typography>Breakdown</Typography>
				<div style={containerStyle}>
					<select
						className="dropdown-select"
						onChange={this.handleOptionSelect}
						style={dropdownStyle}
					>
						<option value="Tickets" style={selectOptionStyle}>
							Tickets
						</option>
						<option value="Customers" style={selectOptionStyle}>
							Customers
						</option>
					</select>
					{selectedOption === "Tickets" && (
						<div style={checkboxContainerStyle}>
							<Checkbox
								label="Project Tickets"
								checked={selectedCheckbox === "project"}
								onChange={() => this.handleCheckboxChange("project")}
							/>
							<Checkbox
								label="Service Tickets"
								checked={selectedCheckbox === "service"}
								onChange={() => this.handleCheckboxChange("service")}
							/>
						</div>
					)}
				</div>
				<div style={lineStyle}></div>
				{selectedOption === "Tickets" && <TicketDropdown selectedCheckbox={selectedCheckbox} />}
				{selectedOption === "Customers" && <CustomerDropdown />}
			</div>
		);
	}
}

export default Dropdown;
