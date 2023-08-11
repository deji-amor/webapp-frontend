import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { Typography } from '@mui/material';

export default function PaginationRounded({ totalResults, resultsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const handlePageChange = (event, page) => {
    onPageChange(page);
  };

  return (
    <div
      style={{
        width: '100%',
        background: '#fff',
        borderRadius: '0px 0px 12px 12px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        flexShrink: 0,
        display: 'flex',
      }}
    >
      <Typography
        sx={{
          fontSize: '#706E6E',
          fontWeight: '400',
          color: '#706E6E',
          marginRight: '20px',
        }}
      >
        Showing {resultsPerPage} of {totalResults} Results
      </Typography>
      <Pagination
        count={totalPages}
        shape="rounded"
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          '& .MuiPaginationItem-root': {
            color: '#2b2e72',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: '#2B2E72',
              color: '#fff',
            },
            '&.Mui-selected': {
              backgroundColor: '#2b2e72',
              color: '#fff',
            },
          },
        }}
      />
    </div>
  );
}
