import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getAuthToken } from "../../../utilis";

export const fetchUsers = createAsyncThunk("users", async (args, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		const config = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`,
			},
		};
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/users`;
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
})

const initialState = {
	loading: false,
	error: null,
	errorMessage: "",
	successful: null,
	users: [],
};

const usersSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		clearData: (state, action) => {
			state.users = [];
		},
	},
  extraReducers: builder => {
    builder
			.addCase(fetchUsers.pending, (state, action) => {
				state.loading = true
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				const {status, code, data} = action.payload
				state.loading = false
				if(code === 200 && status === "OK"){
					state.users = data
					state.successful = true
					state.error = false
				}else {
					state.successful = false;
					state.error = true;
					state.errorMessage = "Could not fetch all users"
				}
			})
      .addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;
					state.users = []
					state.successful = false;
					state.error = true;
					state.errorMessage = "Could not fetch all users";
			})
  }
});

export default usersSlice.reducer;
export const authUserActions = usersSlice.actions;
