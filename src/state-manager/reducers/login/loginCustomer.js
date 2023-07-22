import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const loginCustomer = createAsyncThunk("loginCustomer", async({email, password}, {rejectWithValue}) => {
    console.log({email, password});
    const config = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    };

    try {
        const url = `${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`;
        const res = await fetch(url, config);
        return res.json();
    }catch (err) {
        console.log({err});
        if (err.response && err.response.data.message) {
            return rejectWithValue(err.response.data.message)
        }else {
            return rejectWithValue(err.message)
        }
    }
})

const initialState = {
	loading: false,
	token: "",
    error: null,
	toasts: [],
};


const loginCustomerSlice = createSlice({
    name: "logincustomer",
    initialState,
    reducers: {
		showToasts: (state, action) => {
			const toasts = current(state).toasts
			const message = action.payload.message
			const title = action.payload.title
			const newToast = {id: Date.now(), message: message, title: title}
			state.toasts = [...toasts, newToast]
		},
		hideToast: (state, action) => {
			const id = action.payload
			const toasts = current(state).toasts.slice()
			state.toasts = toasts.filter(toast => toast.id !== id)
		}
	},
    extraReducers: builder => {
        builder

            //  Reset Password
            .addCase(loginCustomer.pending, (state, payload) => {
                state.loading = true;
                state.token = "";
                state.error = null
            })

            .addCase(loginCustomer.fulfilled, (state, payload) => {
                state.loading = false
                console.log("fulfilled", payload);
                // state.token = payload
            })

            .addMatcher(loginCustomer.rejected, (state, payload) => {
                state.loading = false;
                state.error = payload;
                // console.log("rejected", payload);
                // state.loginLoading = false
            })
    }
})

// export const { } = passwordSlice.actions

export default loginCustomerSlice.reducer;
export const loginCustomerActions = loginCustomerSlice.actions