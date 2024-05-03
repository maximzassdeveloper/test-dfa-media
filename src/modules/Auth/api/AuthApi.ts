import { createAsyncThunk } from '@reduxjs/toolkit'
import baseAxios from '@/config/axiosService'
import { RootState } from '@/store/store'

export interface CreateRequestTokenResponse {
	success: boolean
	expires_at: string
	request_token: string
}

export const createRequestToken = createAsyncThunk<CreateRequestTokenResponse>(
	'auth/createRequestToken',
	async (_, thunkAPI) => {
		try {
			const response = await baseAxios.get<CreateRequestTokenResponse>('/authentication/token/new')

			if (!response.data?.success) {
				return thunkAPI.rejectWithValue('Token not created')
			}

			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue('Unknown error with creation token')
		}
	}
)

export interface CreateSessionIdResponse {
	success: boolean
	session_id: string
}

export const createSessionId = createAsyncThunk<CreateSessionIdResponse, string>(
	'auth/createSessionId',
	async (request_token, thunkAPI) => {
		try {
			// const state = thunkAPI.getState() as RootState
			// const request_token = state.auth.request_token

			const response = await baseAxios.post<CreateSessionIdResponse>(
				'/authentication/session/new',
				{
					request_token,
				}
			)

			if (!response.data?.success) {
				return thunkAPI.rejectWithValue('Session not created')
			}

			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue('Unknown error with creation session')
		}
	}
)
