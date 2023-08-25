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
				state.loading = true;
			})
			.addCase(changeATicketStatus.fulfilled, (state, {payload}) => {
				state.loading = true;
				state.loading = false;
				const {status, code, data, message} = payload;
				console.log(payload);
				if (status === "OK" && code === 200) {
					state.data = data;
					state.successful = true;
				} else {
					state.error = true;
					state.errorMessage = message;
				}
			})
			.addCase(changeATicketStatus.rejected, (state, {payload}) => {
				console.log({payload});
				state.loading = false;
				state.error = true;
				state.errorMessage = payload;
				state.successful = false;
			});
	},
});

export default ticketDetailsSlice.reducer;
export const ticketDetailsActions = ticketDetailsSlice.actions;
