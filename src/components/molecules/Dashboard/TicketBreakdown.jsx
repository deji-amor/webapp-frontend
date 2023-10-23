import React from 'react';
import ProgressBar from '../../atoms/Dashboard/ProgressBar';

const TicketBreakdown = ({ type, totalCount, statuses }) => (
  <div className="ticket-breakdown">
    <div>Total {type} Tickets: {totalCount}</div>
    {statuses.map(status => (
      <div key={status.name}>
        {status.name}: <ProgressBar value={status.progress} />
      </div>
    ))}
  </div>
);

export default TicketBreakdown;