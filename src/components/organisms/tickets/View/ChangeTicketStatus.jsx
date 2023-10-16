import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { ticketsActions } from "../../../../state-manager/reducers/tickets/tickets";
import { changeATicketStatus, ticketDetailsActions } from "../../../../state-manager/reducers/tickets/ticketDetails";
import { UIActions } from "../../../../state-manager/reducers/UI/ui";

const Box = styled("button")`
	display: flex;
	height: 2.5rem;
	padding: 0.5rem 0.75rem;
	align-items: center;
	gap: 0.25rem;
	flex-shrink: 0;
	border-radius: 0.5rem;
	background: #2b2e72;
	color: #fff;
	font-family: Poppins;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2.5rem; /* 222.222% */
	cursor: ${({disabled}) => disabled ? "not-allowed" : "pointer"};
`;

const DropdownWrapper = styled("div")`
	position: absolute;
	display: flex;
	// width: 10.0625rem;
	padding: 0.5rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 0.75rem;
	background: #fff;
	box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Item = styled("button")`
	display: flex;
	padding: 0.75rem 1rem;
	align-items: center;
	align-self: stretch;
	color: #2b2e72;
	font-family: Poppins;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem; /* 142.857% */
	cursor: pointer;
`;

const DownIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
		<path
			d="M14 18.4883C14.3076 18.4795 14.5889 18.3652 14.8174 18.1191L21.4971 11.2812C21.6904 11.0879 21.7959 10.8418 21.7959 10.5518C21.7959 9.97168 21.3389 9.50586 20.7588 9.50586C20.4775 9.50586 20.2051 9.62012 20.0029 9.82227L14.0088 15.9834L7.99707 9.82227C7.79492 9.62891 7.53125 9.50586 7.24121 9.50586C6.66113 9.50586 6.2041 9.97168 6.2041 10.5518C6.2041 10.8418 6.30957 11.0879 6.50293 11.2812L13.1914 18.1191C13.4287 18.3652 13.6924 18.4883 14 18.4883Z"
			fill="white"
		/>
	</svg>
);

function capitalizeTitleCase(inputString) {
	if (inputString.length === 0) {
		return inputString;
	} else {
		// Split the string into words
		const words = inputString.split(" ");

		// Capitalize the first letter of each word and convert the rest to lowercase
		const capitalizedWords = words.map(
			(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		);

		// Join the words back together
		return capitalizedWords.join(" ");
	}
}

const ChangeTicketStatus = () => {
	const params = useParams();
	const { ticketId } = params;
	const { loading, statuses, successful, error, data, errorMessage } = useSelector(
		(state) => state.ticketDetails
	);
	const { tickets } = useSelector((state) => state.tickets);
	const ticketToEdit = tickets.find((ticket) => +ticket.id === +ticketId);
	const currentStatus = ticketToEdit.status;
	const dispatch = useDispatch();

	const [showStatutes, setShowStatutes] = useState(false);

	const showStatutesHandler = (event) => {
		event.stopPropagation();
		setShowStatutes((pv) => !pv);
	};

	const changeTicketStatusHandler = (status) => {
		setShowStatutes(false);
		dispatch(changeATicketStatus({ ticketId: ticketId, status: status.toUpperCase() }));
	};

	useEffect(() => {
		if (successful === true) {
			if (data) dispatch(ticketsActions.replaceTicket(data));
			dispatch(
				ticketDetailsActions.changeMultipleState([
					{ key: "successful", value: null },
					{ key: "error", value: null },
				])
			);
		}
		if (error === true) {
			console.log("error");
			dispatch(
				ticketDetailsActions.changeMultipleState([
					{ key: "successful", value: null },
					{ key: "error", value: null },
				])
			);
		}
	}, [error, successful]);

	useEffect(() => {
		const listener = () => {
			const target = document.body.closest(`#ticketStatutesDropdown`);
			if (!target) setShowStatutes(false);
		};

		document.body.addEventListener("click", listener);

		return () => {
			document.body.removeEventListener("click", listener);
		};
	}, []);

	return (
		<div className="relative" id={"ticketStatutesDropdown"}>
			<Box disabled={loading} className="" onClick={showStatutesHandler}>
				{loading ? (
					<Loader>Updating ticket</Loader>
				) : (
					<>
						<span className="">{capitalizeTitleCase(currentStatus).replace("-", "")}</span>
						<span>
							<DownIcon />
						</span>
					</>
				)}
			</Box>
			{showStatutes && (
				<DropdownWrapper className="top-[115%] right-0 min-w-max divide-y">
					{statuses
						.filter((status) => status.toLowerCase() !== currentStatus.toLowerCase())
						.map((status) => (
							<Item onClick={() => changeTicketStatusHandler(status)} key={status}>
								{status}
							</Item>
						))}
				</DropdownWrapper>
			)}
		</div>
	);
};

export default ChangeTicketStatus;
