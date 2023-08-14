import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../../utilis";

export const fetchCustomers = createAsyncThunk("customers", async (args, {rejectWithValue}) => {
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

export const createCustomer = createAsyncThunk(
	"createCustomer",
	async (args, {rejectWithValue}) => {
		console.log(args);
		try {
			const token = await getAuthToken();
			const config = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(args),
			};
			const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/customer/create-account`;
			const response = await fetch(url, config);
			console.log(response);
		} catch (err) {
			if (err.response && err.response.data.message) {
				return rejectWithValue(err.response.data.message);
			} else {
				return rejectWithValue(err.message);
			}
		}
	}
);

// CUSTOMER PASSWORD
export const setCustomerPassword = createAsyncThunk(
	"setCustomerPassword",
	async (args, {rejectWithValue}) => {
		console.log(args);
		try {
			const config = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(args),
			};
			const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/customer/onboarding`;
			const response = await fetch(url, config);
			const data = response.json();
			return data.message;
		} catch (err) {
			if (err.response && err.response.data.message) {
				return rejectWithValue(err.response.data.message);
			} else {
				return rejectWithValue(err.message);
			}
		}
	}
);

const initialState = {
	loading: false,
	error: null,
	errorMessage: "",
	successful: null,
	creationSuccess: false,
	customers: [],
	response: null,
};

const customersSlice = createSlice({
	name: "customers",
	initialState: initialState,
	reducers: {
		clearData: (state, action) => {
			state.users = [];
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCustomers.pending, (state, action) => {
				state.loading = true;
				state.customers = []
			})
			.addCase(fetchCustomers.fulfilled, (state, action) => {
				const {status, code, data} = action.payload;
				state.loading = false;
				if (code === 200 && status === "OK") {
					state.customers = data;
					state.successful = true;
					state.error = false;
				} else {
					state.successful = false;
					state.error = true;
					state.errorMessage = "Could not fetch all customers";
				}
			})
			.addCase(fetchCustomers.rejected, (state, action) => {
				state.loading = false;
				state.customers = [];
				state.successful = false;
				state.error = true;
				state.errorMessage = "Could not fetch all customers";
			})

			// ADDCASE FOR CREATECUSTOMER
			.addCase(createCustomer.pending, (state, action) => {
				state.loading = true;
				state.successful = false;
				state.error = false;
				state.creationSuccess = false
			})

			.addCase(createCustomer.fulfilled, (state, action) => {
				state.loading = false;
				state.error = false;
				state.creationSuccess = true
			})

			.addCase(createCustomer.rejected, (state, action) => {
				state.error = true;
				state.loading = false;
				state.creationSuccess = false
				state.successful = false;
			})

			// ADDCASE CUSTOMER SET PASSWORD
			.addCase(setCustomerPassword.pending, (state, action) => {
				state.loading = true;
				state.successful = false;
				state.error = false;
			})
			
			.addCase(setCustomerPassword.fulfilled, (state, action, payload) => {
				state.loading = false;
				state.error = false;
				state.successful = true;
				state.response = payload;
			})
			.addCase(setCustomerPassword.rejected, (state, action) => {
				state.error = true;
				state.loading = false;
				state.successful = false;
			});
	},
});

export default customersSlice.reducer;
export const customerActions = customersSlice.actions;
