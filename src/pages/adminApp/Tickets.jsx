import React from "react";
import { Outlet } from "react-router-dom";
import AllTicketsPage from "../../components/organisms/Tickets/TicketsIndex/AllTicketsPage";
// import THead1 from '../../components/atoms/Tickets/Typography/Headers/TicketHeading'
// import Button from '../../components/atoms/Tickets/Button/TBut1'
// import SearchInput from '../../components/atoms/Tickets/Input/SearchInput'
// import GeneralActionBtn from '../../components/atoms/Tickets/Button/GeneralActionBtn'
// import SelectCustomerAndTicketsDropdown from '../../components/molecules/Tickets/SelectCustomerAndTicketsDropdown'

const Tickets = () => {
	return (
		<>
			<Outlet />
			<AllTicketsPage />
		</>
		// <div className='space-y-4'>
		// 	<THead1 className="">All Tickets</THead1>
		// 	<SearchInput placeholder="Search Tickets" />
		// 	<GeneralActionBtn>Add New Ticket</GeneralActionBtn>
		// 	<SelectCustomerAndTicketsDropdown/>
		// 	{/* <Button size="medium" intent="primary">Hey</Button> */}
		// 	{/* <hr /> */}
		// 	{/* <Button size="small" intent="secondary">Hey</Button> */}
		// </div>
	);
};

export default Tickets;
