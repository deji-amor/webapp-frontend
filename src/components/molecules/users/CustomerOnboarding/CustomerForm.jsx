import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Dialog, DialogContent } from "@mui/material";
import { useForm } from "react-hook-form";
import TextFields from "../../users/CustomerOnboarding/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../atoms/users/CustomerOnboarding/Schema";
import CustomButton from "../../../atoms/Password/customButton";
import SuccessModal from "../../../atoms/users/CustomerOnboarding/SuccessModal";
import { useDispatch, useSelector } from "react-redux";
import {
	createCustomer,
	SET_RESPONSE_NULL,
	fetchCustomers,
} from "../../../../state-manager/reducers/users/customers/customers";
// IMPORT import { LoaderWrapper, LoaderContainerWrapper } from "../../../atoms/Password/wrappers";
// IMPORT import { Triangle } from "react-loader-spinner";
import ErrorCard from "../../../molecules/Password/customErrorCard";

const CustomerForm = ({ open, onClose }) => {
	const dispatch = useDispatch();

	const {
		handleSubmit,
		control,
		formState: { errors, isValid },
		reset,
		getValues,
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

	const { response, creationSuccess, customers } = useSelector((state) => state.customers);
	console.log(response)
	const [loading, setLoading] = useState(false);
	const [serverError, setServerError] = useState(false);

	useEffect(() => {
		if (
			response === "Email already used by another user!" ||
			response === "Company name already exists!"
		) {
			setLoading(false);
			const values = getValues();
			reset(values, { keepDefaultValues: true });
			setServerError(true);
			return;
		}

		const timeout = setTimeout(() => {
			if (creationSuccess && loading) {
				setLoading(false);
				setSuccessModalOpen(true);
				reset({});
			}
		}, 2000);

		return () => clearTimeout(timeout);
	}, [creationSuccess, loading, reset, response, getValues, customers]);

	const handleClose = () => {
		onClose();
		setLoading(false);
		reset();
		setServerError(false);
	};

	const [successModalOpen, setSuccessModalOpen] = useState(false);

	const handleFormSubmit = async (data) => {
		dispatch(SET_RESPONSE_NULL());
		setServerError(false);
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
			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
				{(response === "Email already used by another user!" && (
					<ErrorCard
						align="left"
						error={serverError}
						titleSize="16px"
						size="14px"
						titleColor="#D73D3D"
						color="rgba(215, 61, 61, 0.50);"
						title="Email has already been used"
						style={{ zIndex: "100", top: "8px", right: "0" }}
						description="The Representative email you entered already exist."
					/>
				)) ||
					(response === "Company name already exists!" && (
						<ErrorCard
							align="left"
							error={serverError}
							titleSize="16px"
							size="14px"
							titleColor="#D73D3D"
							color="rgba(215, 61, 61, 0.50);"
							title="Company name already exist"
							style={{ zIndex: "100", top: "8px", right: "0" }}
							description="Company name has been used by another user."
						/>
					))}
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
								<CustomButton butText="Save And Send Link" loading={loading} butType={"submit"} fontSize={"8px"} style={{width: "200px"}} />
							</Box>
						</form>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
};

export default CustomerForm;


{/* <Button type="submit" variant="contained" sx={saveButtonStyles}>
									Save And Send Link
								</Button> */}
// DIV || (
// DIV 	<div>
// DIV 		<LoaderWrapper></LoaderWrapper>
// DIV 		<LoaderContainerWrapper>
// DIV 			<Triangle
// DIV 				height="150"
// DIV 				width="150"
// DIV 				color="#2b2e72"
// DIV 				ariaLabel="triangle-loading"
// DIV 				wrapperStyle={{}}
// DIV 				wrapperClassName="loader"
// DIV 				visible={true}
// DIV 			/>
// DIV 		</LoaderContainerWrapper>
// DIV 	</div>
// DIV )} */}