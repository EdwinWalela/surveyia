import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FormHeader from './formHeader';
import NewQuestionForm from './newQuestionForm';
import { createQuestion, submitSurvey } from './slice';
import TopupForm from './topupForm';

const SurveyForm = () => {
	const questions = useAppSelector((state) => state.createSurvey.questions);
	const dispatch = useAppDispatch();

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		dispatch(submitSurvey());
	}

	function handleAddQuestion() {
		dispatch(createQuestion());
	}

	return (
		<form action="" className="shadow-md" onSubmit={handleSubmit}>
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
