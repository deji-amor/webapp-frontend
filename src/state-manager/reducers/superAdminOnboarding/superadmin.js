import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const superAdminCreate = createAsyncThunk("superAdmin", async(args, {rejectWithValue}) => {
    const config = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(args),
    };
    console.log(args)
    try {
        const url = `${import.meta.env.VITE_BASE_URL}/superAdminOnboarding`;
        const res = await fetch(url, config);
        console.log(res.json())
    }catch (err) {
        if (err.response && err.response.data.message) {
            return rejectWithValue(err.response.data.message)
        }else {
            return rejectWithValue(err.message)
        }
    }
})

const initialState = {
    error: false,
    loading: false,
}


const loginAdminSlice = createSlice({
    name: "superadminonboarding",
    initialState,
    reducers: {
        SET_ERROR_FALSE_ADMIN: (state, action) => {
          state.error = false  
        },
    },
    extraReducers: builder => {
        builder

            //  Reset Password
            .addCase(superAdminCreate.pending, (state, actions) => {
                state.loginLoading = true
            })

            .addCase(superAdminCreate.fulfilled, (state, {payload}) => {
                state.loginLoading = false
            })

            .addMatcher(superAdminCreate.rejected, (state, {payload}) => {
                state.error = true
                state.loginLoading = false
            })
    }
})

export const { SET_ERROR_FALSE_ADMIN } = loginAdminSlice.actions

export default loginAdminSlice.reducer;