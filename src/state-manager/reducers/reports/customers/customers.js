import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../../utilis";
import {encrypt} from "n-krypta";

export const fetchAllCustomers = createAsyncThunk("customers", async (args, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		const config = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/customer/all-customers`;
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
	customers: [],
	filteredCustomers: [],
	filteredCustomersByStatus: [],
	filteredCustomersByDate: [],
	multipleCustomerStatusFiltering: [],
	response: null,

};

const customerReportSlice = createSlice({
	name: "customerReports",
	initialState: initialState,
	reducers: {
		filterCustomers: (state, {payload}) => {
			state.filteredCustomers = payload;
		},

		filterCustomersByDate: (state, {payload}) => {
			state.filteredCustomersByDate = payload;
		},

		setSingleCustomersFilterByStatus: (state, {payload}) => {
			state.filteredCustomersByStatus = payload
		},

		filterCustomersByStatus: (state, {payload}) => {
			const {data, status} = payload;
			if (state.multipleCustomerStatusFiltering.includes(status)) {
				console.log("Already exist.");
			} else {
				state.filteredCustomersByStatus = current(state).filteredCustomersByStatus.concat(data);
			}
		},

		sortFilteredCustomersByDate: (state, {payload}) => {
			state.filteredCustomersByStatus = payload;
		},

		setMultipleCustomersFilterStatus: (state, {payload}) => {
			if (state.multipleCustomerStatusFiltering.includes(payload)) {
				console.log("Already exist.");
			} else {
				state.multipleCustomerStatusFiltering =
					current(state).multipleCustomerStatusFiltering.concat(payload);
			}
		},

		removeMultipleCustomersFilterStatus: (state, {payload}) => {
			console.log(payload);
			state.multipleCustomerStatusFiltering = current(state)
				.multipleCustomerStatusFiltering.slice()
				.filter(status => status != payload);
			state.filteredCustomersByStatus = current(state)
				.filteredCustomersByStatus.slice()
				.filter(ticket => ticket.status.toLowerCase() != payload);
		},
	},
	extraReducers: builder => {
		builder
			// Fetch Customers
			.addCase(fetchAllCustomers.pending, (state, action) => {
				state.loading = true;
				state.customers = [];
			})

			.addCase(fetchAllCustomers.fulfilled, (state, action) => {
				const {status, code, data} = action.payload;
				state.loading = false;
				if (code === 200 && status === "OK") {
					state.filteredCustomers = data.slice().reverse();
					state.successful = true;
					state.error = false;
				} else {
					state.successful = false;
					state.error = true;
					state.errorMessage = "Could not fetch all customers";
				}
			})

			.addCase(fetchAllCustomers.rejected, (state, action) => {
				state.loading = false;
				state.customers = [];
				state.successful = false;
				state.error = true;
				state.errorMessage = "Could not fetch all customers";
			})
	},
});

export default customerReportSlice.reducer;
export const {
	filterCustomers,
	filterCustomersByDate,
	filterCustomersByStatus,
	sortFilteredCustomersByDate,
	setSingleCustomersFilterByStatus,
	setMultipleCustomersFilterStatus,
	removeMultipleCustomersFilterStatus,
} = customerReportSlice.actions;
