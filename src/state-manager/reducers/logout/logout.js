import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
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

const allowedTimeOfInactivityInSeconds = 1800

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
				state.loading = true;
			})

			.addCase(logout.fulfilled, (state, {payload}) => {
				state.loading = false;
				state.token = payload;
				const code = payload.code;
				if (code === 200) {
					removeAuthToken()
						.then(() => {
							console.log("Auth token permanently removed from forage");
						})
						.catch(() => {
							console.log("Auth token removal failed from forage");
						});
				}
				state.successful = true;
				state.showModal = false;
			})

			.addCase(logout.rejected, (state, {payload}) => {
				state.loading = false;
				state.errorMessage = "Logout failed!";
				state.clickIncrement = state.clickIncrement + 1;
				state.showModal = false;
			});
	},
});


export default logoutSlice.reducer;
export const logoutActions = logoutSlice.actions;
