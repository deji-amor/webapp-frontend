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
			const data = response.json();
			return data;
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
			return data
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
			return data

		} catch (err) {
			if (err.response && err.response.data.message) {
				return rejectWithValue(err.response.data.message);
			} else {
				return rejectWithValue(err.message);
			}
		}
	}
);

// SUSPEND-UNSUSPEND
export const suspendUnsuspend = createAsyncThunk(
	"suspendUnsuspend",
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
			const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/customer/suspend-unsuspend`;
			const response = await fetch(url, config);
			const data = await response.json();
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

// RESEND VERIFICATION LINK FROM DASHBOARD
export const resendVerification = createAsyncThunk(
	"resendVerification",
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
			const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/customer/resend-verification`;
			const response = await fetch(url, config);
			const data = await response.json();
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

// RESEND MY VERIFICATION LINK
export const resendMyVerificationLink = createAsyncThunk(
	"resendMyVerificationLink",
	async (args, {rejectWithValue}) => {
		try {
			const config = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(args),
			};
			const url = `${
				import.meta.env.VITE_BASE_ACTIVITY_URL
			}/api/v1/customer/resend-my-verification`;
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
        },
		
		SET_RESPONSE_NULL: (state, action) => {
			state.response = null;
		},
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
				state.creationSuccess = false;
				state.response = null;
			})

			.addCase(createCustomer.fulfilled, (state, {payload}) => {
				const {code, status, message} = payload
				console.log({code, status, message})
				state.loading = false;
				state.error = false;
				state.creationSuccess = true;
				state.response = message ? message : null;
			})

			.addCase(createCustomer.rejected, (state, {payload}) => {
				const {code, status, message} = payload
				console.log({code, status, message})
				state.error = true;
				state.loading = false;
				state.creationSuccess = false;
				state.successful = false;
				state.response = message ? message : null;
			})

			// ADDCASE FOR VALIDATE TOKEN
			.addCase(validateToken.pending, (state, action) => {
				state.loading = true;
				state.successful = false;
				state.error = false;
				state.creationSuccess = false
				state.validationResponse = null
			})

			.addCase(validateToken.fulfilled, (state, {payload}) => {
				const {message, data} = payload
				console.log(data)
				state.loading = false;
				state.error = false;
				state.validationResponse = message ? message : null
			})

			.addCase(validateToken.rejected, (state, {payload}) => {
				const {message, data} = payload
				console.log(data)
				state.error = true;
				state.loading = false;
				state.creationSuccess = false
				state.validationResponse = message ? message : null
				state.successful = false;
			})

			// ADDCASE CUSTOMER SET PASSWORD
			.addCase(setCustomerPassword.pending, (state, action) => {
				state.loading = true;
				state.successful = false;
				state.error = false;
				state.response = null
			})

			.addCase(setCustomerPassword.fulfilled, (state, action, {payload}) => {
				const {message} = payload
				state.loading = false;
				state.error = false;
				state.successful = true;
				state.response = message ? message : null;
			})

			.addCase(setCustomerPassword.rejected, (state, {payload}) => {
				const {message} = payload
				state.error = true;
				state.loading = false;
				state.successful = false;
				state.response = message ? message : null;
			})

			// ADDCASE FOR SUSPEND-UNSUSPEND CUSTOMER
			.addCase(suspendUnsuspend.pending, (state, action) => {
				state.loading = true;
			})

			.addCase(suspendUnsuspend.fulfilled, (state, action) => {
				state.loading = false;
				state.error = false;
				state.successful = true;
			})

			.addCase(suspendUnsuspend.rejected, (state, action) => {
				state.error = true;
				state.loading = false;
			})

			// ADDCASE FOR RESEND VERIICATION LINK FROM DASHBOARD
			.addCase(resendVerification.pending, (state, action) => {
				state.loading = true;
			})

			.addCase(resendVerification.fulfilled, (state, action) => {
				state.loading = false;
			})

			.addCase(resendVerification.rejected, (state, action) => {
				state.loading = false;
			})

			// ADDCASE FOR RESEND MY VERIICATION
			.addCase(resendMyVerificationLink.pending, (state, action) => {
				state.loading = true;
			})

			.addCase(resendMyVerificationLink.fulfilled, (state, action) => {
				state.loading = false;
			})

			.addCase(resendMyVerificationLink.rejected, (state, action) => {
				state.loading = false;
			});
	},
});

export default customersSlice.reducer;
export const { SET_ERROR_NULL } = customersSlice.actions
export const customerActions = customersSlice.actions;
export const {SET_RESPONSE_NULL} = customersSlice.actions;
