import axios from 'axios';
import type { User } from '../../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const register = async (user: User) => {
	let response;
	try {
		response = await axios.post(`${BASE_URL}/auth/signup`, {
			email: user.email,
			password: user.password,
			phone: user.phoneNumber,
			name: user.username,
		});
	} catch (error: any) {
		throw new Error(`Failed to register: ${error.message}`);
	}
	return response.status;
};

const login = async (user: User) => {
	let response;
	try {
		response = await axios.post(`${BASE_URL}/auth/signin`, {
			email: user.email,
			password: user.password,
		});
	} catch (error: any) {
		switch (error.response.status) {
			case 403:
				throw new Error(`Credentials provided are invalid. Please try again `);
			default:
				throw new Error(`Failed to login. Please try again `);
		}
	}
	return response.data;
};

export default {
	register,
	login,
};
