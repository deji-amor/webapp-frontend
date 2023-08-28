import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	reportTapIndex: 0,
	ticketReport: true,
	ticketSub: {
		serviceTickets: true,
		projectTickets: false,
	},

	customerReport: false,
	customerSub: {
		serviceTickets: true,
		projectTickets: false,
	},

	technicianReport: false,
	technicianSub: {
		serviceTickets: true,
		projectTickets: false,
	},

	exportDropdown: false,
	exportPDFDropdown: false,
	exportCSVDropdown: false,
	exportDocType: "",

	loading: false,
	response: null,

	dateValues: {
		start: "",
		end: ""
	}
};

const reportSlice = createSlice({
	name: "reports",
	initialState,

	reducers: {
		SET_REPORT_TAB_INDEX: (state, {payload}) => {
			state.reportTapIndex = payload
		},

		SET_TICKET_REPORT: (state, {payload}) => {
			if (state.customerReport || state.technicianReport) {
				state.ticketReport = true;
				state.customerReport = false;
				state.technicianReport = false;
			}
		},

		SET_CUSTOMER_REPORT: (state, {payload}) => {
			if (state.ticketReport || state.technicianReport) {
				state.ticketReport = false;
				state.customerReport = true;
				state.technicianReport = false;
			}
		},

		SET_TECHNICIAN_REPORT: (state, {paload}) => {
			if (state.ticketReport || state.customerReport) {
				state.ticketReport = false;
				state.customerReport = false;
				state.technicianReport = true;
			}
		},

		SET_REPORT_BOARD_STATE_TO_DEFAULT: (state, {payload}) => {
			state.exportDropdown1 = false;
			state.exportPDFDropdown = false;
			state.exportCSVDropdown = false;
		},

		SET_EXPORT_DROPDOWN_ONE: (state, {payload}) => {
			state.exportDropdown1 = !current(state).exportDropdown1;
			state.exportPDFDropdown = false;
			state.exportCSVDropdown = false;
		},

		SET_EXPORT_PDF_DROPDOWN: (state, {payload}) => {
			state.exportPDFDropdown = !current(state).exportPDFDropdown;
			state.exportDocType = payload;
			state.exportCSVDropdown = false;
		},

		SET_EXPORT_CSV_DROPDOWN: (state, {payload}) => {
			state.exportCSVDropdown = !current(state).exportCSVDropdown;
			state.exportDocType = payload;
			state.exportPDFDropdown = false;
		},

		// UPDATE_DATE: (state, {payload}) => {
		// 	if (payload.fieldName === "start") {
		// 		state.dateValues.start = payload.data
		// 	}else {
		// 		state.dateValues.end = payload.data
		// 	}
		// },

		// CLEAR_DATE: (state, action) => {
		// 	state.dateValues.start = ""
		// 	state.dateValues.end = ""
		// }
	},

	extraReducers: builder => {
		builder;
	},
});

export const {
	SET_TICKET_REPORT,
	SET_CUSTOMER_REPORT,
	SET_TECHNICIAN_REPORT,
	SET_EXPORT_DROPDOWN_ONE,
	SET_EXPORT_PDF_DROPDOWN,
	SET_EXPORT_CSV_DROPDOWN,
	SET_REPORT_BOARD_STATE_TO_DEFAULT,
	SET_REPORT_TAB_INDEX,
	// UPDATE_DATE,
	// CLEAR_DATE
} = reportSlice.actions;

export default reportSlice.reducer;
