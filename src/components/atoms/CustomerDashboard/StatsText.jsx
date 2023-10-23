import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const NumberDisplay = ({ number }) => (
  <Typography variant="h2" align="center">
    {number}
  </Typography>
);

export const UnderlinedLink = ({ text, link }) => (
  <Typography variant="body1" align="center">
    <Link href={link} underline="always">
      {text}
    </Link>
  </Typography>
);
