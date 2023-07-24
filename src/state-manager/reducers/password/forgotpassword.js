import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Password Email Link
export const forgotpasswordemail = createAsyncThunk("forgotpasswordemail", async({email}, {rejectWithValue}) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const body = JSON.stringify({email: email})

    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}`, body, config)
        return res.data
    }catch (err) {
        if (err.response && err.response.data.message) {
            return rejectWithValue(err.response.data.message)
        }else {
            return rejectWithValue(err.message)
        }
    }
})


// Customer Password Email Link
export const customerforgotpasswordemail = createAsyncThunk("customerforgotpasswordemail", async({email}, {rejectWithValue}) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const body = JSON.stringify({email: email})

    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}`, body, config)
        return res.data
    }catch (err) {
        if (err.response && err.response.data.message) {
            return rejectWithValue(err.response.data.message)
        }else {
            return rejectWithValue(err.message)
        }
    }
})

// Password Recovery
export const forgotpasswordrecovery = createAsyncThunk("forgotpasswordrecovery", async({password, confirmPassword}, {rejectWithValue}) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const body = JSON.stringify({password: password, confirmPassword: confirmPassword})

    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}`, body, config)
        return res.data
    }catch (err) {
        if (err.response && err.response.data.message) {
            return rejectWithValue(err.response.data.message)
        }else {
            return rejectWithValue(err.message)
        }
    }
})


// // Password Change
// export const forgotPassword = createAsyncThunk("forgotpassword", async({newPassword, confirmNewPassword}, {rejectWithValue}) => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }

//     const body = JSON.stringify({password: newPassword, password2: confirmNewPassword})

//     try {
//         const res = await axios.post(`${import.meta.env.VITE_BASE_URL}`, body, config)
//         return res.data
//     }catch (err) {
//         if (err.response && err.response.data.message) {
//             return rejectWithValue(err.response.data.message)
//         }else {
//             return rejectWithValue(err.message)
//         }
//     }
// })

const initialState = {
    loading: false,
    email: '',
    error: false
}

const forgotPasswordSlice = createSlice({
    name: "forgotpassword",
    initialState,
    reducers: {
        SET_EMAIL: (state, {payload: email}) => {
            state.email = email
        },

        REMOVE_EMAIL: (state, {payload: email}) => {
            state.email = ''
        },

        SET_ERROR_FALSE: (state, {paload}) => {
            state.error = false
        }
    },
    extraReducers: builder => {
        builder

            //  Forgot Password Email
            .addCase(forgotpasswordemail.pending, (state, actions) => {
                state.loginLoading = true
                state.error = false
            })

            .addCase(forgotpasswordemail.fulfilled, (state, {payload}) => {
                state.loginLoading = false
                state.error = false
            })

            .addCase(forgotpasswordemail.rejected, (state, {payload}) => {
                state.loginLoading = false
                state.error = true
            })

            //  Customer Forgot Password Email
            .addCase(customerforgotpasswordemail.pending, (state, actions) => {
                state.loginLoading = true
                state.error = false
            })

            .addCase(customerforgotpasswordemail.fulfilled, (state, {payload}) => {
                state.loginLoading = false
                state.error = false
            })

            .addCase(customerforgotpasswordemail.rejected, (state, {payload}) => {
                state.loginLoading = false
                state.error = true
            })

            //  Forgot Password Recovery
            .addCase(forgotpasswordrecovery.pending, (state, actions) => {
                state.loginLoading = true
                state.error = false
            })

            .addCase(forgotpasswordrecovery.fulfilled, (state, {payload}) => {
                state.loginLoading = false
                state.error = false
            })

            .addCase(forgotpasswordrecovery.rejected, (state, {payload}) => {
                state.loginLoading = false
                state.error = true
            })

            // //  Forgot Password
            // .addCase(forgotPassword.pending, (state, actions) => {
            //     state.loginLoading = true
            //     state.error = false
            // })

            // .addCase(forgotPassword.fulfilled, (state, {payload}) => {
            //     state.loginLoading = false
            //     state.error = false
            // })

            // .addMatcher(forgotPassword.rejected, (state, {payload}) => {
            //     state.loginLoading = false
            //     state.error = true
            // })
    }
})

export const { SET_EMAIL, REMOVE_EMAIL, SET_ERROR_FALSE } = forgotPasswordSlice.actions

export default forgotPasswordSlice.reducer;