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
    let statusIcon = <></>;
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
