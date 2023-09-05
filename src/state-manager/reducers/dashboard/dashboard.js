import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";

// FETCH Analytics Data
export const fetchData = createAsyncThunk("fetchData", async (_, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		const config = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/analytics/admin-dashboard`;
		const response = await fetch(url, config);
		const result = await response.json();
		return result.data;
	} catch (err) {
		if (err.response && err.response.data.message) {
			return rejectWithValue(err.response.data.message);
		} else {
			return rejectWithValue(err.message);
		}
	}
});

// FETCH Recent Activities
export const recentactivities = createAsyncThunk(
	"recentactivities",
	async (_, {rejectWithValue}) => {
		try {
			const token = await getAuthToken();
			const config = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			};
			const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/setting/my-profile`;
			const response = await fetch(url, config);
			const result = await response.json();
			return result.data;
		} catch (err) {
			if (err.response && err.response.data.message) {
				return rejectWithValue(err.response.data.message);
			} else {
				return rejectWithValue(err.message);
			}
		}
	}
);

// // UPDATE Profile Picture
// export const updateProfilePicture = createAsyncThunk(
// 	"updateProfilePicture",
// 	async (_, {rejectWithValue}) => {
// 		try {
// 			const token = await getAuthToken();
// 			const config = {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 					Authorization: `Bearer ${token}`,
// 				},
// 			};
// 			const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/setting/update-profile-picture`;
// 			const response = await fetch(url, config);
// 			const result = await response.json();
// 			return result.data.url;
// 		} catch (err) {
// 			if (err.response && err.response.data.message) {
// 				return rejectWithValue(err.response.data.message);
// 			} else {
// 				return rejectWithValue(err.message);
// 			}
// 		}
// 	}
// );

// UPDATE Profile Picture
export const updateProfilePicture = createAsyncThunk(
	"updateProfilePicture",
	async (imageFile, {rejectWithValue}) => {
		try {
			const fileUrl = await uploadFile(imageFile); // Upload the image to S3
			const token = await getAuthToken();
			const formData = new FormData();
			formData.append("profilePicture", fileUrl); // Use the appropriate field name

			const config = {
				method: "POST", // Use POST request to update profile picture
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: formData,
			};
			const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/setting/update-profile-picture`;
			const response = await fetch(url, config);
			const result = await response.json();
			return result.data.url;
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
	analyticsData: null,
	pictureUrl: null,
};

const dashboardSlice = createSlice({
	name: "dashboard",
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// ADDCASE FETCH Analytics Data
			.addCase(fetchData.pending, state => {
				state.loading = true;
				state.error = null;
				state.analyticsData = null;
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.loading = false;
				state.analyticsData = action.payload;
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || "Could not fetch data";
				state.analyticsData = null;
			})

			// ADDCASE FETCHRecent Activities
			.addCase(recentactivities.pending, state => {
				state.loading = true;
			})
			.addCase(recentactivities.fulfilled, (state, action) => {
				state.loading = false;
				state.recentActivities = action.payload;
			})
			.addCase(recentactivities.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || "Could not fetch data";
			})

			// ADDCASE UPDATE Profile Picture
			.addCase(updateProfilePicture.pending, (state, action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateProfilePicture.fulfilled, (state, action) => {
				console.log(action.payload);
				state.loading = false;
				state.pictureUrl = action.payload;
			})
			.addCase(updateProfilePicture.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || "Could not fetch picture";
			});
	},
});

export default dashboardSlice.reducer;
export const dashboardActions = dashboardSlice.actions;
