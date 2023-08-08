import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import CustomerForm from '../../../molecules/users/CustomerOnboarding/CustomerForm';

const styles = {
  button: {
    backgroundColor: '#2B2E72',
    color: '#fff',
    fontWeight: '600',
    fontSize: '16px',
    letterSpacing: '0.15px',
    fontFamily: 'Poppins',
    textTransform:'none',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.24)',
    padding: '10px',
    '&:hover': {
      backgroundColor: '#2B2E72',
    },
    '&:focus': {
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
      },
  },
  icon: {
    fill: '#fff',
  },

  menuItem: {
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'space-between',
      padding: '8px 30px',
      margin: '0px 5px',
      borderBottom: '1px solid #797979',
      borderRadius: '8px',
      color: '#2B2E72',
      fontWeight: '600',
      '&:hover': {
          backgroundColor: 'rgba(80, 87, 229, 0.12)',
    },
  },

};


const DropdownButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isCustomerFormOpen, setCustomerFormOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    if (path === '/customer-onboarding') {
      setCustomerFormOpen(true);
    } else {
      console.log(`Navigating to: ${path}`);
      handleClose();
    }
  };

  const handleCustomerFormClose = () => {
    setCustomerFormOpen(false);
  };

  const handleFormSubmit = (formData) => {
    // Handle the form submission data
    console.log('Form submitted:', formData);
    handleClose(); // Close the form after submission
  };

  const dropdownItems = [
    { text: 'Customers', path: '/customer-onboarding' },
    { text: 'Technicians', path: '/Technicians' },
    { text: 'Admin', path: '/Admin' },
  ];

  return (
    <div>
      <Button
        style={styles.button}
        variant="contained"
        startIcon={<AddIcon style={styles.icon} />}
        onClick={handleClick}
      >
        Add New User
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dropdownItems.map((item, index) => (
          <MenuItem key={index} style={styles.menuItem} onClick={() => handleMenuItemClick(item.path)}>
            {item.text}
          </MenuItem>
        ))}
      </Menu>

      <CustomerForm open={isCustomerFormOpen} onClose={handleCustomerFormClose} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default DropdownButton;