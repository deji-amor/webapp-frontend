import {createSlice, current, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../../utilis";

export const fetchAllTickets = createAsyncThunk("tickets", async (args, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		const config = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/ticket/get-all`;
		const response = await fetch(url, config);
		const result = await response.json();
		return result;
	} catch (err) {
		if (err.response && err.response.data.message) {
			return rejectWithValue(err.response.data.message);
		} else {
			return rejectWithValue(err.message);
		}
	}
});

const initialState = {
	serviceStatus: [
		{
			status: "done",
			title: "Tickets Done",
			active: false,
		},
		{
			status: "in-progress",
			title: "Tickets Inprogress",
			active: false,
		},
		{
			status: "pending",
			title: "Tickets Pending",
			active: false,
		},
		{
			status: "technician enroute",
			title: "Technician Enroute",
			active: false,
		},
	],
	projectStatus: [
		{
			status: "done",
			title: "Tickets Done",
			active: false,
		},
		{
			status: "in-progress",
			title: "Tickets Inprogress",
			active: false,
		},
		{
			status: "pending",
			title: "Tickets Pending",
			active: false,
		},
		{
			status: "technician enroute",
			title: "Technician Enroute",
			active: false,
		},
	],
	reportTabIndex: 0,
	loading: false,
	error: null,
	errorMessage: "",
	successful: null,
	serviceDateStart: "",
	serviceDateEnd: "",
	projectDateStart: "",
	projectDateEnd: "",
	serviceTickets: [],
	filteredTickets: [],
	selectedTickets: [],
	filteredTicketsByDate: [],
	filteredTicketsByStatus: [],
	multipleTicketStatusFiltering: [],
	projectTickets: [],
	selectedProjectTickets: [],
	filteredProjectTickets: [],
	filteredProjectTicketsByDate: [],
	filteredProjectTicketsByStatus: [],
	multipleProjectTicketStatusFiltering: [],
};

const ticketReportSlice = createSlice({
	name: "ticketReports",
	initialState: initialState,
	reducers: {
		SET_REPORT_TAB_INDEX: (state, {payload}) => {
			state.reportTabIndex = payload;
		},

		setDateRangeStart: (state, {payload}) => {
			if (state.reportTabIndex === 0) {
				state.serviceDateStart = payload;
			} else {
				state.projectDateStart = payload;
			}
		},

		setDateRangeEnd: (state, {payload}) => {
			if (state.reportTabIndex === 0) {
				state.serviceDateEnd = payload;
			} else {
				state.projectDateEnd = payload;
			}
		},

		filterSelectedTickets: (state, {payload}) => {
			if (state.reportTabIndex === 0) {
				state.selectedTickets = current(state).selectedTickets.concat(payload);
			} else {
				state.selectedProjectTickets = current(state).selectedProjectTickets.concat(payload);
			}
		},

		removeSelectedTickets: (state, {payload}) => {
			if (state.reportTabIndex === 0) {
				state.selectedTickets = current(state)
					.selectedTickets.slice()
					.filter(ticket => ticket.id != payload.id);
			} else {
				state.selectedProjectTickets = current(state)
					.selectedProjectTickets.slice()
					.filter(ticket => ticket.id != payload.id);
			}
		},

		filterTickets: (state, {payload}) => {
			if (state.reportTabIndex === 0) {
				state.filteredTickets = payload;
			} else {
				state.filteredProjectTickets = payload;
			}
		},

		filterTicketsByDate: (state, {payload}) => {
			if (state.reportTabIndex === 0) {
				state.filteredTicketsByDate = payload;
			} else {
				state.filteredProjectTicketsByDate = payload;
			}
		},

		filterTicketsByStatus: (state, {payload}) => {
			const {data, status} = payload;
			if (state.reportTabIndex === 0) {
				if (state.multipleTicketStatusFiltering.includes(status)) {
					console.log("Already exist.");
				} else {
					state.filteredTicketsByStatus = current(state).filteredTicketsByStatus.concat(data);
				}
			} else {
				if (state.multipleProjectTicketStatusFiltering.includes(status)) {
					console.log("Already exist.");
				} else {
					state.filteredProjectTicketsByStatus =
						current(state).filteredProjectTicketsByStatus.concat(data);
				}
			}
		},

		sortFilteredTicketsByDate: (state, {payload}) => {
			if (state.reportTabIndex === 0) {
				state.filteredTicketsByStatus = payload;
			} else {
				state.filteredProjectTicketsByStatus = payload;
			}
		},

		setMultipleDropdownFilterStatus: (state, {payload}) => {
			if (state.reportTabIndex === 0) {
				console.log(payload)
				const allStatus = current(state).serviceStatus.slice();
				let status = current(state).serviceStatus.find(status => status.status === payload.status);
				let index = current(state).serviceStatus.findIndex(stat => stat.status === payload.status);
				if (!status.active) {
					allStatus.splice(index, 1, {status: payload.status, title: payload.title, active: true});
				} else {
					allStatus.splice(index, 1, {status: payload.status, title: payload.title, active: false});
				}
				state.serviceStatus = allStatus;
			} else {
				const allStatus = current(state).projectStatus.slice();
				let status = current(state).projectStatus.find(status => status.status === payload.status);
				let index = current(state).projectStatus.findIndex(stat => stat.status === payload.status);
				if (!status.active) {
					allStatus.splice(index, 1, {status: payload.status, title: payload.title, active: true});
				} else {
					allStatus.splice(index, 1, {status: payload.status, title: payload.title, active: false});
				}
				state.projectStatus = allStatus;
			}
		},

		setMultipleFilterStatus: (state, {payload}) => {
			if (state.reportTabIndex === 0) {
				if (state.multipleTicketStatusFiltering.includes(payload)) {
					console.log("Already exist.");
				} else {
					state.multipleTicketStatusFiltering =
						current(state).multipleTicketStatusFiltering.concat(payload);
				}
			} else {
				if (state.multipleProjectTicketStatusFiltering.includes(payload)) {
					console.log("Already exist.");
				} else {
					state.multipleProjectTicketStatusFiltering =
						current(state).multipleProjectTicketStatusFiltering.concat(payload);
				}
			}
		},

		removeMultipleFilterStatus: (state, {payload}) => {
			if (state.reportTabIndex === 0) {
				state.multipleTicketStatusFiltering = current(state)
					.multipleTicketStatusFiltering.slice()
					.filter(status => status != payload);
				state.filteredTicketsByStatus = current(state)
					.filteredTicketsByStatus.slice()
					.filter(ticket => ticket.status.toLowerCase() != payload);
			} else {
				state.multipleProjectTicketStatusFiltering = current(state)
					.multipleProjectTicketStatusFiltering.slice()
					.filter(status => status != payload);
				state.filteredProjectTicketsByStatus = current(state)
					.filteredProjectTicketsByStatus.slice()
					.filter(ticket => ticket.status.toLowerCase() != payload);
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAllTickets.pending, (state, action) => {
				state.loading = true;
				state.tickets = [];
			})
			.addCase(fetchAllTickets.fulfilled, (state, action) => {
				const {status, code, data} = action.payload;
				state.loading = false;
				if (code === 200 && status === "OK") {
					// SERVICE TICKETS
					state.serviceTickets = data
						.slice()
						.reverse()
						.filter(ticket => ticket.ticket_type === "service ticket");

					state.filteredTickets = data
						.slice()
						.reverse()
						.filter(ticket => ticket.ticket_type === "service ticket");

					// PROJECT TICKETS
					state.projectTickets = data
						.slice()
						.reverse()
						.filter(ticket => ticket.ticket_type === "project ticket");

					state.filteredProjectTickets = data
						.slice()
						.reverse()
						.filter(ticket => ticket.ticket_type === "project ticket");

					state.successful = true;
					state.error = false;
				} else {
					state.successful = false;
					state.error = true;
					state.errorMessage = "Could not fetch all customers";
				}
			})
			.addCase(fetchAllTickets.rejected, (state, action) => {
				state.loading = false;
				state.tickets = [];
				state.successful = false;
				state.error = true;
				state.errorMessage = "Could not fetch all customers";
			});
	},
});

export default ticketReportSlice.reducer;
export const {
	filterSelectedTickets,
	removeSelectedTickets,
	setDateRangeEnd,
	setDateRangeStart,
	filterTickets,
	filterTicketsByDate,
	filterTicketsByStatus,
	setMultipleFilterStatus,
	removeMultipleFilterStatus,
	sortFilteredTicketsByDate,
	setMultipleDropdownFilterStatus,
	SET_REPORT_TAB_INDEX,
} = ticketReportSlice.actions;

// serviceStatus: [
// 	{
// 		status: "done",
// 		title: "Tickets Done",
// 		active: false,
// 	},
// 	{
// 		status: "in-progress",
// 		title: "Tickets Inprogress",
// 		active: false,
// 	},
// 	{
// 		status: "pending",
// 		title: "Tickets Pending",
// 		active: false,
// 	},
// 	{
// 		status: "technician enroute",
// 		title: "Technician Enroute",
// 		active: false,
// 	},
// ],
// projectStatus: [
// 	{
// 		status: "done",
// 		active: false,
// 	},
// 	{
// 		status: "in-progress",
// 		active: false,
// 	},
// 	{
// 		status: "pending",
// 		active: false,
// 	},
// 	{
// 		status: "technician enroute",
// 		active: false,
// 	},
// ],
// reportTabIndex: 0,
// loading: false,
// error: null,
// errorMessage: "",
// successful: null,
// serviceDateStart: "",
// serviceDateEnd: "",
// projectDateStart: "",
// projectDateEnd: "",
// serviceTickets: [],
// filteredTickets: [],
// selectedTickets: [],
// filteredTicketsByDate: [],
// filteredTicketsByStatus: [],
// multipleTicketStatusFiltering: [],
// projectTickets: [],
// selectedProjectTickets: [],
// filteredProjectTickets: [],
// filteredProjectTicketsByDate: [],
// filteredProjectTicketsByStatus: [],
// multipleProjectTicketStatusFiltering: [],

// setMultipleFilterStatus: (state, {payload}) => {
// 	if (state.reportTabIndex === 0) {
// 		const allStatus = current(state).serviceStatus.slice();
// 		let status = current(state).serviceStatus.find(status => status.status === payload.status);
// 		let index = current(state).serviceStatus.findIndex(stat => stat.status === payload.status);
// 		if (!status.active) {
// 			allStatus.splice(index, 1, {status: payload.status, title: payload.title,  active: true});
// 		} else {
// 			allStatus.splice(index, 1, {status: payload.status, title: payload.title,  active: false});
// 		}
// 		state.serviceStatus = allStatus;
// 	} else {
// 		const allStatus = current(state).projectStatus.slice();
// 		let status = current(state).projectStatus.find(status => status.status === payload.status);
// 		let index = current(state).projectStatus.findIndex(stat => stat.status === payload.status);
// 		if (!status.active) {
// 			allStatus.splice(index, 1, {status: payload.status, title: payload.title,  active: true});
// 		} else {
// 			allStatus.splice(index, 1, {status: payload.status, title: payload.title,  active: false});
// 		}
// 		state.serviceStatus = allStatus;
// 	}
// },
