import React, { useState } from "react";
import Toasts from "../../atoms/Login/Toasts";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { loginCustomerActions } from "../../../state-manager/reducers/login/loginCustomer";

const CustomerLoginToastContainer = (props) => {
	const toasts = useSelector((state) => state.loginCustomer.toasts);
	const dispatch = useDispatch();

	const ToastsContainer = styled("div")`
		position: fixed;
		top: 1.25rem;
		right: 1.25rem;
		z-index: 100;
	`;

	return (
		<ToastsContainer className="toast-container space-y-[0.5rem]">
			{toasts.map((toast) => (
				<Toasts
					key={toast.id}
					message={toast.message}
					title={toast.title}
					onClose={() => dispatch(loginCustomerActions.hideToast(toast.id))}
				/>
			))}
		</ToastsContainer>
	);
};

CustomerLoginToastContainer.propTypes = {};

export default CustomerLoginToastContainer;
