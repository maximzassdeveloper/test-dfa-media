import { createSlice } from '@reduxjs/toolkit'
import { createRequestToken, createSessionId } from '../api/AuthApi'

interface AuthState {
  isAuth: boolean
  isLoading: boolean
  sessionId: string | null
  request_token: string | null
}

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  sessionId: null,
  request_token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false
      state.sessionId = null
      state.request_token = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRequestToken.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(createRequestToken.fulfilled, (state, action) => {
        state.isLoading = false
        state.request_token = action.payload.request_token
      })
      .addCase(createRequestToken.rejected, (state, action) => {
        state.isLoading = false
        state.request_token = null
      })

      .addCase(createSessionId.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(createSessionId.fulfilled, (state, action) => {
        state.isLoading = false
        state.isAuth = true
        state.sessionId = action.payload.session_id
      })
      .addCase(createSessionId.rejected, (state, action) => {
        state.isLoading = false
        state.isAuth = false
        state.sessionId = null
      })
  },
})

export const { logout } = authSlice.actions
export const authReducer = authSlice.reducer
