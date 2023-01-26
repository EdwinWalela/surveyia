import { configureStore } from '@reduxjs/toolkit';
import createSurveyReducer from '../pages/CreateSurvey/slice';

export const store = configureStore({
	reducer: {
		createSurvey: createSurveyReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
