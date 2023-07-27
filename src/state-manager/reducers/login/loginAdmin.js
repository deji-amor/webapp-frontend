import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import localforage from "localforage";
import axios from "axios";

export const loginAdmin = createAsyncThunk("auth/loginAdmin", async (args, {rejectWithValue}) => {
	
	const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(args),
	};

	try {
		const url = `${import.meta.env.VITE_BASE_AUTH_URL}/api/v1/auth/login`;
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
	token: null,
	errorMessage: null,
	errorTitle: null,
	toasts: [],
	clickIncrement: 0,
};

const loginAdminSlice = createSlice({
	name: "loginAdmin",
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
		resetLoginAdmin: () => {
			return initialState
		}
	},
	extraReducers: builder => {
		builder
			.addCase(loginAdmin.pending, (state, action) => {
				console.log("pending");
				state.loading = true;
			})
			.addCase(loginAdmin.fulfilled, (state, {payload}) => {
				console.log("fulfilled", payload);
				state.loading = false;
				const status = payload.status
				if(status === "OK"){
					const token = payload.data.token
					localforage
						.setItem("authToken", token)
						.then(() => {})
						.catch(error => {
							console.error("Error saving token:", error);
						});
					state.token = token;
				}else{
					state.errorMessage = payload.message
					state.errorTitle = payload.title
				}
				state.clickIncrement = state.clickIncrement + 1;
			})
			.addCase(loginAdmin.rejected, (state, {payload, error}) => {
				console.log("rejected", {payload, error});
				state.loading = false
				state.clickIncrement = state.clickIncrement + 1;
				state.errorMessage = "An error has occurred";
				state.errorTitle = "Error!"
			});
	},
});

export default loginAdminSlice.reducer;
export const loginAdminActions = loginAdminSlice.actions;
