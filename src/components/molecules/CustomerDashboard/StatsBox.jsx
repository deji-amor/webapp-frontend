import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Legend } from 'recharts';
import { NumberDisplay, UnderlinedLink } from '../../atoms/CustomerDashboard/StatsText';
import { Typography } from '@mui/material';

export const TicketBox = ({ title, number, link, chart }) => (
  <div>
    <Typography variant="h6" align="center">
      {title}
    </Typography>
    <NumberDisplay number={number} />
    <UnderlinedLink text="View Tickets" link={link} />
    {chart}
  </div>
);

export const PieChart = ({ data, colors }) => (
  <RechartsPieChart width={200} height={200}>
    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]} />
      ))}
    </Pie>
    <Legend verticalAlign="bottom" />
  </RechartsPieChart>
);
