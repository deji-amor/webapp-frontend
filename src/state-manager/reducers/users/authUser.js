import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";
import {uploadFile} from "../../../aws/aws-crud-operations";

export const fetchAuthUser = createAsyncThunk("fetchAuthUser", async (args, {rejectWithValue}) => {
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
		return result;
	} catch (err) {
		if (err.response && err.response.data.message) {
			return rejectWithValue(err.response.data.message);
		} else {
			return rejectWithValue(err.message);
		}
	}
});

export const editProfile = createAsyncThunk("editProfile", async (args, {rejectWithValue}) => {
	const {email, firstName, lastName, phoneNumber, workspaceName, country, city} = args;
	const theNewsArgs = {
		firstName: firstName,
		lastName: lastName,
		workspaceName: workspaceName,
		email: email,
		phoneNumber: phoneNumber,
		country: country,
		state: city,
	};
	try {
		const token = await getAuthToken();
		const config = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(theNewsArgs),
		};
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/setting/edit-profile`;
		const response = await fetch(url, config);
		const data = await response.json();
		return data;
	} catch (err) {
		if (err.response && err.response.data.message) {
			return rejectWithValue(err.response.data.message);
		} else {
			return rejectWithValue(err.message);
		}
	}
});

// UPDATE Profile Picture
export const updateProfilePicture = createAsyncThunk(
	"updateProfilePicture",
	async (imageFile, {rejectWithValue}) => {
		try {
			const fileUrl = await uploadFile(imageFile, "users", "profiles");
			const token = await getAuthToken();
			const config = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({pictureUrl: fileUrl}),
			};
			const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/setting/update-profile-picture`;
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

const initialState = {
	loading: false,
	error: false,
	successful: false,
	data: {},
	profile: {},
};

const authUserSlice = createSlice({
	name: "authUser",
	initialState: initialState,
	reducers: {
		setData: (state, action) => {
			state.data = action.payload;
		},
		clearData: (state, action) => {
			state.data = {};
			state.profile = {};
		},
	},

	extraReducers: builder => {
		builder

			// Fetch Auth User
			.addCase(fetchAuthUser.pending, (state, action) => {})

			.addCase(fetchAuthUser.fulfilled, (state, action) => {
				const {status, code, data} = action.payload;
				state.loading = false;
				if (code === 200 && status === "OK") {
					// console.log(data.userData);
					state.data = data.userData;
				}
			})

			.addCase(fetchAuthUser.rejected, (state, action) => {
				// state.data = {};
			})

			// ADDCASE UPDATE Profile Picture
			.addCase(updateProfilePicture.pending, (state, action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateProfilePicture.fulfilled, (state, {payload}) => {
				state.loading = false;
				state.data = {...payload};
			})
			.addCase(updateProfilePicture.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || "Could not fetch picture";
			});
	},
});

export default authUserSlice.reducer;
export const authUserActions = authUserSlice.actions;
