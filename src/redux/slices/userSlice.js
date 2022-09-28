import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../config/axios"

export const fetchLogin = createAsyncThunk("user/loginUser", async (params) => {
  const { data } = await axiosInstance.post("/auth/login", params)
  const token = data.access_token

  return data
})

export const fetchRegister = createAsyncThunk(
  "user/registerUser",
  async (params) => {
    const { data } = await axiosInstance.post("/auth/registration", params)

    return data
  }
)

const initialState = {
  username: "",
  email: "",
  isFetching: false,
  isAuth: false,
  isError: false,
  errorMessage: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLogin.fulfilled]: (state, payload) => {
      state.isFetching = false
      state.isSuccess = true
      state.isAuth = true
    },
    [fetchLogin.pending]: (state) => {
      state.isFetching = true
    },
    [fetchLogin.rejected]: (state, payload) => {
      state.isFetching = false
      state.isError = true
    },

    [fetchRegister.fulfilled]: (state, { payload }) => {
      state.isAuth = true
      state.isFetching = false
    },
    [fetchRegister.pending]: (state) => {
      state.isFetching = true
    },
    [fetchRegister.rejected]: (state, payload) => {
      state.isFetching = false
      state.isError = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { t } = userSlice.actions

export default userSlice.reducer
