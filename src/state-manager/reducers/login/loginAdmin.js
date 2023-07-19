import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAdmin = createAsyncThunk("loginAdmin", async({email, password}, {rejectWithValue}) => {
    const config = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    };

    try {
        const url = `${import.meta.env.VITE_BASE_URL}/superAdminOnboarding`;
        const res = await fetch(url, config);
        return res.json();
    }catch (err) {
        if (err.response && err.response.data.message) {
            return rejectWithValue(err.response.data.message)
        }else {
            return rejectWithValue(err.message)
        }
    }
})

const initialState = {
    loading: false,
    token: ''
}


const loginAdminSlice = createSlice({
    name: "loginadmin",
    initialState,
    reducers: {
        // dummy: (state, action) => {
            
        // },
    },
    extraReducers: builder => {
        builder

            //  Reset Password
            .addCase(loginAdmin.pending, (state, actions) => {
                state.loginLoading = true
            })

            .addCase(loginAdmin.fulfilled, (state, {payload}) => {
                state.loginLoading = false
                state.token = payload
            })

            .addMatcher(loginAdmin.rejected, (state, {payload}) => {
                state.loginLoading = false
            })
    }
})

// export const { } = passwordSlice.actions

export default loginAdminSlice.reducer;