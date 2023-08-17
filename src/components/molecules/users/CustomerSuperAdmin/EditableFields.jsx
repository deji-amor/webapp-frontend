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
import { useSelector, useDispatch } from "react-redux";
import { editCustomer } from "../../../../state-manager/reducers/users/customers/customers";

const EditableFields = ({ open, onClose, customer }) => {
	const dispatch = useDispatch();

	const [fields, setFields] = useState([
		{ label: "Company Name*", name: "company_name", type: "text", editable: false, required: true },
		{
			label: "Company representative first name*",
			name: "first_name",
			type: "text",
			editable: false,
			required: true,
		},
		{
			label: "Company representative last name*",
			name: "last_name",
			type: "text",
			editable: false,
			required: true,
		},
		{
			label: "Representative Email*",
			name: "email",
			type: "email",
			editable: false,
			required: true,
		},
		{
			label: "Company representative phone number",
			name: "phone_number",
			type: "text",
			editable: false,
			required: false,
		},
		{
			label: "Company finance team email",
			name: "company_finance_email",
			type: "email",
			editable: false,
			required: false,
		},
		{
			label: "Company official email",
			name: "company_email",
			type: "email",
			editable: false,
			required: false,
		},
	]);
	const [newField, setNewField] = useState("");
	const [addingNewField, setAddingNewField] = useState(false);
	const [isFormEdited, setIsFormEdited] = useState(false);
	const [fieldValues, setFieldValues] = useState({});
	const [extraFieldValues, setExtraFieldValues] = useState({});
	console.log(fieldValues);

	const selectedCustomer = useSelector((state) => state.ticketCreation.customer);
	const isCustomerActive = selectedCustomer?.status === "active";

	useEffect(() => {
		if (selectedCustomer) {
			const populatedFields = fields.map((field) => ({
				...field,
				value: selectedCustomer[field.name] || "",
			}));
			setFields(populatedFields);

			const initialFieldValues = {};
			fields.forEach((field) => {
				initialFieldValues[field.name] = selectedCustomer[field.name] || "";
			});
			setFieldValues(initialFieldValues);
		}
	}, [selectedCustomer]);

	const handleCloseModal = () => {
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
			setExtraFieldValues((prevValues) => ({
				...prevValues,
				[newField]: "",
			}));

			const newFieldObj = {
				label: newField,
				type: "text",
				editable: false,
				name: "extra_field",
			};
			setFields((prevFields) => [...prevFields, newFieldObj]);
			setNewField("");
			setAddingNewField(false);
			setIsFormEdited(true);
		}
	};

	const handleEditField = (index) => {
		if (!fields[index].required || !isCustomerActive) {
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

	const handleInputChange = (index, value) => {
		setFields((prevFields) => {
			const updatedFields = [...prevFields];
			updatedFields[index].value = value;
			return updatedFields;
		});

		if (fields[index].name === "extra_field") {
			setExtraFieldValues((prevValues) => ({
				...prevValues,
				[fields[index].label]: value,
			}));
		}

		setIsFormEdited(true);
	};

	const updateCustomerData = () => {
		const updatedData = {
			customerId: customer?.user_id,
			extraFields: Object.entries(extraFieldValues).map(([key, value]) => ({
				[key]: value,
			})),
		};

		fields.forEach((field) => {
			updatedData[field.name] = field.value;
		});
		dispatch(editCustomer(updatedData));
		onClose();
	};

	return (
		<div>
			<Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
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
							key={field.id}
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
									opacity: "1",
									// WebkitTextFillColor: "rgba(0, 0, 0, 0.7)",
								},
							}}
						>
							{field.label}
							<TextField
								type={field.type}
								value={field.value || ""}
								required={field.required}
								id={`field-${index}`}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											{(!field.required || isCustomerActive) && field.editable && (
												<IconButton onClick={() => handleSaveField(index)}>
													<CheckIcon sx={{ color: "green" }} />
												</IconButton>
											)}
											{!field.editable && (!field.required || !isCustomerActive) && (
												<IconButton onClick={() => handleEditField(index)}>
													<EditIcon sx={{ color: "#2b2e72" }} />
												</IconButton>
											)}
											{!field.required &&
												isCustomerActive | (!isCustomerActive || field.editable) && (
													<IconButton onClick={() => handleDeleteField(index)}>
														<DeleteIcon sx={{ color: "#D73D3D" }} />
													</IconButton>
												)}
										</InputAdornment>
									),
								}}
								disabled={!field.editable}
								onChange={(event) => handleInputChange(index, event.target.value)}
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
						onClick={onClose}
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
						disabled={!isFormEdited}
						onClick={updateCustomerData}
					>
						Save Changes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EditableFields;
