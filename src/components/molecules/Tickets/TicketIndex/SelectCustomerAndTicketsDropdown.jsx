import React, { useMemo, useState } from "react";
import { createTicketActions } from "../../../../state-manager/reducers/tickets/ticketCreation";
import SearchInput from "../../../atoms/Tickets/Input/SearchInput";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import RecursiveSelectTicketType from "./RecursiveSelectTicketType";

const SelectCustomer = ({ children, className }) => (
	<p
		className={twMerge(
			`text-[#333] text-sm not-italic font-medium leading-5 tracking-[0.00938rem] ${className}`
		)}
	>
		{children}
	</p>
);

const WhichCustomer = ({ children, className }) => (
	<p
		className={twMerge(
			`text-[#706E6E] text-xs not-italic font-normal leading-5 tracking-[0.00938rem] ${className}`
		)}
	>
		{children}
	</p>
);

const ShowCustomerListBtn = ({ children, className, active, onClick }) => (
	<button
		onClick={onClick}
		className={twMerge(
			`${
				!active ? "text-[rgba(43,46,114,0.40)]" : "text-[#2B2E72]"
			} text-sm not-italic font-semibold leading-5 tracking-[0.00938rem] flex items-center gap-1 ${!active && "cursor-not-allowed"} ${className}`
		)}
	>
		{children}
	</button>
);

const HR = ({ className }) => (
	<div className={`w-full max-w-[7.5rem] border border-[#333] ${className}`} />
);

const PlusIcon = ({ fill, active }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
		<path
			d="M6 0C6.19891 0 6.38968 0.0790178 6.53033 0.21967C6.67098 0.360322 6.75 0.551088 6.75 0.75V5.25H11.25C11.4489 5.25 11.6397 5.32902 11.7803 5.46967C11.921 5.61032 12 5.80109 12 6C12 6.19891 11.921 6.38968 11.7803 6.53033C11.6397 6.67098 11.4489 6.75 11.25 6.75H6.75V11.25C6.75 11.4489 6.67098 11.6397 6.53033 11.7803C6.38968 11.921 6.19891 12 6 12C5.80109 12 5.61032 11.921 5.46967 11.7803C5.32902 11.6397 5.25 11.4489 5.25 11.25V6.75H0.75C0.551088 6.75 0.360322 6.67098 0.21967 6.53033C0.0790178 6.38968 0 6.19891 0 6C0 5.80109 0.0790178 5.61032 0.21967 5.46967C0.360322 5.32902 0.551088 5.25 0.75 5.25H5.25V0.75C5.25 0.551088 5.32902 0.360322 5.46967 0.21967C5.61032 0.0790178 5.80109 0 6 0Z"
			fill={fill}
			fillOpacity={active ? "1" : "0.4"}
		/>
	</svg>
);

const CustomerListContainer = ({ children, className }) => (
	<motion.ul
		initial={{ opacity: 0, translateY: "-1rem" }}
		animate={{ opacity: 1, translateY: "0rem" }}
		transition={{ duration: 0.5 }}
		className={twMerge(
			`shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] max-w-full rounded-sm bg-white divide-y-[0.1px] divide-gray-300 max-h-[22rem] overflow-y-auto ${className}`
		)}
	>
		{children}
	</motion.ul>
);

const CustomerItem = ({ customer, onClick }) => {
	const handleSet = (e) => {
		e.stopPropagation();
		onClick();
	};

	return (
		<li
			onClick={handleSet}
			className="px-6 py-4 cursor-pointer bg-white hover:bg-gray-50 transition duration-300 ease-in-out text-left"
		>
			<p className="text-[#2B2E72] text-sm not-italic font-medium leading-5 truncate">
				{customer?.first_name} {customer?.last_name}
			</p>
			<p className="text-[#706E6E] text-xs not-italic font-normal leading-5 truncate">
				{customer.email}
			</p>
		</li>
	);
};

const SelectCustomerAndTicketsDropdown = ({ className }) => {
	const dispatch = useDispatch();
	const { customers } = useSelector((state) => state.customers);
	const [selectedCustomer, setSelectedCustomer] = useState(null);
	const [customerFilter, setCustomerFilter] = useState("");
	const [showTicketsType, setShowTicketsType] = useState(false);

	const changeSelectedCustomerHandler = (customer) => {
		setSelectedCustomer(customer);
		setCustomerFilter(customer?.email);
		dispatch(createTicketActions.updateField({ key: "selectedCustomerId", value: customer?.id }));
	};

	const filteredCustomers = useMemo(() => {
		return customers?.filter((customer) => {
			if (!customerFilter) return false;
			const keywords = Object?.values(customer)?.join("")?.toLowerCase();
			return keywords?.includes(customerFilter?.toLowerCase());
		});
	}, [customers, customerFilter]);

	const validCustomerSelected = selectedCustomer?.email === customerFilter;

	return (
		<motion.div
			initial={{ opacity: 0, translateY: "-1rem" }}
			animate={{ opacity: 1, translateY: "0rem" }}
			transition={{ duration: 0.5 }}
			className={twMerge(
				`relative inline-flex flex-col items-start z-[1000] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] pt-1 pb-4 px-3 py-3 rounded-xl border-[0.5px] border-solid border-black bg-white translate-x-2 ${className}`
			)}
		>
			<SelectCustomer className="mb-[0.62rem]">Select Customer</SelectCustomer>
			<HR className="mb-[0.5rem]" />
			<WhichCustomer className="mb-[0.5rem]">Which customer is this ticket for?</WhichCustomer>
			<SearchInput
				value={customerFilter}
				onChange={setCustomerFilter}
				placeholder="Search Customer"
				className="flex w-[15.5625rem] items-center gap-6 px-3.5 py-2 rounded-md bg-[#EEE] text-[#706E6E] text-sm not-italic font-normal leading-5 tracking-[0.00938rem]"
			/>
			<div className="relative w-full">
				{!validCustomerSelected && (
					<CustomerListContainer className="absolute w-full top-0 left-0 z-10">
						{filteredCustomers.map((customer) => (
							<CustomerItem
								key={customer.id}
								customer={customer}
								onClick={() => changeSelectedCustomerHandler(customer)}
							/>
						))}
					</CustomerListContainer>
				)}
				<ShowCustomerListBtn
					className="mt-4"
					active={validCustomerSelected}
					onClick={() => setShowTicketsType((pv) => !pv)}
				>
					Create Ticket <PlusIcon fill={"#2B2E72"} active={validCustomerSelected} />
				</ShowCustomerListBtn>
			</div>
			{showTicketsType && validCustomerSelected && (
				<RecursiveSelectTicketType className="absolute right-0 top-full z-[1000]" />
			)}
		</motion.div>
	);
};

export default SelectCustomerAndTicketsDropdown;

SelectCustomerAndTicketsDropdown.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

SelectCustomer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

WhichCustomer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

ShowCustomerListBtn.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	className: PropTypes.string,
	active: PropTypes.bool,
};

PlusIcon.propTypes = {
	fill: PropTypes.string,
	active: PropTypes.bool,
};

HR.propTypes = {
	className: PropTypes.string,
};

CustomerListContainer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

CustomerItem.propTypes = {
	customer: PropTypes.object,
	onClick: PropTypes.func,
};
