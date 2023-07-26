import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const superAdminCreate = createAsyncThunk("superAdminCreate", async(args, {rejectWithValue}) => {

    // console.table({firstName, lastName, workspaceName, companyEmail, country, city, phoneNumber, password, confirmPassword, privacy})

    const config = {
        headers: {
        'Content-Type': 'application/json',
        }
    };

    const body = JSON.stringify(args)

    try {
        const url = `${import.meta.env.VITE_BASE_AUTH_URL}/api/v1/auth/super-admin-onboarding/`;
        const res = await axios.post(url, body, config);
        return res.data.message;

    }catch (err) {
        if (err.response && err.response.data.message) {
            return rejectWithValue(err.response.data.message)
        }else {
            return rejectWithValue(err.message)
        }
    }
})

export const superAdminVerify = createAsyncThunk("superAdminVerify", async(args, {rejectWithValue}) => {
    const config = {
        method: 'POST',

        headers: {
        'Content-Type': 'application/json',
        },

        body: JSON.stringify(args),
    };

    try {
        const url = `${import.meta.env.VITE_BASE_AUTH_URL}/api/v1/auth/super-admin-email-verification`;
        const res = await fetch(url, config);
        return res.data;

    }catch (err) {
        if (err.response && err.response.data.message) {
            return rejectWithValue(err.response.data.message)
        }else {
            return rejectWithValue(err.message)
        }
    }
})

export const superAdminSendEmail = createAsyncThunk("superAdminSendEmail", async(email, {rejectWithValue}) => {
    const config = {
        method: 'POST',

        headers: {
        'Content-Type': 'application/json',
        },

        body: JSON.stringify({email: email}),
    };

    try {
        const url = `${import.meta.env.VITE_BASE_AUTH_URL}/api/v1/auth/super-admin-resend-email-verification`;
        const res = await fetch(url, config);

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
    email: null,
    response: null,

}


const superAdminSlice = createSlice({
    name: "superadminonboarding",
    initialState,
    reducers: {
        SET_RESPONSE_NULL_ADMIN: (state, {payload}) => {
          state.response = null 
        },

        SET_EMAIL_ADMIN: (state, {payload: email}) => {
            state.email = email
          },
    },
    extraReducers: builder => {
        builder

            //  Reset Password
            .addCase(superAdminCreate.pending, (state, payload) => {
                state.loading = true
                state.response = null
            })

            .addCase(superAdminCreate.fulfilled, (state, payload) => {
                state.loading = false
                state.response = payload
            })

            .addCase(superAdminCreate.rejected, (state, {payload}) => {
                state.loading = false
                state.response = payload
            })

            //  Reset Password Verification
            .addCase(superAdminVerify.pending, (state, payload) => {
                state.loading = true
                state.response = null
            })

            .addCase(superAdminVerify.fulfilled, (state, payload) => {
                state.loading = false
                state.response = payload
            })

            .addCase(superAdminVerify.rejected, (state, {payload}) => {
                state.response = payload
                state.loading = false
            })

            //  Resend Email
            .addCase(superAdminSendEmail.pending, (state, payload) => {
                state.loading = true
                state.response = null
            })

            .addCase(superAdminSendEmail.fulfilled, (state, payload) => {
                state.loading = false
                state.response = payload
            })

            .addMatcher(superAdminSendEmail.rejected, (state, {payload}) => {
                state.loading = false
                state.response = payload
            })
    }
})

export const { SET_RESPONSE_NULL_ADMIN, SET_EMAIL_ADMIN } = superAdminSlice.actions

export default superAdminSlice.reducer;