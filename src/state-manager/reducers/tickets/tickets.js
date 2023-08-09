import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	error: null,
	errorMessage: "",
	successful: null,
	tickets: [],
	searchTicketsValue: "",
  searchCustomersValue: "",
};

const ticketsSlice = createSlice({
	name: "tickets",
	initialState: initialState,
	reducers: {
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
});

export default ticketsSlice.reducer;
export const ticketsActions = ticketsSlice.actions;
