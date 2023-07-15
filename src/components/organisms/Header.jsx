import React from 'react';
import { Typography } from '@mui/material';

const Header = ({ title, subtitle }) => {
  return (
    <header>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h2">{subtitle}</Typography>
    </header>
  );
};

export default Header;
