import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const FilterButtonSelectedFilters = ({ selectedFilters, clearFilters }) => {
    const { types, statuses } = selectedFilters;
  
    const clearTypeFilter = (type) => {
      clearFilters("type", type);
    };
  
    const clearStatusFilter = (status) => {
      clearFilters("status", status);
    };
  
    const clearAllFilters = () => {
      clearFilters("all");
    };
  
    if (!types.length && !statuses.length) {
      return null;
    }
  
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {types.map((type) => (
          <div
            key={type}
            style={{
              background: "rgba(76, 111, 255, 0.12)",
              borderRadius: "8px",
              padding: "8px 12px",
              marginRight: "15px",
              marginTop: "18px",
              display: "flex",
              color: "#2B2E72",
              fontSize: "16px",
              fontWeight: "500",
              alignItems: "center",
            }}
          >
            {type}
            <CloseIcon
              style={{ marginLeft: "5px", cursor: "pointer" }}
              onClick={() => clearTypeFilter(type)}
            />
          </div>
        ))}
  
        {statuses.map((status) => (
          <div
            key={status}
            style={{
              background: "rgba(76, 111, 255, 0.12)",
              borderRadius: "8px",
              padding: "8px 12px",
              marginRight: "15px",
              marginTop: "18px",
              display: "flex",
              color: "#2B2E72",
              fontSize: "16px",
              fontWeight: "500",
              alignItems: "center",
            }}
          >
            {status}
            <CloseIcon
              style={{ marginLeft: "5px", cursor: "pointer" }}
              onClick={() => clearStatusFilter(status)}
            />
          </div>
        ))}
  
        {(types.length || statuses.length) && (
          <div style={{ marginTop: "25px",  }}>
            <span
              style={{ cursor: "pointer", marginLeft: "27px", fontSize: "16px", fontWeight: "600", color: "#2B2E72"  }}
              onClick={clearAllFilters}
            >
              Clear Filters
            </span>
          </div>
        )}
      </div>
    );
  };

  
  
export default FilterButtonSelectedFilters;
