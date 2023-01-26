import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateSurveyDescription, updateSurveyTitle } from './slice';

const FormHeader = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.createSurvey);

	const title = state.title;
	const description = state.description;

	function handleTitleChange(e: React.FormEvent<HTMLInputElement>) {
		dispatch(updateSurveyTitle(e.currentTarget.value));
	}
	function handleDescriptionChange(e: React.FormEvent<HTMLTextAreaElement>) {
		dispatch(updateSurveyDescription(e.currentTarget.value));
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
		</div>
	);
};

export default FormHeader;
