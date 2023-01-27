import React from 'react';
import { createQuestion, updateActivePage } from './slice';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateSurveyDescription, updateSurveyTitle } from './slice';

const FormHeader = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.createSurvey);

	const title = state.title;
	const description = state.description;
	const questions = state.questions;

	function handleTitleChange(e: React.FormEvent<HTMLInputElement>) {
		dispatch(updateSurveyTitle(e.currentTarget.value));
	}
	function handleDescriptionChange(e: React.FormEvent<HTMLTextAreaElement>) {
		dispatch(updateSurveyDescription(e.currentTarget.value));
	}

	function handleAddQuestion(e: React.FormEvent) {
		e.preventDefault();

		if (title != '' && description != '') {
			dispatch(updateActivePage(1));
			if (questions.length == 0) {
				dispatch(createQuestion());
			}
		} else {
			alert('Please enter a title and description for your survey');
		}
	}

	return (
		<div className="text-center mx-auto">
			<label>Provide a title for your survey</label>
			<input
				type="text"
				value={title}
				onChange={handleTitleChange}
				placeholder="Title"
				className="block mx-auto my-2 border border-black rounded-md py-2 px-5 text-lg tracking-wide"
			/>
			<label>Provide a short description for your survey</label>
			<textarea
				value={description}
				onChange={handleDescriptionChange}
				placeholder="Survey description"
				className="block mx-auto my-2 border border-black rounded-md py-2 px-5"
				cols={50}
				rows={5}
			/>

			<button
				onClick={handleAddQuestion}
				className="bg-black text-white px-4 py-2 rounded-lg block mx-auto border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out"
			>
				Add Questions
			</button>
		</div>
	);
};

export default FormHeader;
