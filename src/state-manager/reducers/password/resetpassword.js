import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const resetPassword = createAsyncThunk("resetpassword", async({currentPassword, newPassword, confirmNewPassword, id}, {rejectWithValue}) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const body = JSON.stringify({currentPassword: currentPassword, password: newPassword, password2: confirmNewPassword});

    try {
        const res = await axios.put(`${import.meta.env.VITE_BASE_URL}`, body, config);
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


const resetPasswordSlice = createSlice({
    name: "password",
    initialState,
    reducers: {
        // dummy: (state, action) => {
            
        // },
    },
    extraReducers: builder => {
        builder

            //  Reset Password
            .addCase(resetPassword.pending, (state, actions) => {
                state.loginLoading = true
            })

            .addCase(resetPassword.fulfilled, (state, {payload}) => {
                state.loginLoading = false
            })

            .addMatcher(resetPassword.rejected, (state, {payload}) => {
                state.loginLoading = false
            })
    }
})

// export const { } = passwordSlice.actions

export default resetPasswordSlice.reducer;