import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RecentTicketTableText from "../../atoms/Dashboard/RecentTicketTableText";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RecentTicketTableList = () => {
	const analyticsData = useSelector((state) => state.dashboard.analyticsData);
	const navigate = useNavigate();

	const recentTickets = analyticsData?.recentTickets || [];

	const capitalizeFirstLetter = (str) => {
		return str
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(" ");
	};

	const renderStatus = (ticket) => {
		let statusIcon = null;
		let statusText = "N/A";

		if (ticket.status === "Done") {
			statusIcon = <CheckCircleIcon className="text-[green]" />;
			statusText = "Done";
		} else if (ticket.status) {
			statusText = capitalizeFirstLetter(ticket.status);
		}

		return (
			<>
				{statusText} {statusIcon}
			</>
		);
	};

	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "short", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	return (
		<>
			{recentTickets.map((ticket, index) => (
				<tr
					key={index}
					className="bg-white border-b hover:bg-gray-50"
					onClick={() => navigate(`/admin/tickets/view/detail/${ticket.id}`)}
					style={{ cursor: "pointer" }}
				>
					<RecentTicketTableText isID={true}>{ticket.id || "N/A"}</RecentTicketTableText>
					<RecentTicketTableText>
						{capitalizeFirstLetter(ticket.ticket_type) || "N/A"}
					</RecentTicketTableText>
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
