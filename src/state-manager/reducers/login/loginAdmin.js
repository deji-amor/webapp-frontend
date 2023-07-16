import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import axios from "axios";

export const loginAdmin = createAsyncThunk(
	"loginAdmin",
	async ({email, password}, {rejectWithValue}) => {
		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({email, password}),
		};

		try {
			const url = `${import.meta.env.VITE_BASE_URL}/superAdminOnboarding`;
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
	token: "",
	toasts: [{id: "12345", message: "You have exceeded your maximum login attempts, please try again in 20 minutes.", title: "Login Attempts Exceeded"}],
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
			})

			.addCase(loginAdmin.fulfilled, (state, {payload}) => {
				state.loginLoading = false;
				state.token = payload;
			})

			.addMatcher(loginAdmin.rejected, (state, {payload}) => {
				state.loginLoading = false;
			});
	},
});

// export const { } = passwordSlice.actions

export default loginAdminSlice.reducer;
export const loginAdminActions = loginAdminSlice.actions