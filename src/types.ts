export interface CreateSurveyInitialState {
	title: string;
	description: string;
	questions: SurveyQuestion[];
}

export interface SurveyQuestion {
	title: string;
	type: string;
	choices: string[];
	required: boolean;
}
