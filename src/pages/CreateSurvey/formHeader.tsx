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
		<div className="text-center mx-auto my-4">
			<label className="text-sm">Provide a title for your survey</label>
			<input
				type="text"
				value={title}
				onChange={handleTitleChange}
				placeholder="Title"
				className="block mx-auto my-2 border border-black rounded-md py-2 md:px-5  px-3 tracking-wide md:w-3/5 w-full"
			/>
			<label className="text-sm">Provide a short description for your survey</label>
			<textarea
				value={description}
				onChange={handleDescriptionChange}
				placeholder="Survey description"
				className="block mx-auto my-2 border border-black rounded-md py-2 md:px-5 px-3 md:w-3/5 w-full"
				rows={5}
			/>

			<button
				onClick={handleAddQuestion}
				className="bg-blue-500 text-white px-4 py-2 rounded-lg block mx-auto border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out"
			>
				Add Questions
			</button>
		</div>
	);
};

export default FormHeader;
