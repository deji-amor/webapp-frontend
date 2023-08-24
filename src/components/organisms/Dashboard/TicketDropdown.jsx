import React, { Component } from "react";
import PropTypes from "prop-types";
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

TicketDropdown.propTypes = {
  selectedCheckbox: PropTypes.oneOf(["project", "service"]).isRequired,
};

export default TicketDropdown;
