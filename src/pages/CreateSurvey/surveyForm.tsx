import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FormHeader from './formHeader';
import { createQuestion, createSurvey, submitSurvey } from './slice';
import TopupForm from './topupForm';
import { Link, Route, Routes } from 'react-router-dom';
import Questions from './questions';

const SurveyForm = () => {
	const questions = useAppSelector((state) => state.createSurvey.questions);
	const state = useAppSelector((state) => state.createSurvey);
	const dispatch = useAppDispatch();
	const token = useAppSelector((state) => state.login.token);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		dispatch(
			createSurvey({
				title: state.title,
				description: state.description,
				questions: state.questions,
				payout: state.payout,
				topup: state.topup,
				token,
			})
		);
	}

	return (
		<form
			action=""
			className="shadow-md md:w-3/4 mx-auto bg-white py-5 rounded-lg"
			onSubmit={handleSubmit}
		>
			{state.surveyId && (
				<Link
					to={`/survey/${state.surveyId}`}
					className="text-center block bg-black text-white py-2 px-4 rounded-lg w-1/3 mx-auto my-4"
				>
					Attempt Survey
				</Link>
			)}
			{state.activePage == 0 && <FormHeader />}
			{state.activePage == 1 && <Questions questions={questions} />}
			{state.activePage == 2 && <TopupForm />}
			{state.activePage == 2 && (
				<button className="w-full md:w-3/5 bg-black text-white px-4 py-3 rounded-lg block mx-auto my-8 border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out">
					Create Survey
				</button>
			)}
		</form>
	);
};

export default SurveyForm;
