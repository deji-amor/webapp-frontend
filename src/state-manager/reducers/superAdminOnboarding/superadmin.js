import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const superAdmin = createAsyncThunk("superAdmin", async(args, {rejectWithValue}) => {
    const config = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(args),
    };

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
    loading: false,
}


const loginAdminSlice = createSlice({
    name: "superadminonboarding",
    initialState,
    reducers: {
        // dummy: (state, action) => {
            
        // },
    },
    extraReducers: builder => {
        builder

            //  Reset Password
            .addCase(superAdmin.pending, (state, actions) => {
                state.loginLoading = true
            })

            .addCase(superAdmin.fulfilled, (state, {payload}) => {
                state.loginLoading = false
                state.token = payload
            })

            .addMatcher(superAdmin.rejected, (state, {payload}) => {
                state.loginLoading = false
            })
    }
})

// export const { } = passwordSlice.actions

export default loginAdminSlice.reducer;