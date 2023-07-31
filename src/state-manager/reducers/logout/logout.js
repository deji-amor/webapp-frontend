import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import axios from "axios";
import {encrypt} from "n-krypta";
import { removeAuthToken, getAuthToken } from "../../../utilis";

export const logout = createAsyncThunk("logout", async (args, {rejectWithValue}) => {
	try {
		const token = await getAuthToken()
		console.log("logout process started");
		if(token){
			console.log({token});
			const config = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(args),
			};
			const url = `${import.meta.env.VITE_BASE_AUTH_URL}/api/v1/auth/logout`;
			const response = await fetch(url, config);
			const result = await response.json()
			console.log({result});
			return result;
		}else{
			throw new Error("Token not found");
		}
	} catch (err) {
		if (err.response && err.response.data.message) {
			return rejectWithValue(err.response.data.message);
		} else {
			return rejectWithValue(err.message);
		}
	}
});

const allowedTimeOfInactivityInSeconds = 20

const initialState = {
	loading: false,
	errorMessage: null,
	successful: null,
	showModal: false,
	showResetModal: false,
	shouldRedirect: false,
	allowedTimeOfInactivityInSeconds: allowedTimeOfInactivityInSeconds,
};

const logoutSlice = createSlice({
	name: "logout",
	initialState,
	reducers: {
		toggleLogoutModal: state => {
			state.showModal = !state.showModal;
		},
		toggleResetModal: (state, {payload}) => {
			state.showResetModal = !state.showResetModal;
		},
		resetAllowedTimeOfInactivityInSeconds: state => {
			state.allowedTimeOfInactivityInSeconds = allowedTimeOfInactivityInSeconds
		},
		countDownSeconds: state => {
			state.allowedTimeOfInactivityInSeconds = state.allowedTimeOfInactivityInSeconds - 1
		}
	},
	extraReducers: builder => {
		builder

			//  Reset Password
			.addCase(logout.pending, (state, action) => {
				// console.log("pending");
				state.loading = true;
			})

			.addCase(logout.fulfilled, (state, {payload}) => {
				// console.log("fulfilled", payload);
				state.loading = false;
				state.token = payload;
				const code = payload.code;
				if (code === 200) {
					removeAuthToken()
						.then(res => {
							console.log("entered", {res});
						})
						.catch(err => {
							console.error("could not remove", {err});
						});
				}
				state.successful = true;
				state.showModal = false;
			})

			.addCase(logout.rejected, (state, {payload}) => {
				// console.log("rejected", payload);
				state.loading = false;
				state.errorMessage = "Logout failed!";
				state.clickIncrement = state.clickIncrement + 1;
				state.showModal = false;
			});
	},
});

// export const { } = passwordSlice.actions

export default logoutSlice.reducer;
export const logoutActions = logoutSlice.actions;
