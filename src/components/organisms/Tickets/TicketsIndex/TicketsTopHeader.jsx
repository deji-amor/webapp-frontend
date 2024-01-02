import React, { useState } from "react";
import { ticketsActions } from "../../../../state-manager/reducers/tickets/tickets";
import ClickAwayComp from "../../../atoms/general/ClickAwayComp";
import TicketHeading from "../../../atoms/Tickets/Typography/Headers/TicketHeading";
import SearchInput from "../../../atoms/Tickets/Input/SearchInput";
import GeneralActionBtn from "../../../atoms/Tickets/Button/GeneralActionBtn";
import SelectCustomerAndTicketsDropdown from "../../../molecules/Tickets/TicketIndex/SelectCustomerAndTicketsDropdown";
import { useSelector, useDispatch } from "react-redux";

const TicketsTopHeader = () => {
	const dispatch = useDispatch();
	const [showDropdown, setShowDropdown] = useState(false);
	const { searchTicketsValue } = useSelector((state) => state.tickets);

	const handleChange = (val) => {
		dispatch(ticketsActions.updateField({ key: "searchTicketsValue", value: val }));
	};

	return (
		<div className="flex items-center justify-between mb-[1.62rem]">
			<TicketHeading>All Tickets</TicketHeading>
			<div className="flex gap-[2rem]">
				<SearchInput
					placeholder="Search Tickets"
					value={searchTicketsValue}
					onChange={handleChange}
				/>
				<div className="relative">
					<ClickAwayComp onClickAway={() => setShowDropdown(false)}>
						<GeneralActionBtn onClick={() => setShowDropdown((prevVal) => !prevVal)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
							>
								<path
									d="M6 0C6.19891 0 6.38968 0.0790178 6.53033 0.21967C6.67098 0.360322 6.75 0.551088 6.75 0.75V5.25H11.25C11.4489 5.25 11.6397 5.32902 11.7803 5.46967C11.921 5.61032 12 5.80109 12 6C12 6.19891 11.921 6.38968 11.7803 6.53033C11.6397 6.67098 11.4489 6.75 11.25 6.75H6.75V11.25C6.75 11.4489 6.67098 11.6397 6.53033 11.7803C6.38968 11.921 6.19891 12 6 12C5.80109 12 5.61032 11.921 5.46967 11.7803C5.32902 11.6397 5.25 11.4489 5.25 11.25V6.75H0.75C0.551088 6.75 0.360322 6.67098 0.21967 6.53033C0.0790178 6.38968 0 6.19891 0 6C0 5.80109 0.0790178 5.61032 0.21967 5.46967C0.360322 5.32902 0.551088 5.25 0.75 5.25H5.25V0.75C5.25 0.551088 5.32902 0.360322 5.46967 0.21967C5.61032 0.0790178 5.80109 0 6 0Z"
									fill="white"
								/>
							</svg>
							<span>Add New Ticket</span>
						</GeneralActionBtn>
						{showDropdown && (
							<SelectCustomerAndTicketsDropdown className="absolute top-full right-0" />
						)}
					</ClickAwayComp>
				</div>
			</div>
		</div>
	);
};

export default TicketsTopHeader;
