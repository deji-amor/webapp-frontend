import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Dialog, DialogContent, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import TextFields from "../../users/CustomerOnboarding/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../atoms/users/CustomerOnboarding/Schema";
import SuccessModal from "../../../atoms/users/CustomerOnboarding/SuccessModal";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../../../../state-manager/reducers/users/customers/customers";
import { fetchCustomers } from "../../../../state-manager/reducers/users/customers/customers";
import { Triangle } from "react-loader-spinner";

const LoaderWrapper = styled("div")(() => ({
	width: "100%",
	height: "100%",
	position: "absolute",
	top: "0",
	left: "0",
	zIndex: "100",
	backgroundColor: "rgba(255, 255, 255, .15)",
	backdropFilter: "blur(5px)",
}));

const LoaderContainerWrapper = styled("div")(() => ({
	width: "100%",
	height: "100%",
	position: "absolute",
	top: "0",
	left: "0",
	zIndex: "150",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	".loader": {
		position: "absolute",
		zIndex: "150",
	},
}))

const CustomerForm = ({ open, onClose }) => {
	const dispatch = useDispatch();

	const {
		handleSubmit,
		control,
		formState: { errors, isValid },
		reset,
	} = useForm({
		defaultValues: {
			companyName: "",
			representativeFirstName: "",
			representativeLastName: "",
			representativeEmail: "",
			representativePhoneNumber: "",
			companyFinanceEmail: "",
			companyEmail: "",
		},
		resolver: yupResolver(schema),
	});

	const { creationSuccess } = useSelector((state) => state.customers);
	const [loading, setLoading] = useState(false);


	useEffect(() => {
		const timeout = setTimeout(() => {
			if (creationSuccess && loading) {
				dispatch(fetchCustomers());
				setLoading(false);
				setSuccessModalOpen(true);
				reset({});
			}
		}, 2000);

		return () => timeout;
	}, [creationSuccess, dispatch, loading, reset]);

	const handleClose = () => {
		onClose();
		setLoading(false);
		reset();
	};

	const [successModalOpen, setSuccessModalOpen] = useState(false);

	const handleFormSubmit = async (data) => {
		console.log("Form data:", data);
		setLoading(true);
		dispatch(createCustomer(data));
	};

	const closeSuccessModal = () => {
		setSuccessModalOpen(false);
		setLoading(false);
	};

	const saveButtonStyles = {
		background: "#2b2e72",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "#2b2e72",
		},
	};

	if (!isValid) {
		saveButtonStyles.pointerEvents = "none";
		saveButtonStyles.opacity = 0.5;
	}

	return (
		<>
			{(!loading && (
				<Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
					{successModalOpen && !loading && creationSuccess ? (
						<SuccessModal
							open={successModalOpen}
							onClose={closeSuccessModal}
							onBackToCustomerTable={handleClose}
						/>
					) : (
						<DialogContent sx={{ padding: "40px" }}>
							<Typography
								component="h1"
								sx={{
									color: "#2B2E72",
									fontSize: "20px",
									fontWeight: "600",
									marginBottom: "18px",
									fontFamily: "Poppins",
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
								<Box sx={{ marginBottom: "10px" }}>
									<TextFields
										errors={errors}
										control={control}
										type="text"
										name="companyName"
										label="Company name*"
										placeholder="Enter Company name"
									/>
								</Box>
								<Box sx={{ display: "flex", gap: "30px", marginBottom: "10px" }}>
									<TextFields
										errors={errors}
										control={control}
										type="text"
										name="representativeFirstName"
										label="Company representative first name*"
										placeholder="Enter Company representative first name"
									/>
									<TextFields
										errors={errors}
										control={control}
										type="text"
										name="representativeLastName"
										label="Company representative last name*"
										placeholder="Enter Company representative last name"
									/>
								</Box>
								<Box sx={{ display: "flex", gap: "30px", marginBottom: "10px" }}>
									<TextFields
										errors={errors}
										control={control}
										name="representativeEmail"
										label="Company representative email*"
										placeholder="Enter Company representative email"
										type="text"
									/>
									<TextFields
										errors={errors}
										control={control}
										name="representativePhoneNumber"
										label="Company representative phone number"
										placeholder=" Enter Company representative phone number"
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
										placeholder="Enter Company finance team email"
										type="text"
									/>
									<TextFields
										errors={errors}
										control={control}
										name="companyEmail"
										label="Company official email"
										placeholder="Enter Company official email"
										type="text"
									/>
								</Box>
								<Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: "16px" }}>
									<Button
										onClick={handleClose}
										sx={{
											color: "#2b2e72",
											borderColor: "#2b2e72",
											textTransform: "none",
											"&:hover": {
												backgroundColor: "transparent",
												color: "#2b2e72",
												borderColor: "#2b2e72",
											},
										}}
									>
										Cancel
									</Button>
									<Button type="submit" variant="contained" sx={saveButtonStyles}>
										Save And Send Link
									</Button>
								</Box>
							</form>
						</DialogContent>
					)}
				</Dialog>
			)) || (
				<div>
					<LoaderWrapper></LoaderWrapper>
					<LoaderContainerWrapper>
						<Triangle
							height="300"
							width="300"
							color="#2b2e72"
							ariaLabel="triangle-loading"
							wrapperStyle={{}}
							wrapperClassName="loader"
							visible={true}
						/>
					</LoaderContainerWrapper>
				</div>
			)}
		</>
	);
};

export default CustomerForm;
