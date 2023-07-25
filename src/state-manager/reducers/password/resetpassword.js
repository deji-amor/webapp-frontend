import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const resetPassword = createAsyncThunk("resetpassword", async(args, {rejectWithValue}) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjkwMjgyMjk2fQ.u5JMu_U-E3b2bXrYks-Z3pa47W91jBXb97GGTEcCTRU'
        },
    }

    const body = JSON.stringify(args);

    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_ACTIVITY_URL}/api/v1/setting/reset-password`, body, config);
        return res.data.message

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
    serverResetResponse: null,
}


const resetPasswordSlice = createSlice({
    name: "resetpassword",
    initialState,
    reducers: {
        SET_SERVER_RESET_NULL: (state, action) => {
            state.serverResetResponse = null
        },
    },
    extraReducers: builder => {
        builder

            //  Reset Password
            .addCase(resetPassword.pending, (state, {payload}) => {
                state.loginLoading = true
                state.serverResetResponse = null
            })

            .addCase(resetPassword.fulfilled, (state, {payload}) => {
                state.loginLoading = false
                state.serverResetResponse = payload
            })

            .addMatcher(resetPassword.rejected, (state, {payload}) => {
                state.loginLoading = false
                state.serverResetResponse = payload
            })
    }
})

export const { SET_SERVER_RESET_NULL } = resetPasswordSlice.actions

export default resetPasswordSlice.reducer;