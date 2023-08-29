import {createSlice, current, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";

export const fetchTicketHistory = createAsyncThunk("ticketHistory", async (args, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		const config = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/ticket/get-details/${args}`;
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
	ticketData: {},
	editLogs: {},
	modifiedLogs: [],
	sortByAscending: true,
};

const ticketHistorySlice = createSlice({
	name: "ticketHistory",
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
			const tickets = current(state).tickets.slice();
			const ticketInd = tickets.findIndex(ticket => ticket.id === newTicket.id);
			tickets.splice(ticketInd, 1, newTicket);
			state.tickets = tickets;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTicketHistory.pending, (state, action) => {
				state.loading = true;
				state.tickets = [];
			})
			.addCase(fetchTicketHistory.fulfilled, (state, action) => {
				const {status, code, data: {editLogs, ticketData}} = action.payload;
				state.loading = false;
				if (code === 200 && status === "OK") {
					state.ticketData = ticketData;
					state.editLogs = editLogs;
					state.successful = true;
					state.error = false;
				} else {
					state.successful = false;
					state.error = true;
					state.errorMessage = "Could not fetch all customers";
				}
			})
			.addCase(fetchTicketHistory.rejected, (state, action) => {
				state.loading = false;
				state.tickets = [];
				state.successful = false;
				state.error = true;
				state.errorMessage = "Could not fetch all customers";
			});
	},
});

export default ticketHistorySlice.reducer;
export const ticketsHistoryActions = ticketHistorySlice.actions;
