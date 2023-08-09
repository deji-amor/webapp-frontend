import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SortIcon from '@mui/icons-material/Sort';
import Typography from '@mui/material/Typography';

const SortBy = ({ onSort }) => {
  const [ascending, setAscending] = useState(true);

  const handleSortClick = () => {
    setAscending((prevAscending) => !prevAscending);
    onSort(ascending);
  };

  return (
    <div>
      <Tooltip title={`Sort by ${ascending ? 'ascending' : 'descending'}`}>
        <IconButton aria-label="sort" onClick={handleSortClick}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', marginRight: '4px', color: '#2B2E72', '&:hover': { color: 'none' } }}>
            Sort by:
          </Typography>
          <SortIcon style={{ transform: ascending ? 'rotate(0deg)' : 'rotate(180deg)', color: '#2B2E72' }} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default SortBy;
