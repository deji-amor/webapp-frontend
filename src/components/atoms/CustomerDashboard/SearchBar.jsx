import React from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const searchBarStyles = {
  width: "350px",
  height: "40px",
  background: '#EFEEEE',
  boxShadow: 'none',
  fontFamily: "Poppins",
};

const SearchBar = ({ searchValue, onSearch }) => (
  <TextField
    variant="outlined"
    InputProps={{
      startAdornment: (
        <SearchIcon style={{ margin: "8px", fontSize: "25px", color: "#868FA0" }} />
      ),
      style: searchBarStyles,
    }}
    placeholder="Enter Ticket ID"
    value={searchValue}
    onChange={onSearch}
  />
);


export default SearchBar;
