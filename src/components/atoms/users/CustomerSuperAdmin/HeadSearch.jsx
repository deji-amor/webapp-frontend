import { styled } from '@mui/material';
import React from 'react';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Search = styled("div")`
  position: relative;
  flex-basis: 20rem;

  input {
    background-color: #ffffff;
    border-radius: 8px;
    border-width: 1px;
    border-color: rgb(209, 213, 219);
    color: #898989;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    display: block;
    width: 100%;
    padding: 0.625rem;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  button {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    padding-right: 1rem;
  }
`;

const HeadSearch = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    const searchQuery = event.target.value;
    onSearch(searchQuery);
  };

  return (
    <Search>
      <input
        type="text"
        placeholder="Search Users"
        onChange={handleSearchChange}
      />
      <button type="button">
        <SearchOutlinedIcon />
      </button>
    </Search>
  );
};

export default HeadSearch;
