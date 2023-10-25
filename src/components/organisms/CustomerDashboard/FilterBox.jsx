import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import FilterButton from "../../molecules/CustomerDashboard/FilterButton";
import SearchBar from "../../atoms/CustomerDashboard/SearchBar";
import CalendarIcon from "../../molecules/CustomerDashboard/CalendarIcon";
import ViewReportButton from "../../molecules/CustomerDashboard/ViewReportButton";
import FilterButtonSelectedFilters from "../../molecules/CustomerDashboard/FilterButtonSelectedFilters";

const FilterBox = ({ typeOptions, statusOptions, onFilterChange, tickets  }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    types: [],
    statuses: [],
  });
  const [searchValue, setSearchValue] = useState('');
  const [filteredTickets, setFilteredTickets] = useState(tickets);


  const toggleTypeFilter = (type) => {
    const updatedTypes = selectedFilters.types.includes(type)
      ? selectedFilters.types.filter((item) => item !== type)
      : [...selectedFilters.types, type];
    setSelectedFilters({ ...selectedFilters, types: updatedTypes });
    
    onFilterChange(updatedTypes, selectedFilters.statuses);
  };

  const toggleStatusFilter = (status) => {
    const updatedStatuses = selectedFilters.statuses.includes(status)
      ? selectedFilters.statuses.filter((item) => item !== status)
      : [...selectedFilters.statuses, status];
    setSelectedFilters({ ...selectedFilters, statuses: updatedStatuses });
    
    onFilterChange(selectedFilters.types, updatedStatuses);
  };

  // console.log('tickets:', tickets);


  const handleSearch = (searchValue) => {
    setSearchValue(searchValue);
  
    const filteredResults = tickets.filter((ticket) => {
      const ticketId = String(ticket.id);
      return ticketId.toLowerCase() === searchValue.toLowerCase();
    });
  
    // console.log('filteredResults:', filteredResults);
  
    setFilteredTickets(filteredResults);
  };
  
  const clearFilters = (type) => {
    if (type === "all") {
      setSelectedFilters({ types: [], statuses: [] });
    } else if (type === "type") {
      setSelectedFilters({ ...selectedFilters, types: [] });
    } else if (type === "status") {
      setSelectedFilters({ ...selectedFilters, statuses: [] });
    }
  };

  if (!selectedFilters.types) {
    selectedFilters.types = [];
  }
  if (!selectedFilters.statuses) {
    selectedFilters.statuses = [];
  }

  return (
    <Box>
      <Typography
        style={{
          color: "#000",
          fontWeight: "500",
          fontSize: "20px",
          marginBottom: "16px",
        }}
      >
        Tickets
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box display="flex" alignItems="center">
          <FilterButton
            typeOptions={typeOptions}
            statusOptions={statusOptions}
            selectedFilters={selectedFilters}
            onTypeFilterSelect={toggleTypeFilter}
            onStatusFilterSelect={toggleStatusFilter}
            clearFilters={clearFilters}
          />
          <SearchBar searchValue={searchValue} onSearch={handleSearch} />
          <CalendarIcon />
        </Box>
        <Box marginLeft="auto">
          <ViewReportButton />
        </Box>
      </Box>
      <FilterButtonSelectedFilters
  selectedFilters={selectedFilters}
  clearFilters={clearFilters}
/>

    </Box>
  );
};

export default FilterBox;
