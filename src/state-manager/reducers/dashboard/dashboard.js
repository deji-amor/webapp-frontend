import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";

export const fetchData = createAsyncThunk("fetchData", async (_, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		const config = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/analytics/admin-dashboard`;
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
	analyticsData: null,
	customerData: null,
	projectTicketData: null,
	serviceTicketData: null,
};

const dashboardSlice = createSlice({
	name: "dashboard",
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchData.pending, state => {
				state.loading = true;
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.loading = false;
				state.customerData = action.payload.customersCount;
				state.projectTicketData = action.payload.ticketsCount.projectTickets;
				state.serviceTicketData = action.payload.ticketsCount.serviceTickets;
				state.error = null;
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.loading = false;
				state.customerData = null;
				state.projectTicketData = null;
				state.serviceTicketData = null;
				state.error = "Could not fetch data";
			});
	},
});

export default dashboardSlice.reducer;
export const dashboardActions = dashboardSlice.actions;
