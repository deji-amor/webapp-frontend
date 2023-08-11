import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	InputAdornment,
	IconButton,
	TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

function EditableFields() {
	const [openModal, setOpenModal] = useState(false);
	const [fields, setFields] = useState([
		{ label: "Company Name*", type: "text", required: true },
		{ label: "Representative first Name*", type: "text", required: true },
		{ label: "Company representative last name*", type: "text", required: true },
		{ label: "Company representative email*", type: "text", required: true },
		{ label: "Company representative phone number", type: "text", required: false },
		{ label: "Company finance team email", type: "text", required: false },
		{ label: "Company official email", type: "text", required: false },
	]);

	const [newField, setNewField] = useState("");
	const [addingNewField, setAddingNewField] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleAddNewField = () => {
		setAddingNewField(true);
	};

	const handleNewFieldChange = (event) => {
		setNewField(event.target.value);
	};

	const handleConfirmNewField = () => {
		if (newField.trim() !== "") {
			setFields([...fields, { label: newField, type: "text", editable: false }]);
		}
		setNewField("");
		setAddingNewField(false);
	};

	const handleEditField = (index) => {
		const updatedFields = fields.map((field, i) => {
			if (i === index) {
				field.editable = true;
			}
			return field;
		});
		setFields(updatedFields);
	};

	const handleSaveField = (index) => {
		const updatedFields = fields.map((field, i) => {
			if (i === index) {
				field.editable = false;
			}
			return field;
		});
		setFields(updatedFields);
	};

	const handleDeleteField = (index) => {
		const updatedFields = fields.filter((_, i) => i !== index);
		setFields(updatedFields);
	};

	return (
		<div>
			<Button variant="outlined" onClick={handleOpenModal}>
				Open Modal
			</Button>
			<Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="md">
				<DialogTitle>
					Edit Profile Fields
					<hr style={{ width: "322.337px", borderColor: "#4F4F4F", marginTop: "15px" }} />
				</DialogTitle>
				<DialogContent
					sx={{
						width: "80%",
						position: "relative",
						margin: "15px",
						overflowY: "scroll",
						maxHeight: "70vh",
						gap: "20px",
					}}
				>
					{fields.map((field, index) => (
						<FormControl
							key={index}
							fullWidth
							sx={{
								mb: "0.5rem",
								color: "#000",
								fontSize: "14px",
								fontWeight: "400",
								"& .MuiOutlinedInput-root": {
									borderRadius: "6px",
									fontSize: "16px",
									fontWeight: "400",
								},
								"& .MuiOutlinedInput-notchedOutline": {
									borderColor: "#EEEEEE",
									borderWidth: "1px",
									borderStyle: "solid",
								},
								"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
									borderColor: "#2B2E72",
								},
								"& .MuiOutlinedInput-input": {
									borderRadius: "6px",
									color: "#2B2E72",
								},
							}}
						>
							{field.label}
							<TextField
								type={field.type}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											{field.editable && (
												<IconButton onClick={() => handleSaveField(index)}>
													<CheckIcon sx={{ color: "green" }} />
												</IconButton>
											)}
											{!field.editable && (
												<IconButton onClick={() => handleEditField(index)}>
													<EditIcon sx={{ color: "#2b2e72" }} />
												</IconButton>
											)}
											{!field.required && !field.editable && (
												<IconButton onClick={() => handleDeleteField(index)}>
													<DeleteIcon sx={{ color: "#D73D3D" }} />
												</IconButton>
											)}
										</InputAdornment>
									),
								}}
								disabled={!field.editable}
							/>
						</FormControl>
					))}
					{addingNewField ? (
						<TextField
							placeholder="Enter Field Name"
							value={newField}
							onChange={handleNewFieldChange}
							fullWidth
							sx={{
								mb: "0.5rem",
								color: "#000",
								fontSize: "14px",
								fontWeight: "400",
								"& .MuiOutlinedInput-root": {
									borderRadius: "6px",
									fontSize: "16px",
									fontWeight: "400",
								},
								"& .MuiOutlinedInput-notchedOutline": {
									borderColor: "#EEEEEE",
									borderWidth: "1px",
									borderStyle: "solid",
								},
								"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
									borderColor: "#2B2E72",
								},
								"& .MuiOutlinedInput-input": {
									borderRadius: "6px",
									color: "#2B2E72",
								},
							}}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleConfirmNewField}>
											<CheckIcon sx={{ color: "green" }} />
										</IconButton>
										<IconButton onClick={() => setAddingNewField(false)}>
											<DeleteIcon sx={{ color: "red" }} />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					) : (
						<Button
							variant="outlined"
							sx={{
								color: "#2b2e72",
								borderColor: "#2b2e72",
								textTransform: "none",
								fontWeight: "600",
								fontFamily: "Poppins",
								"&:hover": {
									backgroundColor: "transparent",
									color: "#2b2e72",
									borderColor: "#2b2e72",
								},
							}}
							onClick={handleAddNewField}
						>
							+ Add New Field
						</Button>
					)}
				</DialogContent>
				<DialogActions sx={{ padding: "30px" }}>
					<Button
						onClick={handleCloseModal}
						variant="outlined"
						sx={{
							color: "#2b2e72",
							borderColor: "#2b2e72",
							textTransform: "none",
							fontWeight: "600",
							fontFamily: "Poppins",
							"&:hover": {
								backgroundColor: "transparent",
								color: "#2b2e72",
								borderColor: "#2b2e72",
							},
						}}
					>
						Cancel
					</Button>
					<Button
						variant="contained"
						sx={{
							background: "#2b2e72",
							textTransform: "none",
							fontFamily: "Poppins",
							"&:hover": {
								backgroundColor: "#2b2e72",
							},
						}}
					>
						Save Changes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default EditableFields;
