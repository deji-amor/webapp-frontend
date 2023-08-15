import React, { useEffect, useState } from "react";
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
import { isEqual } from "lodash";
import { useSelector } from "react-redux";

const EditableFields = ({ open, onClose, initialFields, customer }) => {
	const [openModal, setOpenModal] = useState(false);
	const [fields, setFields] = useState([
		{ label: "Company Name*", name: "company_name", type: "text", editable: false, required: true },
		{ label: "Company representative first name*", name: "first_name", type: "text", editable: false, required: true },
		{ label: "Company representative last name*", name: "last_name", type: "text", editable: false, required: true },
		{ label: "Representative Email*", name: "email", type: "email", editable: false, required: true },
		{ label: "Company representative phone number", name: "phone_number", type: "tel", editable: false },
		{ label: "Company finance team email", name: "company_finance_email", type: "email", editable: false },
		{ label: "Company official email", name: "company_email", type: "email", editable: false },
	]);
	const [newField, setNewField] = useState("");
	const [addingNewField, setAddingNewField] = useState(false);
	const [isFormEdited, setIsFormEdited] = useState(false);
	
	const selectedCustomer = useSelector((state) => state.ticketCreation.customer);
	const isCustomerActive = selectedCustomer?.status === "active";

	useEffect(() => {
		if (selectedCustomer) {
			const populatedFields = fields.map((field) => ({
				...field,
				value: selectedCustomer[field.name] || "",
			}));
			setFields(populatedFields);
		}
	}, [selectedCustomer, fields]);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
		setNewField("");
		setAddingNewField(false);
		setIsFormEdited(false);
	};

	const handleAddNewField = () => {
		setAddingNewField(true);
		setIsFormEdited(true);
	};

	const handleNewFieldChange = (event) => {
		setNewField(event.target.value);
	};

	const handleConfirmNewField = () => {
		if (newField.trim() !== "") {
			const newFieldObj = { label: newField, type: "text", editable: false };
			setFields((prevFields) => [...prevFields, newFieldObj]);
			setNewField("");
			setAddingNewField(false);
			setIsFormEdited(true);
		}
	};

	const handleEditField = (index) => {
		if (!isCustomerActive) {
			const updatedFields = fields.map((field, i) => {
				if (i === index) {
					field.editable = true;
				}
				return field;
			});
			setFields(updatedFields);
		}
	};

	const handleSaveField = (index) => {
		const updatedFields = fields.map((field, i) => {
			if (i === index) {
				field.editable = false;
			}
			return field;
		});
		setFields(updatedFields);
		setIsFormEdited(true);
	};

	const handleDeleteField = (index) => {
		if (!fields[index].required) {
			const updatedFields = fields.filter((_, i) => i !== index);
			setFields(updatedFields);
			setIsFormEdited(true);
		}
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
									fontSize: "15px",
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
								value={field.value}
								required={field.required}
								disabled={!field.editable}
								id={`field-${index}`}
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
									fontSize: "15px",
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
							background: isFormEdited ? "rgba(43, 46, 114, 0.5)" : "#2b2e72",
							textTransform: "none",
							fontFamily: "Poppins",
							"&:hover": {
								backgroundColor: "#2b2e72",
							},
						}}
						disabled={!isFormEdited}
					>
						Save Changes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EditableFields;
