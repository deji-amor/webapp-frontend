import React, { useState } from "react";
import { Modal, Box, Button, Avatar, IconButton } from "@mui/material";
import EditableField from "../../atoms/Dashboard/EditableField";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import Cover from "../../../assets/daashboard/Cover.png";
import CustomButton from "../../atoms/Password/customButton";
// import { updateProfilePicture } from "../../../actions/authUser";

const EditProfileModal = ({ open, onClose }) => {
	const dispatch = useDispatch();
	const [selectedImage, setSelectedImage] = useState(null);
	// const [loading, setLoading] = useState(false);
	const {email, firstName, lastName, workspaceName, phoneNumber, country, city } = useSelector((state) => state.authUser.data);


	const handleImageChange = (event) => {
		const imageFile = event.target.files[0];
		setSelectedImage(URL.createObjectURL(imageFile));
	};

	const handleSave = () => {
		// Handle save logic here
		//   if (selectedImage) {
		//     dispatch(updateProfilePicture(selectedImage)); // Dispatch action to update profile picture
		//   }
		// setLoading(true);
		onClose();
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
				{/* Cover Image */}
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
					{/* Avatar with Edit Icon */}
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
								accept="image/*"
								style={{ display: "none" }}
								onChange={handleImageChange}
							/>
							<IconButton component="span">
								{selectedImage ? (
									<Avatar
										alt="Profile Picture"
										src={selectedImage}
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
						// width: "800px",
					}}
				>
					{/* Editable Fields */}
					<Box
						sx={{
							display: "flex",
							gap: "20px",
							width: "61%",
							justifyContent: "space-between",
						}}
					>
						<EditableField label="First Name" value={firstName} onChange={() => {}} />
						<EditableField label="Last Name" value={lastName}  onChange={() => {}} />
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: "20px",
							width: "70%",
							justifyContent: "space-between",
						}}
					>
					<EditableField label="Workspace Name" value={workspaceName} onChange={() => {}} isEditable={true}/>
					<EditableField label="Phone Number" value={phoneNumber} onChange={() => {}} isEditable={true}/>
					</Box>
					<EditableField label="Work Email" value={email} onChange={() => {}} />
					<Box
						sx={{
							display: "flex",
							gap: "20px",
							width: "60%",
							justifyContent: "space-between",
						}}
					>
					<EditableField label="Country" value={country} onChange={() => {}} isEditable={true}/>
					<EditableField label="State" value={city} onChange={() => {}} isEditable={true}/>
					</Box>
					
				</Box>

				{/* Save and Close Buttons */}
				{/* <Box mt={2} display="flex" justifyContent="flex-end">
					<Button variant="outlined" onClick={handleCancel}>
						Cancel
					</Button>
					<Button variant="contained" color="primary" onClick={handleSave} sx={{ ml: 2 }}>
						Save
					</Button>
				</Box> */}
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
