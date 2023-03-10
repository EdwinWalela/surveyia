import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { LoginInitialState, User } from '../../types';
import api from '../../api/auth/index';

const initialState = {
	password: '',
	email: '',
	token: '',
	isLoading: false,
	hasError: false,
	errorMessage: '',
} as LoginInitialState;

export const loginUser = createAsyncThunk(
	'users/login',
	async (user: User, { rejectWithValue }) => {
		let res;
		try {
			res = await api.login(user);
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
		return res.data;
	}
);

export const loginSlice = createSlice({
	name: 'login-slice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state, action) => {
			state.isLoading = true;
			state.hasError = false;
			state.errorMessage = '';
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.hasError = false;
			state.token = action.payload.token;
			state.errorMessage = '';
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.isLoading = false;
			state.hasError = true;
			state.errorMessage = String(action.payload);
		});
	},
});

export default loginSlice.reducer;
