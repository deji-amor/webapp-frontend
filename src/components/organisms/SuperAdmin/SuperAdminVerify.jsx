import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { superAdminSendEmail } from "../../../state-manager/reducers/superAdminOnboarding/superadmin";
import { useDispatch, useSelector } from "react-redux";
import EmailIcon from "../../../assets/superAdminOnboading/Vector.png";
import { Box, Button, Typography, styled } from "@mui/material";

const SuperAdminVerify = () => {
	const Typography = styled("p")`
		color: #2b2e72;
		text-align: center;
		font-size: 32px;
		font-style: normal;
		font-weight: 600;
		line-height: 136.023%; /* 43.527px */
	`;
	const Text = styled("p")`
		color: #828282;
		text-align: center;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	`;
	const Button = styled("p")`
		display: flex;
		padding: 16px 24px;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		align-self: stretch;
		border-radius: 8px;
		background: #2b2e72;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		color: var(--theme-white-default, #fff);
		line-height: 14px; /* 70% */
		width: 425px;
	`;

	const { email } = useSelector(state => state.superAdmin);
	const dispatch = useDispatch()

	const handleResubmit = (e) => {
		e.preventDefault();

		try {
			dispatch(superAdminSendEmail(email.email))
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				fontFamily: "Poppins",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
				gap: "30px",
				flexShrink: "0",
				minHeight: "80vh",
			}}
		>
			<img src={EmailIcon} style={{ width: "56px", flexShrink: "0" }} />
			<div>
				<Typography component={"h3"}>
					A Verification Email <br />
					has been sent to your Inbox.
				</Typography>
				<Text>
					We sent an email to usera@mail.com, please click on <br />
					the link in the email to complete your registration.
				</Text>
			</div>
			<div>
				<p sx={{ fontSize: "18px", color: "#282828", fontWeight: "400" }}>
					Didn’t receive an email?
				</p>
				<Button variant="contained" color="primary" onClick={handleResubmit}>
					Resend Link
				</Button>
			</div>
		</Box>
	);
};

export default SuperAdminVerify;
