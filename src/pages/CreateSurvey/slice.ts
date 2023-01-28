import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { CreateSurveyInitialState, Survey } from '../../types';
import api from '../../api/survey';

const initialState = {
	title: '',
	description: '',
	questions: [],
	payout: 0,
	topup: 0,
	isLoading: false,
	hasError: false,
	errorMessage: '',
	token: '',
	surveyId: '',
	activePage: 0,
} as CreateSurveyInitialState;

export const createSurvey = createAsyncThunk(
	'survey/register',
	async (survey: Survey, { rejectWithValue }) => {
		let res;
		try {
			res = await api.create(survey);
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
		return res;
	}
);

export const createSurveySlice = createSlice({
	name: 'create-survey',
	initialState,
	reducers: {
		updateSurveyTitle: (state, action) => {
			state.title = action.payload;
		},
		updateSurveyDescription: (state, action) => {
			state.description = action.payload;
		},
		createQuestion: (state) => {
			state.questions.push({
				title: '',
				type: '',
				choices: [],
				required: false,
			});
		},
		deleteQuestion: (state, action) => {
			let index = action.payload;
			state.questions.splice(index, 1);
		},
		addQuestionChoice: (state, action) => {
			let index = action.payload.index;
			state.questions[index].choices.push(action.payload.choice);
		},
		deleteQuestionChoice: (state, action) => {
			let questionIndex = action.payload.questionIndex;
			let choiceIndex = action.payload.choiceIndex;
			state.questions[questionIndex].choices.splice(choiceIndex, 1);
		},
		updateQuestionChoice: (state, action) => {
			let questionIndex = action.payload.questionIndex;
			let choiceIndex = action.payload.choiceIndex;
			let value = action.payload.value;
			state.questions[questionIndex].choices[choiceIndex] = value;
		},
		updateQuestionTitle: (state, action) => {
			let questionIndex = action.payload.questionIndex;
			state.questions[questionIndex].title = action.payload.value;
		},
		updateQuestionType: (state, action) => {
			let questionIndex = action.payload.questionIndex;
			state.questions[questionIndex].type = action.payload.value;
		},
		updateQuestionRequired: (state, action) => {
			let questionIndex = action.payload.questionIndex;
			state.questions[questionIndex].required = !state.questions[questionIndex].required;
		},
		submitSurvey: (state) => {},
		updateTopUp: (state, action) => {
			state.topup = action.payload;
		},
		updatePayout: (state, action) => {
			state.payout = action.payload;
		},
		updateActivePage: (state, action) => {
			state.activePage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createSurvey.pending, (state, action) => {
			state.isLoading = true;
			state.hasError = false;
			state.errorMessage = '';
		});
		builder.addCase(createSurvey.fulfilled, (state, action) => {
			state.isLoading = false;
			state.hasError = false;
			state.errorMessage = '';
			state.surveyId = action.payload.data.id;
		});
		builder.addCase(createSurvey.rejected, (state, action) => {
			state.isLoading = false;
			state.hasError = true;
			state.errorMessage = String(action.payload);
		});
	},
});

export const {
	createQuestion,
	updateSurveyDescription,
	updateSurveyTitle,
	addQuestionChoice,
	updateQuestionChoice,
	submitSurvey,
	updatePayout,
	updateTopUp,
	updateQuestionTitle,
	updateQuestionType,
	updateQuestionRequired,
	updateActivePage,
	deleteQuestionChoice,
	deleteQuestion,
} = createSurveySlice.actions;
export default createSurveySlice.reducer;
