import React, { useEffect, useState } from "react";
import { Modal, Box, Button, Avatar, IconButton } from "@mui/material";
import EditableField from "../../atoms/Dashboard/EditableField";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import Cover from "../../../assets/daashboard/Cover.png";
import CustomButton from "../../atoms/Password/customButton";
import {
	authUserActions,
	editProfile,
	updateProfilePicture,
} from "../../../state-manager/reducers/users/authUser";

const EditProfileModal = ({ open, onClose }) => {
	const dispatch = useDispatch();
	const [selectedImage, setSelectedImage] = useState(null);
	const [hasUploadedImage, setHasUploadedImage] = useState(false);
	const [editedFields, setEditedFields] = useState({
		firstName: "",
		lastName: "",
		workspaceName: "",
		phoneNumber: "",
		email: "",
		country: "",
		city: "",
	});

	const { email, first_name, last_name, workspace_name, phone_number, country, city, profile_picture } =
		useSelector((state) => state.authUser.data);

	const { data } = useSelector((state) => state.authUser);
	useEffect(() => {
		setEditedFields(data);
	}, [data]);

	const handleImageChange = (event) => {
		const imageFile = event.target.files[0];
		setSelectedImage(imageFile);
		setHasUploadedImage(true);
	};

	const handleFieldChange = (field, value) => {
		setEditedFields((prevFields) => ({
			...prevFields,
			[field]: value,
		}));
	};

	const handleSave = () => {
		dispatch(editProfile(editedFields))
			.then((data) => {
				dispatch(authUserActions.setData(data.payload.data));
				if (selectedImage) {
					dispatch(updateProfilePicture(selectedImage)).then((imageData) => {
						console.log(imageData.payload);
						dispatch(authUserActions.setData(imageData.payload));

						setSelectedImage(null);
					});
				}
				onClose();
			})
			.catch((error) => {
				// Handle error
			});
	};


	const handleCancel = () => {
		setSelectedImage(null);
		onClose();
	};

	return (
		<Modal open={open} onClose={onClose}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					bgcolor: "#fff",
					padding: "32px",
					gap: "32px",
					minWidth: 300,
					borderRadius: "12px",
				}}
			>
				<Box
					sx={{
						position: "relative",
						height: "200px",
						overflow: "hidden",
						borderRadius: "12px",
						marginBottom: "32px",
					}}
				>
					<img
						src={Cover}
						alt="Cover"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>

					<Box
						sx={{
							position: "absolute",
							bottom: 15,
							left: 15,
							backgroundColor: "#2b2e72",
							borderRadius: "50%",
							padding: "4px",
							cursor: "pointer",
							width: "100px",
							height: "100px",
						}}
					>
						<label htmlFor="profile-picture">
							<input
								type="file"
								id="profile-picture"
								// accept="image/*"
								style={{ display: "none" }}
								onChange={handleImageChange}
							/>
							<IconButton component="span">
								{hasUploadedImage || profile_picture ? (
									<Avatar
										alt="Profile Picture"
										src={profile_picture || ""}
										style={{
											width: "95px",
											height: "95px",
											objectFit: "cover",
											right: 9,
											bottom: 10,
										}}
									/>
								) : (
									<PersonIcon style={{ color: "#fff", width: "100%", height: "100%" }} />
								)}
								<div
									style={{
										position: "fixed",
										top: 175,
										left: 120,
										borderRadius: "50%",
										backgroundColor: "#2b2e72",
										padding: "3px 10px",
										color: "#fff",
									}}
								>
									<BorderColorIcon style={{ width: "16.25px", height: "17.77px" }} />
								</div>
							</IconButton>
						</label>
					</Box>
				</Box>

				<Box
					sx={{
						alignItems: "center",
						gap: "24px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							gap: "20px",
							width: "61%",
							justifyContent: "space-between",
						}}
					>
						<EditableField
							label="First Name"
							value={editedFields.firstName || first_name}
							onSave={(value) => handleFieldChange("firstName", value)}
						/>
						<EditableField
							label="Last Name"
							value={editedFields.lastName || last_name}
							onSave={(value) => handleFieldChange("lastName", value)}
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: "20px",
							width: "70%",
							justifyContent: "space-between",
						}}
					>
						<EditableField
							label="Workspace Name"
							width="400px"
							value={editedFields.workspaceName || workspace_name}
							isEditable={true}
							onSave={(value) => handleFieldChange("workspaceName", value)}
						/>
						<EditableField
							label="Phone Number"
							width="400px"
							value={editedFields.phoneNumber || phone_number}
							isEditable={true}
							onSave={(value) => handleFieldChange("phoneNumber", value)}
						/>
					</Box>
					<EditableField
						label="Work Email"
						value={editedFields.email || email}
						onSave={(value) => handleFieldChange("email", value)}
					/>
					<Box
						sx={{
							display: "flex",
							gap: "20px",
							width: "60%",
							justifyContent: "space-between",
						}}
					>
						<EditableField
							label="Country"
							width="400px"
							value={editedFields.country || country}
							isEditable={true}
							onSave={(value) => handleFieldChange("country", value)}
						/>
						<EditableField
							label="State"
							width="400px"
							value={editedFields.city || city}
							isEditable={true}
							onSave={(value) => handleFieldChange("city", value)}
						/>
					</Box>
				</Box>

				<Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: "16px" }}>
					<Button
						onClick={handleCancel}
						sx={{
							color: "#2b2e72",
							borderColor: "#2b2e72",
							textTransform: "none",
							fontSize: "14px",

							"&:hover": {
								backgroundColor: "transparent",
								color: "#2b2e72",
								borderColor: "#2b2e72",
							},
						}}
					>
						Back
					</Button>
					<CustomButton
						onClick={handleSave}
						butText="Save Changes"
						// loading={loading}
						butType={"submit"}
						fontSize={"14px"}
						style={{ width: "200px" }}
					/>
				</Box>
			</Box>
		</Modal>
	);
};

export default EditProfileModal;
