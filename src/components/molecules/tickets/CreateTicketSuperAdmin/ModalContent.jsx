import React from "react";
import ProductDetails from "./ProductDetails";
import ServiceRequestsAndProjectsTable from "./ServiceRequestsAndProjectsTable";
import CompanyName from "../../../atoms/tickets/CreateTicketSuperAdmin/CompanyName";
import { useSelector } from "react-redux";

const ModalContent = () => {
	const customer = useSelector((state) => state.ticketCreation.customer);
	const { company_name} = customer;

	return (
		<div>
			<div className="mb-[2rem]">
				<CompanyName>{company_name}</CompanyName>
			</div>
			<div className="flex gap-[1.25rem]">
				<div className="flex-[60%] space-y-[1rem]">
					<ProductDetails/>
				</div>
				<div className="flex-[40%]">
					<ServiceRequestsAndProjectsTable/>
				</div>
			</div>
		</div>
	);
};

export default ModalContent;
