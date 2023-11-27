import {createSlice, current, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";

export const fetchTickets = createAsyncThunk("tickets", async (args, {rejectWithValue}) => {
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
	loading: false,
	error: null,
	errorMessage: "",
	successful: null,
	tickets: [],
	searchTicketsValue: "",
	searchCustomersValue: "",
	showServiceRequestsTab: true,
	showProjectsTab: false,
	activeTickets: [],
	activeTicketsStartPoint: 0,
	activeTicketsEndPoint: 1,
	ticketsOnEachPage: 10,
	sortByAscending: true,
	filterByStatus: "All",
	statuses: ["All", "Done", "Pending", "Technician enroute", "Inprogress", "Overdue"],

	// STATE FOR CUSTOMER DASHBOARD
	isCustomerFiltered: false,
	isCustomerFilteredByDate: false,
	isCustomerFilteredByType: false,
	isCustomerFilteredByStatus: false,
	isCustomerFilteredById: false,

	filteredCustomerDependencies: {
		filterType: false,
		filterStatus: false,
		filterDate: false,
	},

	customerTicketId: "",
	customerTicketDate: "",
	filteredCustomerTicketsById: [],
	filteredCustomerTicketsByStatus: [],
	filteredCustomerTicketsByType: [],

	//GENERAL CUSTOMER TICKETS
	filteredCustomerTicketsByDate: [],
};

const ticketsSlice = createSlice({
	name: "tickets",
	initialState: initialState,
	reducers: {
		updateField: (state, action) => {
			const payload = action.payload;

			if (Array.isArray(payload)) {
				payload.forEach(({key, value}) => {
					state[key] = value;
				});
			} else {
				const {key, value} = payload;
				state[key] = value;
			}
		},
		addNewTicket: (state, action) => {
			const newTicket = action.payload;
			if (state.sortByAscending) {
				state.tickets = [newTicket, ...current(state).tickets];
			} else {
				state.tickets = [...current(state).tickets, newTicket];
			}
		},
		replaceTicket: (state, action) => {
			const newTicket = action.payload;
			console.log({newTicket});
			const tickets = current(state).tickets.slice();
			const ticketInd = tickets.findIndex(ticket => ticket.id === newTicket.id);
			tickets.splice(ticketInd, 1, newTicket);
			state.tickets = tickets;
		},

		// CUSTOMER FILTER REDUCERS

		filterCustomerTicketsByID: (state, {payload}) => {
			if (payload.id.length != 0) {
				state.isCustomerFilteredById = true;
				state.isCustomerFiltered = true;
				state.customerTicketId = payload.id;
			} else {
				state.isCustomerFilteredById = false;
				state.isCustomerFiltered = false;
				state.customerTicketId = "";
			}

			if (state.filteredCustomerTicketsByDate.length != 0 && state.isCustomerFilteredByDate) {
				state.filteredCustomerTicketsById = current(state)
					.filteredCustomerTicketsByDate.slice()
					.filter(ticket => ticket.id.toString().includes(payload.id));
			} else if (
				state.filteredCustomerTicketsByType.length &&
				state.isCustomerFilteredByDate &&
				state.isCustomerFilteredByType
			) {
				state.filteredCustomerTicketsById = current(state)
					.filteredCustomerTicketsByType.slice()
					.filter(ticket => ticket.id.toString().includes(payload.id));
			} else if (
				state.filteredCustomerTicketsByStatus.length &&
				state.isCustomerFilteredByDate &&
				state.isCustomerFilteredByType &&
				state.isCustomerFilteredByStatus
			) {
				state.filteredCustomerTicketsById = current(state)
					.filteredCustomerTicketsByStatus.slice()
					.filter(ticket => ticket.id.toString().includes(payload.id));
			} else {
				state.filteredCustomerTicketsById = current(state)
					.tickets.slice()
					.filter(ticket => ticket.id.toString().includes(payload.id));
			}
		},

		filterCustomerTicketsByType: (state, {payload}) => {
			state.filteredCustomerTicketsByType = payload;
		},

		filterCustomerTicketsByStatus: (state, {payload}) => {
			const {data, status} = payload;
			if (state.filteredTicketsByStatus.includes(status)) {
				console.log("Already exist.");
			} else {
				state.filteredCustomerTicketsByStatus = current(state).filteredTicketsByStatus.concat(data);
			}
		},

		filterCustomerTicketsByDate: (state, {payload}) => {
			if (payload.date.length != 0) {
				state.isCustomerFiltered = true;
				state.isCustomerFilteredByDate = true;
				state.customerTicketDate = payload.date;
			} else {
				state.isCustomerFiltered = false;
				state.isCustomerFilteredByDate = false;
				state.customerTicketDate = "";
			}

			if (state.tickets.length != 0) {
				state.filteredCustomerTicketsByDate = current(state).tickets.slice().filter(ticket =>
					ticket.created_at.includes(payload.date)
				);
			}else {
				console.log("No data to filter from.")
			}
		},
	},

	extraReducers: builder => {
		builder
			.addCase(fetchTickets.pending, (state, action) => {
				state.loading = true;
				state.tickets = [];
			})
			.addCase(fetchTickets.fulfilled, (state, action) => {
				const {status, code, data} = action.payload;
				state.loading = false;
				if (code === 200 && status === "OK") {
					state.tickets = data.slice().reverse();
					state.successful = true;
					state.error = false;
				} else {
					state.successful = false;
					state.error = true;
					state.errorMessage = "Could not fetch all customers";
				}
			})
			.addCase(fetchTickets.rejected, (state, action) => {
				state.loading = false;
				state.tickets = [];
				state.successful = false;
				state.error = true;
				state.errorMessage = "Could not fetch all customers";
			});
	},
});

export default ticketsSlice.reducer;

export const ticketsActions = ticketsSlice.actions;
