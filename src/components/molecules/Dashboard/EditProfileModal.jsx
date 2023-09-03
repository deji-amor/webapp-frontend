import React, { useEffect, useState } from "react";
import { Modal, Box, Button, Avatar, IconButton } from "@mui/material";
import EditableField from "../../atoms/Dashboard/EditableField";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import Cover from "../../../assets/daashboard/Cover.png";
import CustomButton from "../../atoms/Password/customButton";
import { editProfile } from "../../../state-manager/reducers/dashboard/dashboard";

// IMPORT import { updateProfilePicture } from "../../../actions/authUser";

const EditProfileModal = ({ open, onClose }) => {
	const dispatch = useDispatch();
	const [selectedImage, setSelectedImage] = useState(null);
	//COMMENT const [loading, setLoading] = useState(false);
	const [editedData, setEditedData] = useState({
		first_name: "",
		last_name: "",
		workspace_name: "",
		phone_number: "",
		country: "",
		state: "",
		email: "",
	});

	// const { email, first_name, last_name, workspace_name, phone_number, country, state } =
	// 	useSelector((state) => state.dashboard.editProfile);
	const { email, first_name, last_name, workspace_name, phone_number, country, state } =
    useSelector((state) => state.dashboard.editProfile);

  useEffect(() => {
    if (open) {
      // Fetch initial data when the component mounts
      dispatch(editProfile({})).then((data) => {
        setEditedData(data);
      });
    }
  }, [open, dispatch]);

	// const reduxState = useSelector((state) => state);
	// console.log("Redux State:", reduxState);

	const handleImageChange = (event) => {
		const imageFile = event.target.files[0];
		setSelectedImage(URL.createObjectURL(imageFile));
	};

	const handleSave = () => {
		dispatch(editProfile(editedData))
			.then(() => {
				setSelectedImage(null);
				onClose();
			})
			.catch((error) => {
				// Handle errors
			});
	};

	const handleCancel = () => {
		setSelectedImage(null);
		onClose();
	};

	const handleFieldChange = (field, value) => {
		setEditedData({
			...editedData,
			[field]: value,
		});
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
							value={editedData.first_name}
							onValueChange={(value) => handleFieldChange("first_name", value)}
						/>
						<EditableField
							label="Last Name"
							value={editedData.last_name}
							onValueChange={(value) => handleFieldChange("last_name", value)}
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
							value={editedData.workspace_name}
							onValueChange={(value) => handleFieldChange("workspace_name", value)}
							width="400px"
							isEditable={true}
						/>
						<EditableField
							label="Phone Number"
							value={editedData.phone_number}
							onValueChange={(value) => handleFieldChange("phone_number", value)}
							width="400px"
							isEditable={true}
						/>
					</Box>
					<EditableField
						label="Work Email"
						value={editedData.email}
						onValueChange={(value) => handleFieldChange("email", value)}
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
							value={editedData.country}
							onValueChange={(value) => handleFieldChange("country", value)}
							width="400px"
							isEditable={true}
						/>
						<EditableField
							label="State"
							value={editedData.state}
							onValueChange={(value) => handleFieldChange("state", value)}
							width="400px"
							isEditable={true}
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
