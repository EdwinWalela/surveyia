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

	function handlePreviousStep(e: React.FormEvent) {
		e.preventDefault();
		dispatch(updateActivePage(0));
	}

	return (
		<div className="text-center">
			<button
				onClick={handlePreviousStep}
				className="bg-black text-white float-left px-4 py-2 rounded-lg  mx-6 border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out"
			>
				Go Back
			</button>
			{props.questions.map((question, i) => (
				<NewQuestionForm index={i} />
			))}
			<button
				onClick={handleAddQuestion}
				className="bg-black text-white px-4 py-2 rounded-lg  mx-6 border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out"
			>
				Add Another Question
			</button>
			<button
				onClick={handleNextStep}
				className="bg-black text-white px-4 py-2 rounded-lg  mx-6 border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out"
			>
				Proceed To Next Step
			</button>
		</div>
	);
};

export default Questions;
