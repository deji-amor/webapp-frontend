import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import { getAuthToken } from "../../../utilis";

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
	activeTicketsEndPoint: 0,
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
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTickets.pending, (state, action) => {
				state.loading = true;
				state.tickets = []
			})
			.addCase(fetchTickets.fulfilled, (state, action) => {
				const {status, code, data} = action.payload;
				state.loading = false;
				if (code === 200 && status === "OK") {
					state.tickets = data;
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
