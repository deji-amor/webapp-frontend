import React from 'react';
import { TicketBox, PieChart } from '../../molecules/CustomerDashboard/StatsBox';

export const TotalTickets = ({ total, viewLink, pieChartData }) => (
  <TicketBox
    title="Total Tickets"
    number={total}
    link={viewLink}
    chart={<PieChart data={pieChartData.data} colors={pieChartData.colors} />}
  />
);

export const ServiceTickets = ({ total, viewLink, pieChartData }) => (
  <TicketBox
    title="Service Tickets"
    number={total}
    link={viewLink}
    chart={<PieChart data={pieChartData.data} colors={pieChartData.colors} />}
  />
);

export const ProjectTickets = ({ total, viewLink, pieChartData }) => (
  <TicketBox
    title="Project Tickets"
    number={total}
    link={viewLink}
    chart={<PieChart data={pieChartData.data} colors={pieChartData.colors} />}
  />
);
