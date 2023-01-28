import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteQuestionChoice, updateQuestionChoice } from './slice';
import crossIcon from '../../assets/crossIcon.svg';

const ChoiceInput = (props: { choiceIndex: number; questionIndex: number }) => {
	const dispatch = useAppDispatch();
	const questions = useAppSelector((state) => state.createSurvey.questions);
	const value = questions[props.questionIndex].choices[props.choiceIndex];

	function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
		dispatch(
			updateQuestionChoice({
				choiceIndex: props.choiceIndex,
				questionIndex: props.questionIndex,
				value: e.currentTarget.value,
			})
		);
	}

	function handleDeleteChoice() {
		dispatch(
			deleteQuestionChoice({
				questionIndex: props.questionIndex,
				choiceIndex: props.choiceIndex,
			})
		);
	}

	return (
		<div className="flex">
			<input
				type="text"
				placeholder="Enter choice"
				onChange={handleOnChange}
				value={value}
				className=" mx-auto my-2 border border-black rounded-md p-2 text-md tracking-wide w-4/5"
			/>
			<img src={crossIcon} className="w-6" onClick={handleDeleteChoice} />
		</div>
	);
};

export default ChoiceInput;
