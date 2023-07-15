import React from 'react';
import CustomButton from '../atoms/Button';
import { AppBar, Toolbar } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <CustomButton text="Home" />
        <CustomButton text="About" />
        <CustomButton text="Contact" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
