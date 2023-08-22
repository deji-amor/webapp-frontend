import React from "react";
import Toasts from "../../atoms/Login/Toasts";
import { useSelector, useDispatch } from "react-redux";
import { loginAdminActions } from "../../../state-manager/reducers/login/loginAdmin";
import { styled } from "@mui/material";

const AdminLoginToastContainer = (props) => {
	const toasts = useSelector((state) => state.loginAdmin.toasts);
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
					onClose={() => dispatch(loginAdminActions.hideToast(toast.id))}
				/>
			))}
		</ToastsContainer>
	);
};

AdminLoginToastContainer.propTypes = {};

export default AdminLoginToastContainer;
