import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TextField, styled } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import {
	filterTickets,
	filterTicketsByDate
} from "../../../state-manager/reducers/reports/tickets/ticketreport";
import {
	filterCustomersByDate,
	filterCustomers
} from "../../../state-manager/reducers/reports/customers/customers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getDateFromDateTime } from "../../../helpers/date-manipulation";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const DateFilterWrapper = styled("div")(() => ({
	fontFamily: "Poppins",
	position: "relative	",
	top: "50px",
	left: "20px",

	"input:focus": {
		border: "1px solid rgba(43, 46, 114, 1)",
	},

	".dates": {
		display: "flex",
		alignItems: "center",
		gap: "30px",
	},

	".date": {
		width: "250px",
		display: "flex",
		flexDirection: "column",
	},

	".input": {
		outline: "none",
		background: "rgba(238, 238, 238, 1)",
		boxShadow: "0px 0px 1px 0px rgba(50, 50, 71, 0.2)",
		border: "orange",
		borderRadius: "8px",
	},

	p: {
		fontSize: "14px",
		fontWeight: "500",
		letterSpacing: "0px",
		textAlign: "left",
		color: "rgba(112, 110, 110, 1)",
	},

	label: {
		fontFamily: "Poppins",
		fontSize: "14px",
		fontWeight: "500",
		lineHeight: "24px",
		letterSpacing: "0px",
		textAlign: "left",
		color: "rgba(43, 46, 114, 1)",
	},

	".clear": {
		color: "rgba(43, 46, 114, 1)",
		cursor: "pointer",
		padding: "5px",
		borderRadius: "5px",
		position: "relative",
		top: "50%",
		transform: "translateY(-50%)",
	},

	".clear:hover": {
		background: "rgba(43, 46, 114, 1)",
		color: "white",
	},
}));

const ProjectDateFilter = ({ handleReportDateRange }) => {
	const [values, setValues] = useState({ startDate: "", endDate: "" });
	const { startDate, endDate } = values;

	const start = getDateFromDateTime(startDate);
	const end = getDateFromDateTime(endDate);

	const dispatch = useDispatch();
	const { projectTickets } = useSelector(
		(state) => state.ticketReports
	);
    
	const { customers } = useSelector((state) => state.customers);
	const { customerReport } = useSelector((state) => state.reports);
	
	const handleClear = () => {
		setValues({ startDate: "", endDate: "" });
		if (customerReport) {
			dispatch(filterCustomersByDate([]));
			dispatch(filterCustomers(customers));
		} else {
			dispatch(filterTicketsByDate([]));
			dispatch(filterTickets(projectTickets));
		}
	};

	useEffect(() => {
		handleReportDateRange(start, end);
	}, [start, end]);

	return (
		<DateFilterWrapper>
			<p>Filter By Date:</p>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={["DatePicker", "DatePicker"]}>
					<div className="dates">
						<div className="date">
							<label htmlFor="start">Start Date</label>
							<DatePicker
								id="start"
								slotProps={{
									textField: {
										size: "small",
										error: false,
									},
								}}
								value={startDate}
								className="input"
								renderInput={(params) => <TextField {...params} error={false} />}
								onChange={(data) => setValues({ ...values, startDate: data })}
								popperPlacement="bottom-end"
								popperModifiers={{
									flip: {
										behavior: ["bottom-end"],
									},
									preventOverflow: {
										enabled: false,
									},
									hide: {
										enabled: false,
									},
								}}
								sx={{
									"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
										boxShadow: "0px 0px 1px 0px rgba(50, 50, 71, 0.2)",
									},
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
										border: "1px solid rgba(43, 46, 114, 1)",
										outline: "none",
									},
								}}
							/>
						</div>
						<div className="date">
							<label htmlFor="end">End Date</label>
							<DatePicker
								id="end"
								slotProps={{
									textField: {
										size: "small",
										error: false,
									},
								}}
								value={endDate}
								className="input"
								onChange={(data) => setValues({ ...values, endDate: data })}
								popperPlacement="bottom-end"
								popperModifiers={{
									flip: {
										behavior: ["bottom"],
									},
									preventOverflow: {
										enabled: false,
									},
									hide: {
										enabled: false,
									},
								}}
								sx={{
									"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
										boxShadow: "0px 0px 1px 0px rgba(50, 50, 71, 0.2)",
									},
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
										border: "1px solid rgba(43, 46, 114, 1)",
									},
								}}
							/>
						</div>
						{(startDate || endDate) && (
							<div className="clear" onClick={handleClear}>
								<span>Clear Date</span>
								<ClearOutlinedIcon />
							</div>
						)}
					</div>
				</DemoContainer>
			</LocalizationProvider>
		</DateFilterWrapper>
	);
};

ProjectDateFilter.propTypes = {
	handleReportDateRange: PropTypes.func,
};

export default ProjectDateFilter;
