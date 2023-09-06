import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";

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
			// state.profile = action.payload
		},
		clearData: (state, action) => {
			state.data = {};
			state.profile = {};
		},
	},
	extraReducers: builder => {
		builder

			// ADDCASE EDIT PROFILE
			.addCase(editProfile.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(editProfile.fulfilled, (state, {payload}) => {
				console.log(payload);
				const {data} = payload;
				state.loading = false;
				state.data = {...data};
				state.error = null;
			})
			.addCase(editProfile.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || "Provide the required fields!";
			});
	},
});

export default authUserSlice.reducer;
export const authUserActions = authUserSlice.actions;
