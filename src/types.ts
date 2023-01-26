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
