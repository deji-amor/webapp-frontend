import React from "react";
import { TextField } from "@mui/material";

const EditableField = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
    />
  );
};

export default EditableField;
