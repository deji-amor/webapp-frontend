import React, { Component } from "react";
import ProjectTicketDetails from "../../molecules/Dashboard/ProjectTicketDetails";
import ServiceTicketDetails from "../../molecules/Dashboard/ServiceTicketDetails";

class TicketDropdown extends Component {
  render() {
    const { selectedCheckbox } = this.props;

    return (
      <div>
        {selectedCheckbox === "project" && <ProjectTicketDetails />}
        {selectedCheckbox === "service" && <ServiceTicketDetails />}
      </div>
    );
  }
}

export default TicketDropdown;
