import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import axios from "axios";

export const loginAdmin = createAsyncThunk(
	"loginAdmin",
	async(args, {rejectWithValue}) => {
		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(args),
		};

		try {
			const url = `${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`;
			const res = await fetch(url, config);
			return res.json();

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
	token: null,
	error: null,
	toasts: [],
};

const loginAdminSlice = createSlice({
	name: "password",
	initialState,
	reducers: {
		showToasts: (state, action) => {
			const toasts = current(state).toasts
			const message = action.payload.message
			const title = action.payload.title
			const newToast = {id: Date.now(), message: message, title: title}
			state.toasts = [...toasts, newToast]
		},
		hideToast: (state, action) => {
			const id = action.payload
			const toasts = current(state).toasts.slice()
			state.toasts = toasts.filter(toast => toast.id !== id)
		}
	},
	extraReducers: builder => {
		builder

			//  Reset Password
			.addCase(loginAdmin.pending, (state, actions) => {
				state.loginLoading = true;
				state.token = null
				state.error = null
			})

			.addCase(loginAdmin.fulfilled, (state, {payload}) => {
				state.loginLoading = false;
				state.token = payload;
				state.error = null
			})

			.addMatcher(loginAdmin.rejected, (state, {payload: error}) => {
				state.loginLoading = false;
				state.error = error
				state.token = null
			});
	},
});

// export const { } = passwordSlice.actions

export default loginAdminSlice.reducer;
export const loginAdminActions = loginAdminSlice.actions