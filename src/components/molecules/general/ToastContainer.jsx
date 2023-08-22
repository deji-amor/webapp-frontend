import React, { useEffect } from "react";
import Toasts from "../../atoms/general/Toast";
import { useSelector, useDispatch } from "react-redux";
import { UIActions } from "../../../state-manager/reducers/UI/ui";
import { styled } from "@mui/material";

const ToastsContainer = styled("div")`
  position: fixed;
  top: 5rem;
  right: 1.25rem;
  z-index: 1000000;
`;

const ToastContainer = () => {
	const toasts = useSelector((state) => state.ui.toasts);
	const dispatch = useDispatch();
	// Function to remove the oldest toast
	const removeOldestToast = () => {
		if (toasts.length > 0) {
			dispatch(UIActions.hideToast(toasts[0].id));
		}
	};

	// Set up the interval to remove the oldest toast every 5 seconds
	useEffect(() => {
		const intervalId = setInterval(() => {
			removeOldestToast();
		}, 5000); // 5000 milliseconds = 5 seconds

		return () => clearInterval(intervalId);
	}, [toasts, dispatch]);

	return (
		<ToastsContainer className="toast-container space-y-[0.5rem]">
			{toasts.map((toast) => (
				<Toasts
					key={toast.id}
					message={toast.message}
					title={toast.title}
          type={toast.type}
					onClose={() => dispatch(UIActions.hideToast(toast.id))}
				/>
			))}
		</ToastsContainer>
	);
};

export default ToastContainer;
