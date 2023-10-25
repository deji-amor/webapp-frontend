import {createSlice, current, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../../utilis";

export const fetchCustomerDashboardTickets = createAsyncThunk("fetchCustomerDashboardTickets", async (args, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		const config = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
        console.log("richard")
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
	
	// STATE FOR CUSTOMER DASHBOARD
	isFiltered: false,
	filterDependencies: {
		filterType : false,
		filterDate : false,
		filterStatus : false,
	},

	// Filter Lists
	filterTicketsById: [],
	filterTicketsByStatus: [],
	filterTicketsByType: [],

	//GENERAL CUSTOMER TICKETS
	filterTicketsByDate: [],
	tickets: [],
};

const customerDashboardTicketsSlice = createSlice({
	name: "customerDashboardTickets",
	initialState: initialState,
	reducers: {
		
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCustomerDashboardTickets.pending, (state, action) => {
				state.loading = true;
				state.tickets = [];
			})
			.addCase(fetchCustomerDashboardTickets.fulfilled, (state, action) => {
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
			.addCase(fetchCustomerDashboardTickets.rejected, (state, action) => {
				state.loading = false;
				state.tickets = [];
				state.successful = false;
				state.error = true;
				state.errorMessage = "Could not fetch all customers";
			});
	},
});

export default customerDashboardTicketsSlice.reducer;

export const customerDashboardTicketsActions = customerDashboardTicketsSlice.actions;
