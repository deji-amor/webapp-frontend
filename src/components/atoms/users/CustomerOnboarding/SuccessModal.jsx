import React from "react";
import { Dialog, Box, Button, Typography, DialogContent, styled } from "@mui/material";
import FeaturedIcon from "../../../../assets/user/CustomerOnboarding/Featuredicon.png";
import CustomerForm from "../../../molecules/users/CustomerOnboarding/CustomerForm";
import { useState } from "react";

const SuccessModal = ({ open, onClose, onBackToCustomerTable }) => {
	const [openCustomerFormModal, setOpenCustomerFormModal] = useState(false);
	const Typography = styled("h3")`
		color: #2b2e72;
		text-align: center;
		font-family: Poppins;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 28px; /* 140% */
	`;

	const Text = styled("p")`
		color: #828282;
		text-align: center;
		font-family: Poppins;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px; /* 142.857% */
	`;

	const handleCreateAnotherCustomer = () => {
		setOpenCustomerFormModal(true);
		handleClose();
	  };

	const handleBackToCustomerTable = () => {
		onBackToCustomerTable();
		onClose();
	};

	return (
		<>
		<Dialog open={open} onClose={handleBackToCustomerTable} fullWidth maxWidth="sm">
			<DialogContent
				sx={{
					padding: "30px",
					display: "flex",
					fontFamily: "Poppins",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "20px",
				}}
			>
				<img src={FeaturedIcon} style={{ width: "56px", flexShrink: "0" }} />
				<div>
					<Typography component={"h3"}>Customer Profile Created</Typography>
					<Text>
						A log in link has been sent to the company representative email address
						<br /> to activate the customer account.
					</Text>
				</div>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						mt: 3,
						gap: "16px",
						alignItems: "flex-start",
						width: "100%",
					}}
				>
					<Button
						onClick={handleBackToCustomerTable}
						variant="outlined"
						sx={{
							color: "#2b2e72",
							borderColor: "#2b2e72",
							textTransform: "none",
							width: "100%",
							"&:hover": {
								backgroundColor: "transparent",
								color: "#2b2e72",
								borderColor: "#2b2e72",
							},
						}}
					>
						Back
					</Button>
					<Button
					onClick={handleCreateAnotherCustomer}
						variant="contained"
						sx={{
							background: "#2b2e72",
							fontFamily: "Poppins",
							textTransform: "none",
							width: "100%",
							"&:hover": {
								backgroundColor: "#2b2e72",
							},
						}}
					>
						Create Another Customer
					</Button>
				</Box>
			</DialogContent>
		</Dialog>

		<CustomerForm
        open={openCustomerFormModal}
        // onClose={closeCustomerFormModal}
      />
	  </>
	);
};

export default SuccessModal;
