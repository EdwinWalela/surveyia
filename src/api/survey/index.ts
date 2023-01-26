import axios from 'axios';
import type { Survey } from '../../types';
import { AxiosRequestConfig } from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const create = async (survey: Survey) => {
	console.log(survey);
	let response;
	const requestConfig: AxiosRequestConfig = {
		headers: {
			Authorization: `Bearer ${survey.token}`,
		},
	};
	try {
		response = await axios.post(
			`${BASE_URL}/user/create/questionare`,
			{
				title: survey.title,
				description: survey.description,
				questions: survey.questions,
				payout: survey.payout,
				topup: survey.topup,
			},
			requestConfig
		);
	} catch (error: any) {
		throw new Error(`Failed to create survey: ${error.message}`);
	}
	return response.data;
};

const fetch = async (id: string) => {
	let response;
	try {
		response = await axios.get(`${BASE_URL}/user/questionare/${id}`);
	} catch (error: any) {
		throw new Error(`Failed to get survey: ${error.message}`);
	}
	return response.data;
};

const submit = async (id: string, phone: string) => {
	let response;
	try {
		response = await axios.post(`${BASE_URL}/user/questionare/${id}`, {
			phone: phone,
		});
	} catch (error: any) {
		throw new Error(`Failed to get survey: ${error.message}`);
	}
};

export default {
	create,
	fetch,
	submit,
};
