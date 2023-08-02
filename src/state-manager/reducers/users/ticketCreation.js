import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";

export const createTicket = createAsyncThunk("ticket", async (args, {rejectWithValue}) => {
	try {
		const token = await getAuthToken();
		const config = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
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
});

const initialState = {
	loading: false,
	error: null,
	errorMessage: "",
	successful: null,
	users: [],
	// show
	pathToTemplate: [],
  showServiceRequestsTab: true,
  showProjectsTab: false,
	level: 0,
};

const createTicketSlice = createSlice({
	name: "createTicket",
	initialState: initialState,
	reducers: {
    changeAnyState: (state, action) => {
      const {key, value} = action.payload;
      state[key] = value
    },
    changeMultipleState: (state, action) => {
      const array = action.payload
      array.forEach(({key, value}) => {
        state[key] = value;
      });
    }
  },
	extraReducers: builder => {
		builder
			.addCase(createTicket.pending, (state, action) => {})
			.addCase(createTicket.fulfilled, (state, action) => {})
			.addCase(createTicket.rejected, (state, action) => {});
	},
});

export default createTicketSlice.reducer;
export const createTicketActions = createTicketSlice.actions;
