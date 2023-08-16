import React from "react";
import { TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

const EditableField = ({ field, onEdit, onSave, onDelete, onChange }) => {
  return (
    <div>
      <label>{field.label}</label>
      <TextField
        type={field.type}
        value={field.value}
        required={field.required}
        InputProps={{
          endAdornment: (
            <>
              {field.editable ? (
                <>
                  <IconButton onClick={onSave}>
                    <CheckIcon sx={{ color: "green" }} />
                  </IconButton>
                  {!field.required && (
                    <IconButton onClick={onDelete}>
                      <DeleteIcon sx={{ color: "#D73D3D" }} />
                    </IconButton>
                  )}
                </>
              ) : (
                <IconButton onClick={onEdit}>
                  <EditIcon sx={{ color: "#2b2e72" }} />
                </IconButton>
              )}
            </>
          ),
        }}
        disabled={!field.editable}
        onChange={onChange}
      />
    </div>
  );
};

export default EditableField;
