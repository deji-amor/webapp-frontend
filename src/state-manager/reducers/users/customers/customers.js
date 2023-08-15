import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../../utilis";
import {encrypt} from "n-krypta";


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

export const validateToken = createAsyncThunk(
	"validateToken",
	async (args, {rejectWithValue}) => {
		try {
			const config = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(args),
			};
			const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/customer/check-verification-link`;
			const response = await fetch(url, config);
			const data = await response.json()
			return data.message
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
		const { email, token, password, confirmPassword } = args
		
		try {
			const config = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					token,
					password: encrypt(password, `${import.meta.env.VITE_ENCRYPT_KEY}`),
					confirmPassword: encrypt(confirmPassword, `${import.meta.env.VITE_ENCRYPT_KEY}`)
				})
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
	validationResponse: null
};

const customersSlice = createSlice({
	name: "customers",
	initialState: initialState,
	reducers: {
		clearData: (state, action) => {
			state.users = [];
		},

		SET_ERROR_NULL: (state, {paload}) => {
            state.validationResponse = null
        }
	},
	extraReducers: builder => {
		builder
			// Fetch Customers
			.addCase(fetchCustomers.pending, (state, action) => {
				state.loading = true;
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

			// ADDCASE FOR VALIDATE TOKEN
			.addCase(validateToken.pending, (state, action) => {
				state.loading = true;
				state.successful = false;
				state.error = false;
				state.creationSuccess = false
			})

			.addCase(validateToken.fulfilled, (state, {payload}) => {
				state.loading = false;
				state.error = false;
				state.validationResponse = payload
			})

			.addCase(validateToken.rejected, (state, {payload}) => {
				state.error = true;
				state.loading = false;
				state.creationSuccess = false
				state.validationResponse = payload
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

			.addMatcher(setCustomerPassword.rejected, (state, action) => {
				state.error = true;
				state.loading = false;
				state.successful = false;
			});
	},
});

export default customersSlice.reducer;
export const { SET_ERROR_NULL } = customersSlice.actions
export const customerActions = customersSlice.actions;
