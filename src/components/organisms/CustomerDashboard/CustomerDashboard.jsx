import React from 'react';
import { TotalTickets, ServiceTickets, ProjectTickets } from './StatsBoxGroup';

const CustomerDashboard = () => {
  const totalTicketsData = {
    total: 180,
    viewLink: '/total-tickets',
    pieChartData: {
      data: [
        { name: 'Service', value: 100 },
        { name: 'Ticket', value: 80 },
      ],
      colors: ['#FF6384', '#36A2EB'],
    },
  };

  const serviceTicketsData = {
    total: 80,
    viewLink: '/service-tickets',
    pieChartData: {
      data: [
        { name: 'Done', value: 20 },
        { name: 'Pending', value: 30 },
        { name: 'In Progress', value: 30 },
      ],
      colors: ['#FF6384', '#FFCE56', '#36A2EB'],
    },
  };

  const projectTicketsData = {
    total: 100,
    viewLink: '/project-tickets',
    pieChartData: {
      data: [
        { name: 'Done', value: 40 },
        { name: 'Pending', value: 30 },
        { name: 'In Progress', value: 30 },
      ],
      colors: ['#4CAF50', '#FFCE56', '#FF6384'],
    },
  };

  return (
    <div>
      <TotalTickets {...totalTicketsData} />
      <ServiceTickets {...serviceTicketsData} />
      <ProjectTickets {...projectTicketsData} />
    </div>
  );
};

export default CustomerDashboard;
