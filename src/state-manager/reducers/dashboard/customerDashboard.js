import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";

// FETCH Analytics Data
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
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/analytics/customer-dashboard`;
		const response = await fetch(url, config);
		const result = await response.json();
		return result.data;
		
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
	analyticsData: {},
};

const customerDashboardSlice = createSlice({
	name: "customerDashboard",
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// ADDCASE FETCH Analytics Data
			.addCase(fetchData.pending, state => {
				state.loading = true;
				state.error = null;
				state.analyticsData = null;

			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.loading = false;
				state.analyticsData = action.payload;
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || "Could not fetch data";
				state.analyticsData = null;
			})
	},
});

export default customerDashboardSlice.reducer;
export const customerDashboardActions = customerDashboardSlice.actions;
