import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RecentTicketTableText from "../../atoms/Dashboard/RecentTicketTableText";

const RecentTicketTableList = (props) => {
	// const [isModalOpen, setIsModalOpen] = useState(false);

	// const handleIDClick = () => {
	// 	setIsModalOpen(true);
	// };

	// const closeModal = () => {
	// 	setIsModalOpen(false);
	// };

	return (
		<tr className="bg-white border-b hover:bg-gray-50">
			<RecentTicketTableText
				isID={true}
				// onClick={handleIDClick}
			>
				OlA0123
			</RecentTicketTableText>
			<RecentTicketTableText>Project Request</RecentTicketTableText>
			<RecentTicketTableText>Project Management</RecentTicketTableText>
			<RecentTicketTableText>Nov 26 2022</RecentTicketTableText>
			<RecentTicketTableText>
				Done <CheckCircleIcon className="text-[green]" />
			</RecentTicketTableText>
		</tr>
	);
};

RecentTicketTableList.propTypes = {};

export default RecentTicketTableList;
