export interface CreateSurveyInitialState {
	title: string;
	description: string;
	questions: SurveyQuestion[];
	payout: number;
	topup: number;
	isLoading: boolean;
	hasError: boolean;
	errorMessage: string;
	surveyId: string;
}

export interface SurveyInitialState {
	title: string;
	description: string;
	questions: SurveyQuestion[];
	isLoading: boolean;
	hasError: boolean;
	errorMessage: string;
}

export interface Survey {
	title: string;
	description: string;
	questions: SurveyQuestion[];
	payout: number;
	topup: number;
	token: string;
}

export interface RegisterInitialState {
	email: string;
	password: string;
	phone: string;
	isLoading: boolean;
	hasError: boolean;
	errorMessage: '';
}

export interface LoginInitialState {
	email: string;
	password: string;
	token: string;
	isLoading: boolean;
	hasError: boolean;
	errorMessage: '';
}

export interface User {
	email: string;
	password: string;
	phoneNumber: string;
}

export interface SurveyQuestion {
	title: string;
	type: string;
	choices: string[];
	required: boolean;
}
