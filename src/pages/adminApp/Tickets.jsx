import React from "react";
import { Outlet } from "react-router-dom";
import AllTicketsPage from "../../components/organisms/Tickets/TicketsIndex/AllTicketsPage";

const Tickets = () => {
	return (
		<>
			<Outlet />
			<AllTicketsPage />
		</>
	);
};

export default Tickets;
