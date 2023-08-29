import React from "react";
import { Avatar, Box } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';

const UserProfile = ({ onClick }) => {
  return (
    <Box display="flex" alignItems="center" onClick={onClick} style={{ cursor: "pointer" }}>
      <Avatar alt="User Profile" variant="circular" style={{ background: "#2b2e72" }}>
        <PersonIcon style={{ fontSize: 30 }} />
      </Avatar>
      <ArrowDropDownIcon />
    </Box>
  );
};

export default UserProfile;
