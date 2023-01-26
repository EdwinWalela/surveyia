import axios from 'axios';
import type { Survey } from '../../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const create = async (survey: Survey) => {
	let response;
	try {
		response = await axios.post(`${BASE_URL}/survey`, {
			title: survey.title,
			description: survey.description,
			questions: survey.questions,
			payout: survey.payout,
			topup: survey.topup,
		});
	} catch (error: any) {
		throw new Error(`Failed to create survey: ${error.message}`);
	}
	return response.status;
};

const fetch = async (id: string) => {
	let response;
	try {
		response = await axios.get(`${BASE_URL}/survey/${id}`);
	} catch (error: any) {
		throw new Error(`Failed to get survey: ${error.message}`);
	}
	return response.data;
};

export default {
	create,
	fetch,
};
