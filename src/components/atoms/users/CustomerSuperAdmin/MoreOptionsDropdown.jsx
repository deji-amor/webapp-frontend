import React, { useState } from "react";
import {
  TableCell,
  Menu,
  MenuItem,
  IconButton,
  Modal,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MoreOptionsDropdown = ({ status }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
  const [suspendComment, setSuspendComment] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSuspendClick = () => {
    setIsSuspendModalOpen(true);
    handleClose();
  };

  const handleUnsuspendClick = () => {
    // Handle unsuspend logic here
    handleClose();
  };

  const handleSuspendModalClose = () => {
    setIsSuspendModalOpen(false);
  };

  const handleSuspendCommentChange = (event) => {
    setSuspendComment(event.target.value);
  };


  return (
    <TableCell sx={{ borderBottom: "none", padding: 0 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton aria-label="more" onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            sx: {
              borderRadius: '10px',
              padding: "6px 12px",
            },
          }}
          >
          {status === "Active" && (
            <MenuItem sx={{ borderRadius: '5px', padding: "12px 16px" }} onClick={handleSuspendClick}>
              Suspend
            </MenuItem>
          )}
          {status === "Suspended" && (
            <MenuItem sx={{ borderRadius: '5px', padding: "12px 16px" }} onClick={handleUnsuspendClick}>
              Unsuspend
            </MenuItem>
          )}
        </Menu>
      </Box>
      <Modal open={isSuspendModalOpen} onClose={handleSuspendModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
            width: 300,
            boxShadow: 4,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Suspend Comment
          </Typography>
          <TextField
            label="Comment"
            multiline
            rows={4}
            value={suspendComment}
            onChange={handleSuspendCommentChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSuspendModalClose}
          >
            Suspend
          </Button>
        </Box>
      </Modal>
    </TableCell>
  );
};

export default MoreOptionsDropdown;
