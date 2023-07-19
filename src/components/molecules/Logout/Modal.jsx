import React from "react";
import Title from "../../atoms/Logout/Title";
import Message from "../../atoms/Logout/Message";
import ButtonUnHighlighted from "../../atoms/Logout/ButtonUnHighlighted";
import ButtonHighlighted from "../../atoms/Logout/ButtonHighlighted";
import ModalWrapper from "../../atoms/Logout/ModalWrapper";
import logOut from "../../atoms/Logout/Logout.svg";
import { useDispatch } from "react-redux";
import { logoutActions } from "../../../state-manager/reducers/logout/logout";

const Modal = () => {
	const dispatch = useDispatch();
	const handleHideLogoutModal = () => {
		dispatch(logoutActions.toggleLogoutModal());
	};

	const handleLogout = () => {
		console.log("logout here");
	};

	return (
		<ModalWrapper>
			<div className="w-[3rem] h-[3rem] rounded-full bg-[#ccc] flex items-center justify-center">
				<img src={logOut} />
			</div>
			<div className="space-y-[0.5rem]">
				<Title>Logout</Title>
				<Message>Are you sure you want o logout?</Message>
			</div>
			<div className="flex items-center justify-between gap-[0.75rem]">
				<ButtonUnHighlighted onClick={handleHideLogoutModal}>Discard</ButtonUnHighlighted>
				<ButtonHighlighted onClick={handleLogout}>Logout</ButtonHighlighted>
			</div>
		</ModalWrapper>
	);
};

export default Modal;
