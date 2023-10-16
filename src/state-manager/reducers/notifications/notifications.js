import {createSlice, current, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";

export const fetchNotifications = createAsyncThunk("fetchNotifications", async (args, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		const config = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/notifications`;
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

export const readNotification = createAsyncThunk("readNotifications", async (args, {rejectWithValue}) => {
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
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/notifications/read`;
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
	error: null,
	errorMessage: "",
	successful: null,
	ReadingNotificationLoading: false,
	ReadingNotificationError: null,
	ReadingNotificationErrorMessage: "",
	ReadingNotificationSuccessful: null,
	notifications: [],
	currentSearchValue: "All",
	searchBy: [
		"All",
		"Account Creation",
		"Account Onboarding",
		"Profile Update",
		"Ticket Update",
		"Ticket Edit",
	],
	searchByForCustomers: [
		"All",
		"Account Creation",
		"Account Onboarding",
		"Profile Update",
		"Ticket Update",
		"Ticket Edit",
	],
	searchByForAdmins: [
		"All",
		"Account Creation",
		"Account Onboarding",
		"Profile Update",
		"Ticket Update",
		"Ticket Edit",
	],
	sortByAscending: true,
};

const notificationsSlice = createSlice({
	name: "notificationsSlice",
	initialState: initialState,
	reducers: {
		reset: () => {
			return initialState
		},
		updateField: (state, action) => {
			const payload = action.payload;

			if (Array.isArray(payload)) {
				payload.forEach(({key, value}) => {
					state[key] = value;
				});
			} else {
				const {key, value} = payload;
				state[key] = value;
			}
		},

	},
	extraReducers: builder => {
		builder
			.addCase(fetchNotifications.pending, (state, action) => {
				state.loading = true;
				state.notifications = [];
			})
			.addCase(fetchNotifications.fulfilled, (state, action) => {
				const {status, code, data} = action.payload;
				console.log(data)
				state.loading = false;
				if (code === 200 && status === "OK") {
					state.notifications = data.slice().reverse();
					state.successful = true;
					state.error = false;
				} else {
					state.successful = false;
					state.error = true;
					state.errorMessage = "Could not fetch all notifications";
				}
			})
			.addCase(fetchNotifications.rejected, (state, action) => {
				state.loading = false;
				state.notifications = [];
				state.successful = false;
				state.error = true;
				state.errorMessage = action.payload;
			})
			.addCase(readNotification.pending, (state, action) => {
				console.log("reading notifications")
			})
			.addCase(readNotification.fulfilled, (state, action) => {
				console.log(action.payload)
			})
			.addCase(readNotification.rejected, (state, action) => {
				console.log("Error", action)
			});
	},
});

export default notificationsSlice.reducer;

export const notificationsActions = notificationsSlice.actions;
