import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";

const initialState = {
	toasts: [],
};

const UISlice = createSlice({
	name: "UI",
	initialState: initialState,
	reducers: {
		showToasts: (state, action) => {
			const toasts = current(state).toasts;
			const message = action.payload.message;
			const title = action.payload.title;
      const type = action.payload.type
			const newToast = {id: Date.now(), message: message, title: title, type: type};
			state.toasts = [...toasts, newToast];
		},
		hideToast: (state, action) => {
			const id = action.payload;
			const toasts = current(state).toasts.slice();
			state.toasts = toasts.filter(toast => toast.id !== id);
		},
		resetToasts: (state, action) => {
			state.toasts = [];
		},
	},
});

export default UISlice.reducer;
export const UIActions = UISlice.actions;
