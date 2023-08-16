import React from "react";
import TicketsTableHeading from "../../components/organisms/tickets/TicketsTableHeading";
import TicketsSearchBar from "../../components/organisms/tickets/TicketsSearchBar";
import TicketsHeaderActiveTicketType from "../../components/organisms/tickets/TicketsHeaderActiveTicketType";
import TicketsTableBody from "../../components/organisms/tickets/TicketsTableBody";
import TicketsTablePagination from "../../components/organisms/tickets/TicketsTablePagination";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import Placeholder from "../../components/molecules/general/Placeholder";
import { Triangle } from "react-loader-spinner";
import { LoaderContainerWrapper, LoaderWrapper } from "../../components/atoms/Password/wrappers";
import { useNavigate } from "react-router-dom";

const Wrapper = styled("div")`
	position: relative;
	overflow-x: auto;

	table {
		border-bottom: 1px solid #828282;
		background: #fff;
		width: 100%;
		text-align: left;
		padding: 0.8rem;
		// border-radius: 0.75rem 0.75rem 0rem 0rem;
	}
`;

const Tickets = () => {
	const {
		// TICKETS tickets,
		successful: ticketsSuccessful,
		error: ticketsError,
		loading: ticketsLoading,
	} = useSelector((state) => state.tickets);

	const {
		customers,
		successful: customersSuccessful,
		error: customersError,
		// LOADING loading: customersLoading,
	} = useSelector((state) => state.customers);

	const navigate = useNavigate();

	if (ticketsLoading)
		return (
			<div>
				<LoaderWrapper></LoaderWrapper>
				<LoaderContainerWrapper>
					<Triangle
						height="150"
						width="150"
						color="#2b2e72"
						ariaLabel="triangle-loading"
						wrapperStyle={{}}
						wrapperClassName="loader"
						visible={true}
					/>
				</LoaderContainerWrapper>
			</div>
		);

	if (ticketsError || customersError) return <p>An error occurred please refresh</p>;

	const createCustomer = () => {
		navigate("../users");
	};

	if (ticketsSuccessful && customersSuccessful && customers.length === 0)
		return (
			<Placeholder
				messageHeader={"seems you don’t have anything here yet!"}
				messageParagraph={
					"No worries, you can start by creating your first user and adding some information about them."
				}
				isThereActionButton={true}
				buttonText={"Create customer"}
				onClick={createCustomer}
			/>
		);

	return (
		<div className="space-y-[1.62rem]">
			<TicketsSearchBar />
			<Wrapper>
				<TicketsHeaderActiveTicketType />
				<table>
					<TicketsTableHeading />
					<TicketsTableBody />
				</table>
				<TicketsTablePagination />
			</Wrapper>
		</div>
	);
};

export default Tickets;
