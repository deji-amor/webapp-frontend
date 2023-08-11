import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  successful: false,
  data: {},
}

const authUserSlice = createSlice({
  name: "authUser",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    clearData: (state, action) => {
      state.data = {}
    }
  }
})

export default authUserSlice.reducer
export const authUserActions = authUserSlice.actions