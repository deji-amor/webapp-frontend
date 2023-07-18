import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import axios from "axios";

export const logout = createAsyncThunk(
	"logout",
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
  showModal: false,
};

const logoutSlice = createSlice({
	name: "password",
	initialState,
	reducers: {
    toggleLogoutModal: (state) => {
      state.showModal = !state.showModal
    }
	},
	extraReducers: builder => {
		builder

			//  Reset Password
			.addCase(logout.pending, (state, actions) => {
				state.loginLoading = true;
			})

			.addCase(logout.fulfilled, (state, {payload}) => {
				state.loginLoading = false;
				state.token = payload;
			})

			.addMatcher(logout.rejected, (state, {payload}) => {
				state.loginLoading = false;
			});
	},
});

// export const { } = passwordSlice.actions

export default logoutSlice.reducer;
export const logoutActions = logoutSlice.actions