import { SurveyQuestion } from '../../types';
import { useAppDispatch } from '../../hooks';
import { createQuestion, updateActivePage } from './slice';

import NewQuestionForm from './newQuestionForm';
import React from 'react';

const Questions = (props: { questions: SurveyQuestion[] }) => {
	const dispatch = useAppDispatch();

	function handleAddQuestion(e: React.FormEvent) {
		e.preventDefault();
		dispatch(createQuestion());
	}

	function handleNextStep(e: React.FormEvent) {
		e.preventDefault();
		dispatch(updateActivePage(2));
	}

	return (
		<div className="text-center">
			{props.questions.map((question, i) => (
				<NewQuestionForm index={i} />
			))}
			<button
				onClick={handleAddQuestion}
				className="text-blue-500 font-medium px-4 py-2 rounded-lg  mx-6 my-3 border-2 border-blue-500 hover:border-blue-500 active:scale-95 hover:bg-white hover:text-blue-500 transition-all ease-in-out"
			>
				Add {props.questions.length > 0 ? 'Another' : ''} Question
			</button>
			<h3 className="md:hidden block">Or</h3>
			<button
				onClick={handleNextStep}
				className="bg-blue-500 text-white px-4 py-2 rounded-lg  mx-6 my-3 border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out"
			>
				Proceed To Next Step
			</button>
		</div>
	);
};

export default Questions;
