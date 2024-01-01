import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthToken} from "../../../utilis";

export const changeATicketStatus = createAsyncThunk("changeATicketStatus", async (args, {rejectWithValue}) => {
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
		console.log(args);
		const url = `${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/ticket/change-status`;
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
	statuses: ["Pending", "Technician Enroute", "In-progress", "Done"],
	currentTicketIdThatISEditing: null,
	data: {},
};

const ticketDetailsSlice = createSlice({
	name: "ticketDetails",
	initialState: initialState,
	reducers: {
		changeAnyState: (state, action) => {
			const {key, value} = action.payload;
			state[key] = value;
		},
		changeMultipleState: (state, action) => {
			const array = action.payload;
			array.forEach(({key, value}) => {
				state[key] = value;
			});
		},
	},
	extraReducers: builder => {
		builder
			.addCase(changeATicketStatus.pending, (state, action) => {
				console.log(action)
				state.loading = true;
				state.currentTicketIdThatISEditing = action.meta.arg.ticketId;
			})
			.addCase(changeATicketStatus.fulfilled, (state, action) => {
				console.log(action)
				state.loading = false;
				const {status, code, data, message} = action.payload;
				if (status === "OK" && code === 200) {
					state.data = data;
					state.successful = true;
					state.error = false;
				} else {
					state.error = true;
					state.errorMessage = message;
					state.successful = false
				}
				state.currentTicketIdThatISEditing = null
			})
			.addCase(changeATicketStatus.rejected, (state, {payload}) => {
				console.log({payload});
				state.loading = false;
				state.error = true;
				state.errorMessage = payload;
				state.successful = false;
				state.currentTicketIdThatISEditing = null;
			});
	},
});

export default ticketDetailsSlice.reducer;
export const ticketDetailsActions = ticketDetailsSlice.actions;
