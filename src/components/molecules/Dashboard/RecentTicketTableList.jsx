import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RecentTicketTableText from "../../atoms/Dashboard/RecentTicketTableText";
import { useSelector } from "react-redux";

const RecentTicketTableList = () => {
	const analyticsData = useSelector((state) => state.dashboard.analyticsData);

	const recentTickets = analyticsData?.recentTickets || [];

	// 	const [isModalOpen, setIsModalOpen] = useState(false);
	//   const [selectedTicket, setSelectedTicket] = useState(null);

	//   const handleIDClick = (ticket) => {
	//     setSelectedTicket(ticket);
	//     setIsModalOpen(true);
	//   };

	//   const closeModal = () => {
	//     setSelectedTicket(null);
	//     setIsModalOpen(false);
	//   };

	const renderStatus = (ticket) => {
		if (ticket.status === "Done") {
			return (
				<>
					Done <CheckCircleIcon className="text-[green]" />
				</>
			);
		} else {
			return ticket.status || "N/A";
		}
	};

	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "short", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	return (
		<>
			{recentTickets.map((ticket, index) => (
				<tr key={index} className="bg-white border-b hover:bg-gray-50">
					<RecentTicketTableText
						isID={true}
						// onClick={() => handleIDClick(ticket)}
					>
						{ticket.id || "N/A"}
					</RecentTicketTableText>
					<RecentTicketTableText>{ticket.ticket_type || "N/A"}</RecentTicketTableText>
					<RecentTicketTableText>{ticket.ticket_form || "N/A"}</RecentTicketTableText>
					<RecentTicketTableText>{formatDate(ticket.created_at) || "N/A"}</RecentTicketTableText>
					<RecentTicketTableText>{renderStatus(ticket)}</RecentTicketTableText>
				</tr>
			))}
		</>
	);
};

RecentTicketTableList.propTypes = {};

export default RecentTicketTableList;
