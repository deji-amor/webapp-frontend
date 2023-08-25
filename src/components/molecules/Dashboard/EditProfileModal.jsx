import React, { useState } from "react";
import { Modal, Box, Button, Avatar, IconButton } from "@mui/material";
import EditableField from "../../atoms/Dashboard/EditableField";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import Cover from "../../../assets/daashboard/Cover.png";
// import { updateProfilePicture } from "../../../actions/authUser";

const EditProfileModal = ({ open, onClose }) => {
	const dispatch = useDispatch();
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageChange = (event) => {
		const imageFile = event.target.files[0];
		setSelectedImage(URL.createObjectURL(imageFile));
	};

	const handleSave = () => {
		// Handle save logic here
		//   if (selectedImage) {
		//     dispatch(updateProfilePicture(selectedImage)); // Dispatch action to update profile picture
		//   }
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
									<BorderColorIcon style={{ width: "16.25px", height: "17.77px" }}/>
								</div>
							</IconButton>
						</label>
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "24px",
						alignSelf: "stretch",
						width: "800px",
					}}
				>
					{/* Editable Fields */}
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "flex-start",
							gap: "20px",
						}}
					>
						<EditableField label="First Name" value="John" onChange={() => {}} />
						<EditableField label="Last Name" value="Doe" onChange={() => {}} />
					</Box>
					<EditableField label="Workspace Name" value="My Workspace" onChange={() => {}} />
					<EditableField label="Country" value="USA" onChange={() => {}} />
					<EditableField label="State" value="California" onChange={() => {}} />
					<EditableField label="Phone Number" value="123-456-7890" onChange={() => {}} />
				</Box>

				{/* Save and Close Buttons */}
				<Box mt={2} display="flex" justifyContent="flex-end">
					<Button variant="outlined" onClick={handleCancel}>
						Cancel
					</Button>
					<Button variant="contained" color="primary" onClick={handleSave} sx={{ ml: 2 }}>
						Save
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default EditProfileModal;
