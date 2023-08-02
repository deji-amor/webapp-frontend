import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {encrypt} from "n-krypta";
import {getAuthToken} from "../../../utilis";

export const resetPassword = createAsyncThunk("resetpassword", async (args, {rejectWithValue}) => {
	const {currentPassword, newPassword, confirmPassword} = args;
	
	const token = await getAuthToken();

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const body = JSON.stringify({
		currentPassword: encrypt(currentPassword, `${import.meta.env.VITE_ENCRYPT_KEY}`),
		newPassword: encrypt(newPassword, `${import.meta.env.VITE_ENCRYPT_KEY}`),
		confirmPassword: encrypt(confirmPassword, `${import.meta.env.VITE_ENCRYPT_KEY}`)
	});

	try {
		const res = await axios.post(
			`${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/setting/reset-password`,
			body,
			config
		);
		return res.data.message;
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
	serverResetResponse: null,
};

const resetPasswordSlice = createSlice({
	name: "resetpassword",
	initialState,
	reducers: {
		SET_SERVER_RESET_NULL: (state, action) => {
			state.serverResetResponse = null;
		},
	},
	extraReducers: builder => {
		builder

			//  Reset Password
			.addCase(resetPassword.pending, (state, {payload}) => {
				state.loginLoading = true;
				state.serverResetResponse = null;
			})

			.addCase(resetPassword.fulfilled, (state, {payload}) => {
				state.loginLoading = false;
				state.serverResetResponse = payload;
			})

			.addMatcher(resetPassword.rejected, (state, {payload}) => {
				state.loginLoading = false;
				state.serverResetResponse = payload;
			});
	},
});

export const {SET_SERVER_RESET_NULL} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
