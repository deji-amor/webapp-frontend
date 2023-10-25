import React, { useState } from "react";
import { IconButton, Popover, TextField } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarIcon = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleCalendarClick = (event) => {
    setIsCalendarOpen(event.currentTarget);
  };

  const handleCloseCalendar = () => {
    setIsCalendarOpen(null);
  };

  const open = Boolean(isCalendarOpen);

  return (
    <>
      <IconButton
        style={{
          background: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          boxShadow:
            "0px 1px 1px 0px rgba(0, 0, 0, 0.10), 0px 0px 2px 0px rgba(0, 0, 0, 0.32)",
          marginLeft: "26px",
        }}
        onClick={handleCalendarClick}
      >
        <CalendarMonthIcon style={{ color: "#2B2E72" }} />
      </IconButton>

      <Popover
        open={open}
        anchorEl={isCalendarOpen}
        onClose={handleCloseCalendar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div style={{ padding: "16px" }}>
          <TextField
            label="Search"
            fullWidth
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div style={{ marginTop: "16px" }}>
            <Calendar value={new Date()} showNavigation={true} />
          </div>
        </div>
      </Popover>
    </>
  );
};

export default CalendarIcon;
