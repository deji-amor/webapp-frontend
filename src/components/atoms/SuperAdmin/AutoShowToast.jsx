import React from 'react';
import { Snackbar, SnackbarContent } from '@mui/material';

const AutoShowToast = ({ showToast, message, autoHideDuration, onClose }) => {
  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    if (onClose) {
      onClose();
    }
  };

  return (
    <Snackbar
      open={showToast}
      autoHideDuration={autoHideDuration || 3000}
      onClose={handleCloseToast}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <SnackbarContent
        style={{
          backgroundColor: '#BAF4BA',
          color: 'green',
          fontWeight: 'bold',
        }}
        message={message || 'Toast Message'}
      />
    </Snackbar>
  );
};

export default AutoShowToast;
