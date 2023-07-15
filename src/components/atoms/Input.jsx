import React from 'react';
import { TextField } from '@mui/material';

const CustomInput = ({ type, value, onChange }) => {
  return (
    <TextField type={type} value={value} onChange={onChange} />
  );
};

export default CustomInput;
