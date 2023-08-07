import React, { useState } from "react";
import { Modal, Box, Button, Typography, } from "@mui/material";
import { useForm } from "react-hook-form";
import TextFields from "../../SuperAdmin/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../atoms/SuperAdmin/Schema";


const CustomerForm = ({ open, onClose }) => {
	const [successModalOpen, setSuccessModalOpen] = useState(false);

	
	const {
	  handleSubmit,
	  control,
	  formState: { errors },
	  reset,
	} = useForm({
	  defaultValues: {
		companyName: "",
		companyRepFirstName: "",
		companyRepLastName: "",
		companyRepEmail: "",
		companyRepPhoneNumber: "",
		companyFinanceEmail: "",
		companyOfficialEmail: "",
	  },
	  resolver: yupResolver(schema),
	});
  
	
	const handleClose = () => {
		onClose();
	  };
	
	  const handleFormSubmit = (data) => {
		console.log("Form data:", data); // Log the form data to the console
	
		// Open the success modal
		// setSuccessModalOpen(true);
	
		// Clear the form fields
		reset();
	  };
	
	//   const closeSuccessModal = () => {
	// 	setSuccessModalOpen(false);
	// 	handleClose();
	//   };
  

	return (
		<Modal open={open} onClose={handleClose}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					bgcolor: "#FEFEFE",
					borderRadius: "12px",
					padding: "20px 40px",
				}}
			>
				<Typography
					component="h1"
					sx={{
						color: "#2B2E72",
						fontSize: "20px",
						fontWeight: "600",
						marginBottom: "18px",
					}}
				>
					Create New Customer
				</Typography>
				<form
					onSubmit={handleSubmit((data) => handleFormSubmit({ ...data }))}
          sx={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Poppins",
            alignItems: "center",
            justifyContent: "center",
            pb: "0",
            flexShrink: "0",
          }}
        >
					<Box sx={{ marginBottom: "10px", width: "800px" }}>
						<TextFields
							errors={errors}
							control={control}
							type="text"
							name="companyName"
							label="Company name"
						/>
					</Box>
					<Box sx={{ display: "flex", gap: "30px", marginBottom: "10px" }}>
          <TextFields
							errors={errors}
							control={control}
							type="text"
							name="companyRepFirstName"
							label="Company representative first name"
						/>
          <TextFields
							errors={errors}
							control={control}
							type="text"
							name="companyRepLastName"
							label="Company representative last name"
						/>
					</Box>
					<Box sx={{ display: "flex", gap: "30px", marginBottom: "10px" }}>
          <TextFields
							errors={errors}
							control={control}
							name="companyRepEmail"
							label="Company representative email"
							type="text"
						/>
            <TextFields
						errors={errors}
						control={control}
						name="companyRepPhoneNumber"
						label="Company representative phone number"
						type="tel"
						inputProps={{
							type: "phone",
						}}
					/>
					</Box>
					<Box sx={{ display: "flex", gap: "30px", marginBottom: "10px" }}>
          <TextFields
							errors={errors}
							control={control}
							name="companyFinanceEmail"
							label="Company finance team email"
							type="text"
						/>
          <TextFields
							errors={errors}
							control={control}
							name="companyOfficialEmail"
							label="Company official email"
							type="text"
						/>	
					</Box>
					<Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: "16px" }}>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                color: "#2b2e72",
                borderColor: "#2b2e72",
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
              type="submit"
              variant="contained"
              sx={{
                background: "#2b2e72",
                "&:hover": {
                  backgroundColor: "#2b2e72",
                },
              }}
            >
              Save And Send Link
            </Button>
          </Box>
				</form>
			</Box>

		</Modal>
	);
};

export default CustomerForm;
