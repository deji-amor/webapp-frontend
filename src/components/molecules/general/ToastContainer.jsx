import React, { useEffect } from "react";
import Toasts from "../../atoms/general/Toast";
import { useSelector, useDispatch } from "react-redux";
import { UIActions } from "../../../state-manager/reducers/UI/ui";
import { styled } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./toast-notification.css"

const ToastsContainer = styled("div")`
	position: fixed;
	top: 5rem;
	right: 1.25rem;
	z-index: 1000000;
`;

const ToastContainer = () => {
	const toasts = useSelector((state) => state.ui.toasts);
	const dispatch = useDispatch();

	const removeOldestToast = () => {
		if (toasts.length > 0) {
			dispatch(UIActions.hideToast(toasts[0].id));
		}
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			removeOldestToast();
		}, 5000);

		return () => clearInterval(intervalId);
	}, [toasts, dispatch]);

	return (
		<ToastsContainer className="toast-container space-y-[0.5rem]">
			<TransitionGroup>
				{toasts.map((toast) => (
					<CSSTransition
						key={toast.id}
						timeout={500} // Adjust the timeout as needed
						classNames="notification-toast"
					>
						<Toasts
							message={toast.message}
							title={toast.title}
							type={toast.type}
							onClose={() => dispatch(UIActions.hideToast(toast.id))}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</ToastsContainer>
	);
};

export default ToastContainer;
