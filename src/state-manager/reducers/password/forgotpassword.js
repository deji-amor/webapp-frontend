import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Password Change
export const forgotPassword = createAsyncThunk("forgotpassword", async({newPassword, confirmNewPassword, id}, {rejectWithValue}) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const body = JSON.stringify({password: newPassword, password2: confirmNewPassword})

    try {
        const res = await axios.put(`${import.meta.env.VITE_BASE_URL}`, body, config)
        return res.data
    }catch (err) {
        if (err.response && err.response.data.message) {
            return rejectWithValue(err.response.data.message)
        }else {
            return rejectWithValue(err.message)
        }
    }
})

const initialState = {
    loading: false
}

const forgotPasswordSlice = createSlice({
    name: "password",
    initialState,
    reducers: {
        // dummy: (state, action) => {
            
        // },
    },
    extraReducers: builder => {
        builder

            //  Forgot Password
            .addCase(forgotPassword.pending, (state, actions) => {
                state.loginLoading = true
            })

            .addCase(forgotPassword.fulfilled, (state, {payload}) => {
                state.loginLoading = false
            })

            .addMatcher(forgotPassword.rejected, (state, {payload}) => {
                state.loginLoading = false
            })
    }
})

// export const { } = passwordSlice.actions

export default forgotPasswordSlice.reducer;