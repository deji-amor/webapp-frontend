import React from 'react';
import ProgressBar from '../../atoms/Dashboard/ProgressBar';

const CustomerBreakdown = ({ totalCount, statuses }) => (
  <div className="customer-breakdown">
    <div>Total Customers: {totalCount}</div>
    {statuses.map(status => (
      <div key={status.name}>
        {status.name}: <ProgressBar value={status.progress} />
      </div>
    ))}
  </div>
);

export default CustomerBreakdown;
