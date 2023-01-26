import React, { useEffect, useState } from 'react';
import Question from './question';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchQuestionnaire, submitQuestionnaire } from './slice';

const SurveyPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const survey = useAppSelector((state) => state.survey);
	const questions = survey.questions;
	const navigate = useNavigate();

	const [phone, UpdatePhone] = useState('');

	useEffect(() => {
		if (id) {
			dispatch(fetchQuestionnaire(id));
		}
	}, []);

	function handlePhoneUpdate(e: React.FormEvent<HTMLInputElement>) {
		UpdatePhone(e.currentTarget.value);
	}

	function handleCompleteSurvey() {
		dispatch(submitQuestionnaire({ id: String(id), phone: phone }));
		navigate('/survey/complete');
	}
	return (
		<div className="p-10">
			<h1 className="text-center font-medium text-3xl">{survey.title}</h1>
			<p className="text-center mt-3">{survey.description}</p>
			{questions.map((question, i) => (
				<Question question={question} index={i} />
			))}
			<label className="block text-center">Enter your phone number to receive the payout</label>
			<input
				type="text"
				value={phone}
				onChange={handlePhoneUpdate}
				className="border border-black px-2 py-3 rounded-lg block mx-auto my-4 w-1/3"
				placeholder="Enter phone number"
			/>
			<button
				onClick={handleCompleteSurvey}
				className="text-white bg-black py-4 px-4 rounded-lg block mx-auto w-1/3"
			>
				Complete Survey
			</button>
		</div>
	);
};

export default SurveyPage;
