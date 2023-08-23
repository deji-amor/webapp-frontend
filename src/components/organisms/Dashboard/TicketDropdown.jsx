import React, { Component } from "react";
import Checkbox from "../../atoms/Dashboard/Checkbox";
import TicketBreakdown from "../../molecules/Dashboard/TicketBreakdown";

class TicketDropdown extends Component {
  state = {
    selectedCheckbox: null,
  };

  handleCheckboxChange = (value) => {
    this.setState({ selectedCheckbox: value });
  };

  render() {
    const { selectedCheckbox } = this.state;

    const ticketDropdownStyle = {
      display: 'flex',
      flexDirection: 'row',
      // marginTop: '20px', // Add space above the checkboxes
    };

    const checkboxStyle = {
      marginBottom: '5px', // Add space between checkboxes
      borderRadius: '50%', // Make checkbox round
    };

    return (
      <div style={ticketDropdownStyle}>
        <Checkbox
          label="Project Tickets"
          checked={selectedCheckbox === "project"}
          onChange={() => this.handleCheckboxChange("project")}
          style={checkboxStyle}
        />
        <Checkbox
          label="Service Tickets"
          checked={selectedCheckbox === "service"}
          onChange={() => this.handleCheckboxChange("service")}
          style={checkboxStyle}
        />
        <div style={{ marginTop: '20px' }}> {/* Add space between checkboxes and TicketBreakdown */}
          {selectedCheckbox === "project" && (
            <TicketBreakdown
              type="Project"
              totalCount={100} // Replace with actual data
              statuses={[
                { name: "Done", progress: 30 },
                { name: "Pending", progress: 20 },
                { name: "En Route", progress: 15 },
                { name: "In Progress", progress: 35 },
              ]}
            />
          )}
          {selectedCheckbox === "service" && (
            <TicketBreakdown
              type="Service"
              totalCount={75} // Replace with actual data
              statuses={[
                { name: "Done", progress: 40 },
                { name: "Pending", progress: 10 },
                { name: "En Route", progress: 20 },
                { name: "In Progress", progress: 30 },
              ]}
            />
          )}
        </div>
      </div>
    );
  }
}

export default TicketDropdown;
