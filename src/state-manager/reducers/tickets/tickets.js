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
	filteredTickets: [],
	filteredTicketsByDate: [],
	filteredTicketsByStatus: [],
	multipleTicketStatusFiltering: [],
	filteredProjectTickets: [],
	filteredProjectTicketsByDate: [],
	filteredProjectTicketsByStatus: [],
	multipleProjectTicketStatusFiltering: [],
	searchTicketsValue: "",
	searchCustomersValue: "",
	showServiceRequestsTab: true,
	showProjectsTab: false,
	activeTickets: [],
	activeTicketsStartPoint: 0,
	activeTicketsEndPoint: 0,
	ticketsOnEachPage: 5,
	sortByAscending: true,
	filterByStatus: "All",
	statuses: ["All", "Done", "Pending", "Inprogress", "Overdue"],
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

		filterTickets: (state, {payload}) => {
			state.filteredTickets = payload;
		},

		filterTicketsByDate: (state, {payload}) => {
			state.filteredTicketsByDate = payload;
		},

		filterTicketsByStatus: (state, {payload}) => {
			const {data, status} = payload
			if (state.multipleTicketStatusFiltering.includes(status)) {
				console.log("Already exist.");
			} else {
				state.filteredTicketsByStatus = current(state).filteredTicketsByStatus.concat(data);
			}
		},

		sortFilteredTicketsByDate: (state, {payload}) => {
			state.filteredTicketsByStatus = payload;
		},

		setMultipleFilterStatus: (state, {payload}) => {
			if (state.multipleTicketStatusFiltering.includes(payload)) {
				console.log("Already exist.");
			} else {
				state.multipleTicketStatusFiltering =
					current(state).multipleTicketStatusFiltering.concat(payload);
			}
		},

		removeMultipleFilterStatus: (state, {payload}) => {
			state.multipleTicketStatusFiltering = current(state).multipleTicketStatusFiltering.slice().filter(
				status => status != payload
			);
			state.filteredTicketsByStatus = current(state).filteredTicketsByStatus.slice().filter(
				ticket => ticket.status.toLowerCase() != payload
			);
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
					state.filteredTickets = data.slice().reverse().filter(ticket => ticket.ticket_type === "service ticket");
					state.filteredProjectTickets = data.slice().reverse().filter(ticket => ticket.ticket_type === "project ticket");
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
export const {
	filterTickets,
	filterTicketsByDate,
	filterTicketsByStatus,
	setMultipleFilterStatus,
	removeMultipleFilterStatus,
	sortFilteredTicketsByDate,
} = ticketsSlice.actions;
export const ticketsActions = ticketsSlice.actions;
