import React from "react";
import { useSelector } from "react-redux";
import { Box, Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";

const UserProfile = ({ onClick }) => {
  const pictureUrl = useSelector((state) => state.dashboard.pictureUrl);

  return (
    <Box display="flex" alignItems="center" onClick={onClick} style={{ cursor: "pointer" }}>
      <Avatar alt="User Profile" variant="circular" style={{ background: "#2b2e72" }}>
        {pictureUrl ? (
          <img src={pictureUrl} alt="Profile Picture" style={{ width: "100%", height: "100%" }} />
        ) : (
          <PersonIcon style={{ fontSize: 30 }} />
        )}
      </Avatar>
      <ArrowDropDownIcon />
    </Box>
  );
};

export default UserProfile;
