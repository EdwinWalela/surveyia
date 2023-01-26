import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateQuestionChoice } from './slice';

const ChoiceInput = (props: { choiceIndex: number; questionIndex: number }) => {
	const dispatch = useAppDispatch();
	const questions = useAppSelector((state) => state.createSurvey.questions);
	const value = questions[props.questionIndex].choices[props.choiceIndex];

	function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
		dispatch(updateQuestionChoice({}));
	}

	return (
		<input
			type="text"
			placeholder="Enter choice"
			onChange={handleOnChange}
			value={value}
			className="block mx-auto my-2 border border-black rounded-md p-2 text-md tracking-wide"
		/>
	);
};

export default ChoiceInput;
