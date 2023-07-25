import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const superAdminCreate = createAsyncThunk("superAdminCreate", async(args, {rejectWithValue}) => {
    const config = {
        method: 'POST',

        headers: {
        'Content-Type': 'application/json',
        },

        body: JSON.stringify(args),
    };

    try {
        const url = `${import.meta.env.VITE_BASE_AUTH_URL}/api/v1/auth/super-admin-onboarding/`;
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
    error: null,
    loading: false,
    email: ""
}


const superAdminSlice = createSlice({
    name: "superadminonboarding",
    initialState,
    reducers: {
        SET_ERROR_FALSE_ADMIN: (state, {payload}) => {
          state.error = null 
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
                state.error = null
            })

            .addCase(superAdminCreate.fulfilled, (state, payload) => {
                state.loading = false
                state.error = null
            })

            .addCase(superAdminCreate.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })

            //  Reset Password Verification
            .addCase(superAdminVerify.pending, (state, payload) => {
                state.loading = true
                state.error = null
            })

            .addCase(superAdminVerify.fulfilled, (state, payload) => {
                state.loading = false
                state.error = null
            })

            .addCase(superAdminVerify.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })

            //  Resend Email
            .addCase(superAdminSendEmail.pending, (state, payload) => {
                state.loading = true
                state.error = null
            })

            .addCase(superAdminSendEmail.fulfilled, (state, payload) => {
                state.loading = false
                state.error = null
            })

            .addCase(superAdminSendEmail.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
    }
})

export const { SET_ERROR_FALSE_ADMIN, SET_EMAIL_ADMIN } = superAdminSlice.actions

export default superAdminSlice.reducer;