import React from "react";
import ProductDetails from "./ProductDetails";
import ServiceRequestsAndProjectsTable from "./ServiceRequestsAndProjectsTable";
import CompanyName from "../../../atoms/users/CreateTicketSuperAdmin/CompanyName";

const ModalContent = () => {
	return (
		<div>
			<div className="mb-[2rem]">
				<CompanyName>Servirox Manufacturing</CompanyName>
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
