export interface CreateSurveyInitialState {
	title: string;
	description: string;
	questions: SurveyQuestion[];
	payout: number;
	topup: number;
	isLoading: boolean;
	hasError: boolean;
	errorMessage: '';
}

export interface Survery {
	title: string;
	description: string;
	questions: SurveyQuestion[];
	payout: number;
	topup: number;
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
