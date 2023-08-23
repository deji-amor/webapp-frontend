import React, { Component } from "react";
import TicketDropdown from "../../organisms/Dashboard/TicketDropdown";
import CustomerDropdown from "../../organisms/Dashboard/CustomerDropdown";

class Dropdown extends Component {
	state = {
		selectedOption: "",
	};

	handleOptionSelect = (event) => {
		this.setState({ selectedOption: event.target.value });
	};

	render() {
		const { options } = this.props;
		const { selectedOption } = this.state;

		const dropdownContainerStyle = {
			display: "flex",
			alignItems: "center", // Vertically align items
		};

        const lineStyle = {
            width: '100%',
            height: '1px',
            background: '#ccc', // Change to your preferred line color
            margin: '20px 0', // Add space above and below the line
          };

		const checkboxesContainerStyle = {
			display: "flex",
			alignItems: "center", // Vertically align items
			marginLeft: "20px", // Add some space between dropdown and checkboxes
		};

		return (
			<div style={dropdownContainerStyle}>
				<select className="dropdown-select" onChange={this.handleOptionSelect}>
					<option value="">Select an option</option>
					{options.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{selectedOption === "Tickets" && (
					<div style={checkboxesContainerStyle}>
						<TicketDropdown />
					</div>
				)}
				{selectedOption === "Customers" && (
					<div style={checkboxesContainerStyle}>
						<CustomerDropdown />
					</div>
				)}
			</div>
		);
	}
}

export default Dropdown;
