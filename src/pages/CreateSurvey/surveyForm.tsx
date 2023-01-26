import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FormHeader from './formHeader';
import NewQuestionForm from './newQuestionForm';
import { createQuestion, createSurvey, submitSurvey } from './slice';
import TopupForm from './topupForm';
import { Link } from 'react-router-dom';

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

	function handleAddQuestion(e: React.FormEvent) {
		e.preventDefault();
		dispatch(createQuestion());
	}

	return (
		<form action="" className="shadow-md" onSubmit={handleSubmit}>
			{state.surveyId && (
				<Link
					to={`/survey/${state.surveyId}`}
					className="text-center block bg-black text-white py-2 px-4 rounded-lg w-1/3 mx-auto my-4"
				>
					Attempt Survey
				</Link>
			)}
			<FormHeader />
			{questions.map((question, i) => (
				<NewQuestionForm index={i} />
			))}
			<div className="mt-10">
				<button
					onClick={handleAddQuestion}
					className="bg-black text-white px-4 py-2 rounded-lg block mx-auto border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out"
				>
					Add Question
				</button>
				<TopupForm />
				<button className="w-full md:w-3/5 bg-black text-white px-4 py-3 rounded-lg block mx-auto my-8 border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out">
					Create Survey
				</button>
			</div>
		</form>
	);
};

export default SurveyForm;
