import { createSlice } from '@reduxjs/toolkit';
import type { CreateSurveyInitialState } from '../../types';

const initialState = {
	title: '',
	description: '',
	questions: [],
} as CreateSurveyInitialState;

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
		addQuestionChoice: (state, action) => {
			let index = action.payload.index;
			state.questions[index].choices.push(action.payload.choice);
		},
		updateQuestionChoice: (state, action) => {
			let questionIndex = action.payload.questionIndex;
			let choiceIndex = action.payload.choiceIndex;
			let value = action.payload.value;
			state.questions[questionIndex].choices[choiceIndex] = value;
		},
		submitSurvey: (state) => {},
	},
});

export const {
	createQuestion,
	updateSurveyDescription,
	updateSurveyTitle,
	addQuestionChoice,
	updateQuestionChoice,
	submitSurvey,
} = createSurveySlice.actions;
export default createSurveySlice.reducer;
