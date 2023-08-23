import React from 'react';
import CustomerBreakdown from '../../molecules/Dashboard/CustomerBreakdown';

class CustomerDropdown extends React.Component {
  render() {
    return (
      <div className="customer-dropdown">
        <CustomerBreakdown
          totalCount={150} // Replace with actual data
          statuses={[
            { name: "Active", progress: 60 },
            { name: "Inactive", progress: 25 },
            { name: "Suspended", progress: 15 },
          ]}
        />
      </div>
    );
  }
}

export default CustomerDropdown;
