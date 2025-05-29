import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface AuthState {
  token: string | null
  user: User | null
  isLoading: boolean
  error: string | null
}

interface User {
  id: string
  name: string
  email: string
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  user: null,
  isLoading: false,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
      state.token = action.payload.token
      state.user = action.payload.user
      localStorage.setItem('token', action.payload.token)
    },
    logout: (state) => {
      state.token = null
      state.user = null
      localStorage.removeItem('token')
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { setCredentials, logout, setLoading, setError } = authSlice.actions

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectIsAuthenticated = (state: RootState) => !!state.auth.token

export default authSlice.reducer