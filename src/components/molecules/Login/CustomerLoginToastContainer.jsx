import React, { useState } from "react";
import Toasts from "../../atoms/Login/Toasts";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { loginCustomerActions } from "../../../state-manager/reducers/login/loginCustomer";

const CustomerLoginToastContainer = (props) => {
	const toasts = useSelector((state) => state.loginCustomer.toasts);
	const dispatch = useDispatch();

	return (
		<div className="toast-container">
			{toasts.map((toast) => (
				<Toasts
					key={toast.id}
					message={toast.message}
					title={toast.title}
					onClose={() => dispatch(loginCustomerActions.hideToast(toast.id))}
				/>
			))}
		</div>
	);
};

CustomerLoginToastContainer.propTypes = {};

export default CustomerLoginToastContainer;
