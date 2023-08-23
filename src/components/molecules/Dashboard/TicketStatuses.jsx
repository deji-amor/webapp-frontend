import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../../atoms/Dashboard/ProgressBar";

const TicketStatuses = ({ title, total, statuses }) => {
  return (
    <div className="ticket-statuses">
      <h2>{title}</h2>
      <p>Total {title}: {total}</p>
      {statuses.map((status, index) => (
        <div key={index}>
          <p>{status.name}: {status.value}</p>
          <ProgressBar value={status.progress} />
          <p>Recently Updated: +{status.updated}</p>
        </div>
      ))}
    </div>
  );
};

TicketStatuses.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      progress: PropTypes.number.isRequired,
      updated: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TicketStatuses;