import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { SurveyInitialState, SurveyQuestion } from '../../types';
import api from '../../api/survey/index';

const initialState = {
	questions: [],
	isLoading: false,
	hasError: false,
	errorMessage: '',
} as SurveyInitialState;

export const fetchQuestionnaire = createAsyncThunk(
	'questionnaire/get',
	async (id: string, { rejectWithValue }) => {
		let res;
		try {
			res = await api.fetch(id);
		} catch (error: any) {
			return rejectWithValue(error.message);
		}

		return res.data;
	}
);

export const surveySlice = createSlice({
	name: 'survey-slice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchQuestionnaire.pending, (state, action) => {
			state.isLoading = true;
			state.hasError = false;
			state.errorMessage = '';
		});
		builder.addCase(fetchQuestionnaire.fulfilled, (state, action) => {
			state.isLoading = false;
			state.hasError = false;
			console.log(action.payload);
			state.questions = action.payload;
		});
		builder.addCase(fetchQuestionnaire.rejected, (state, action) => {
			state.isLoading = false;
			state.hasError = true;
			state.errorMessage = '';
		});
	},
});

export default surveySlice.reducer;
