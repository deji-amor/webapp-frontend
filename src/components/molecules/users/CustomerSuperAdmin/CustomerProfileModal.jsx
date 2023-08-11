import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CustomerProfileModal = ({ isOpen, onClose, customer }) => {
    if (!isOpen || !customer) {
      return null;
    }
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h6">{customer.companyName}</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography>{`Company Name: ${customer.companyName}`}</Typography>
        <Typography>{`Company Rep Full Name: ${customer.representativeName}`}</Typography>
        <Typography>{`Company Rep Email: ${customer.representativeEmail}`}</Typography>
        <Typography>{`Company Rep Phone Number: ${customer.representativePhone}`}</Typography>
        <Typography>{`Date Created: ${customer.dateCreated}`}</Typography>
        <Typography>{`Status: ${customer.status}`}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerProfileModal;
