import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import localforage from "localforage";
import {encrypt} from "n-krypta";
import axios from "axios";

export const loginCustomer = createAsyncThunk(
	"auth/loginCustomer",
	async (args, {rejectWithValue}) => {
		const {deviceName, username, password} = args;

		const encryptedPassword = encrypt(password, `${import.meta.env.VITE_ENCRYPT_KEY}`);

		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({deviceName, username, password: encryptedPassword}),
		};

		try {
			const url = `${import.meta.env.VITE_BASE_AUTH_URL}/api/v1/auth/login2`;
			const response = await fetch(url, config);
			const result = await response.json();
			return result;
		} catch (err) {
			console.log({err});
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
	token: null,
	errorMessage: null,
	errorTitle: null,
	toasts: [],
	clickIncrement: 0,
};

const loginCustomerSlice = createSlice({
	name: "loginCustomer",
	initialState: initialState,
	reducers: {
		showToasts: (state, action) => {
			const toasts = current(state).toasts;
			const message = action.payload.message;
			const title = action.payload.title;
			const newToast = {id: Date.now(), message: message, title: title};
			state.toasts = [...toasts, newToast];
		},
		hideToast: (state, action) => {
			const id = action.payload;
			const toasts = current(state).toasts.slice();
			state.toasts = toasts.filter(toast => toast.id !== id);
		},
		resetLoginCustomer: () => {
			return initialState;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loginCustomer.pending, state => {
				console.log("pending");
				state.loading = true;
			})
			.addCase(loginCustomer.fulfilled, (state, {payload}) => {
				console.log("fulfilled", payload);
				state.loading = false;
				const status = payload.status;
				if (status === "OK") {
					const token = payload.data.token;
					localforage
						.setItem("authToken", token)
						.then(() => {})
						.catch(error => {
							console.error("Error saving token:", error);
						});
					state.token = token;
				} else {
					state.errorMessage = payload.message;
					state.errorTitle = payload.title;
				}
				state.clickIncrement = state.clickIncrement + 1;
			})
			.addCase(loginCustomer.rejected, (state, {payload, error}) => {
				console.log("rejected", {payload, error});
				state.loading = false;
				state.clickIncrement = state.clickIncrement + 1;
				state.errorMessage = "An error has occurred";
				state.errorTitle = "Error!";
			});
	},
});

export default loginCustomerSlice.reducer;
export const loginCustomerActions = loginCustomerSlice.actions;
