import React, {useState} from "react";
import CustomReportButtons from "../../atoms/Reports/customReportButtons";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SET_TICKET_REPORT, SET_CUSTOMER_REPORT, SET_TECHNICIAN_REPORT } from "../../../state-manager/reducers/reports/report";

const ReportNavigateButWrapper = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "10px",

	h2: {
		fontFamily: "Poppins",
		fontSize: "24px",
		fontWeight: "600",
		lineHeight: "36px",
		letterSpacing: "0em",
		textAlign: "left",
        color: "rgba(43, 46, 114, 1)"
	},

	".butCon": {
		width: "355px",
		display: "flex",
        borderRadius: "6px",
        padding: "2px",
		background: "rgba(76, 111, 255, 0.08)",
	},
}));

const ReportNavigateButs = ({ reportTitle }) => {
	const { ticketReport, customerReport, technicianReport } = useSelector((state) => state.reports);
    const dispatch = useDispatch()

    const handleActive = (name) => {
        switch (name) {
            case "Tickets": 
                dispatch(SET_TICKET_REPORT())
                break

            case "Customers": 
                dispatch(SET_CUSTOMER_REPORT())
                break

            case "Technicians":
                dispatch(SET_TECHNICIAN_REPORT())
                break
        }
    }

	return (
		<ReportNavigateButWrapper>
			<h2>{reportTitle}</h2>
			<div className="butCon">
				<CustomReportButtons text={"Tickets"} active={ticketReport} handleActive={handleActive} />
				<CustomReportButtons text={"Customers"} active={customerReport} width={"128px"} handleActive={handleActive} />
				<CustomReportButtons text={"Technicians"} active={technicianReport} width={"138px"} handleActive={handleActive} />
			</div>
		</ReportNavigateButWrapper>
	);
};

ReportNavigateButs.propTypes = {
	reportTitle: PropTypes.string,
};

export default ReportNavigateButs;
