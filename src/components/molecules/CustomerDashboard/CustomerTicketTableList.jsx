import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RecentTicketTableText from "../../atoms/Dashboard/RecentTicketTableText";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const CustomerTicketTableList = ({ tickets }) => {
	const navigate = useNavigate();

	const capitalizeFirstLetter = (str) => {
		return str
			? str
				.split(" ")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
				.join(" ")
			: "N/A";
	};

	const renderStatus = (ticket) => {
		let statusIcon = null;
		let statusText = "N/A";

		switch (ticket.status) {
			case "DONE":
				statusIcon = <CheckCircleIcon sx={{ color: "green", fontSize: 20, marginLeft: "10px" }} />;
				statusText = "Done";
				break;
			case "IN-PROGRESS":
				statusText = "In Progress";
				break;
			case "TECHNICIAN ENROUTE":
				statusText = "Technician Enroute";
				break;
			case "PENDING":
				statusText = "Pending";
				break;
			default:
				if (ticket.status) {
					statusText = capitalizeFirstLetter(ticket.status);
				}
		}

		return (
			<div style={{ display: "flex", alignItems: "center" }}>
				{statusText} {statusIcon}
			</div>
		);
	};

	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "short", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	return (
		<>
			{tickets.map((ticket) => (
				<tr
					key={ticket.id}
					className="bg-white border-b hover:bg-gray-50"
					onClick={() => navigate(`/customer/tickets/view/detail/${ticket.id}`)}
					style={{ cursor: "pointer" }}
				>
					<RecentTicketTableText>{ticket.ticket_form}</RecentTicketTableText>
					<RecentTicketTableText>{capitalizeFirstLetter(ticket.ticket_type)}</RecentTicketTableText>
					<RecentTicketTableText>{ticket.scope_of_work_description}</RecentTicketTableText>
					<RecentTicketTableText>{formatDate(ticket.start_date_time)}</RecentTicketTableText>
					<RecentTicketTableText>{formatDate(ticket.end_date_time)}</RecentTicketTableText>
					<RecentTicketTableText>{renderStatus(ticket)}</RecentTicketTableText>
					<RecentTicketTableText>
						<span className="location" style={{ color: "#2B2E72", fontWeight: "600" }}>
							4 Locations
							<RemoveRedEyeOutlinedIcon style={{ marginLeft: "5px" }} />
						</span>
					</RecentTicketTableText>
				</tr>
			))}
		</>
	);
};

export default CustomerTicketTableList;

