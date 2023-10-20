import React from 'react';
import { MenuItem } from '@mui/material';

const DropDownItem = ({ text, icon, onClick }) => (
  <MenuItem onClick={onClick}>
    {icon && <span>{icon}</span>}
    {text}
  </MenuItem>
);

export default DropDownItem;
