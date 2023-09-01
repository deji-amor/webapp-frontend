import React, { useEffect, useMemo, useState } from "react";
import { styled } from "@mui/material";
import { createTicketActions } from "../../../state-manager/reducers/tickets/ticketCreation";
import TopLevel from "../../atoms/tickets/CreateTicketSuperAdmin/MultipleDropdown";
import AddIcon from "@mui/icons-material/Add";
import Loader from "./Loader";
import SearchBar from "../../molecules/tickets/SearchBar";
import { ticketsActions } from "../../../state-manager/reducers/tickets/tickets";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled("div")`
	position: absolute;
	right: 0;
	z-index: 10;
	display: inline-flex;
	padding: 0.25rem 0.75rem 1rem 0.75rem;
	width: 18rem;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 0.75rem;
	border: 0.5px solid #000;
	background: #fff;
	box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Head = styled("h3")`
	color: #333;
	font-family: "Poppins", sans-serif;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem; /* 142.857% */
	letter-spacing: 0.00938rem;
	border-bottom-width: 2px;
	border-bottom-color: #706e6e;
	padding-bottom: 0.5rem /* 8px */;
`;

const Info = styled("p")`
	color: #706e6e;
	font-family: "Poppins", sans-serif;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.25rem; /* 166.667% */
	letter-spacing: 0.00938rem;
`;

const Actions = styled("button")`
	color: ${({ isDisabled }) => (isDisabled ? "rgba(43, 46, 114, 0.4)" : "rgba(43, 46, 114, 1)")};
	font-family: Poppins;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.25rem; /* 142.857% */
	letter-spacing: 0.00938rem;
	cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
	display: inline-block;
`;

const ListWrapper = styled("div")`
	z-index: 10;
  position: absolute,
  top: 7rem;
  left: 0rem;
  width: 100%;
	background: #fff;
`;

const Item = styled("div")`
	padding: 0.5rem 1.5rem;
	z-index: 10;
	background: ${({ active }) => (active ? "rgba(80, 87, 229, 0.08)" : "transparent")};

	&:hover {
		background: rgba(80, 87, 229, 0.08);
		cursor: pointer;
	}

	h3 {
		color: #2b2e72;
		font-family: Poppins;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.25rem; /* 142.857% */
	}

	p {
		color: #706e6e;
		font-family: Poppins;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.25rem; /* 166.667% */
	}
`;

const TicketsSearchCustomer = () => {
	const dispatch = useDispatch();
	const searchCustomersValue = useSelector((state) => state.tickets.searchCustomersValue);
	const customers = useSelector((state) => state.customers.customers);
	const { loading, successful } = useSelector((state) => state.customers);
	const [showTopLevel, setShowTopLevel] = useState(false);
	const [showCustomersList, setShowCustomerList] = useState(false);

	const changeCustomersValueHandler = (value) => {
		dispatch(ticketsActions.updateField({ key: "searchCustomersValue", value: value }));
	};

	const customersValueChange = (companyName) => {
		dispatch(ticketsActions.updateField({ key: "searchCustomersValue", value: companyName }));
	};

	const activeCustomer = useMemo(() => {
		const activeCustomer = customers.find(
			(customer) => customer.company_name === searchCustomersValue
		);
		return activeCustomer;
	}, [searchCustomersValue, customers]);

	const filteredCustomers = useMemo(() => {
		return customers
			.filter(
				({
					first_name,
					last_name,
					email,
					company_name,
					company_finance_email,
					company_email,
					phone_number,
				}) => {
					if (!searchCustomersValue) return true;
					const searchString = `${first_name} ${last_name} ${email} ${company_name} ${company_finance_email} ${company_email} ${phone_number}`;
					const joined = searchString.toLocaleLowerCase();
					return joined.includes(searchCustomersValue.toLocaleLowerCase().trim());
				}
			)
			.filter(({status}) => status === "active")
	}, [searchCustomersValue, customers]);

	useEffect(() => {
		if(!activeCustomer){
			setShowTopLevel(false)
		}
		if (!searchCustomersValue) {
			setShowCustomerList(false);
			return;
		}
		if (activeCustomer) {
			dispatch(createTicketActions.updateField({ key: "customerId", value: activeCustomer.user_id }));
			setShowCustomerList(false);
		} else setShowCustomerList(true);
	}, [searchCustomersValue]);

	const isCreateTicketButtonDisabled = !activeCustomer;

	return (
		<Wrapper>
			<div className="w-full absolute top-full left-0 z-100">
				{showTopLevel && (
					<div className="absolute top-[115%] left-0 bg-white z-[100]">
						<TopLevel />
					</div>
				)}
			</div>
			<div className="w-full absolute top-[5rem] right-full z-100"></div>
			<div className="space-y-2 w-full relative">
				<Head>Select Customer</Head>
				{(loading && <Loader>Fetching customers</Loader>) ||
					(successful && customers.length === 0 && (
						<Info>You have no customers, go add create one!</Info>
					)) || (
						<div className="space-y-2">
							<Info>Which customer is this ticket for?</Info>
							<div className="">
								<SearchBar
									placeholder={"Search Customer"}
									value={searchCustomersValue}
									inverted={true}
									onChange={changeCustomersValueHandler}
								/>
								{showCustomersList &&
									((filteredCustomers.length > 0 && searchCustomersValue && (
										<ListWrapper className="absolute w-full top-[7rem] max-h-[18rem] overflow-y-auto left-0 bg-white">
											{filteredCustomers.map((customer) => (
												<Item
													key={customer.id}
													className=""
													active={searchCustomersValue === customer.company_name}
													onClick={() => customersValueChange(customer.company_name)}
												>
													<h3 className="truncate">
														{customer.company_name}
													</h3>
													<p>{customer.company_email}</p>
												</Item>
											))}
										</ListWrapper>
									)) || <Info>No such customer found</Info>)}
							</div>
							<Actions
								disabled={isCreateTicketButtonDisabled}
								isDisabled={isCreateTicketButtonDisabled}
								onClick={() => setShowTopLevel((pv) => !pv)}
							>
								Create Ticket <AddIcon fontSize="small" />
							</Actions>
						</div>
					)}
			</div>
			<div className="w-full absolute top-[5rem] right-full z-100"></div>
		</Wrapper>
	);
};

export default TicketsSearchCustomer;
