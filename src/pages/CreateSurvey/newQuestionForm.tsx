import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import trashIcon from '../../assets/trash.svg';
import ChoiceInput from './choiceInput';
import {
	addQuestionChoice,
	deleteQuestion,
	updateQuestionRequired,
	updateQuestionTitle,
	updateQuestionType,
} from './slice';

const NewQuestionForm = (props: { index: number }) => {
	const dispatch = useAppDispatch();
	const questions = useAppSelector((state) => state.createSurvey.questions);
	const choices = questions[props.index].choices;

	const [title, updateTitle] = useState(questions[props.index].title);
	const [type, updateType] = useState('');
	const [required, updateRequired] = useState(false);

	function handleDeleteQuestion() {
		dispatch(deleteQuestion(props.index));
	}

	function handleTitleChange(e: React.FormEvent<HTMLInputElement>) {
		e.preventDefault();
		updateTitle(e.currentTarget.value);
		dispatch(
			updateQuestionTitle({
				value: e.currentTarget.value,
				questionIndex: props.index,
			})
		);
	}

	function handleTypeChange(e: React.FormEvent<HTMLSelectElement>) {
		updateType(e.currentTarget.value);
		dispatch(
			updateQuestionType({
				value: e.currentTarget.value,
				questionIndex: props.index,
			})
		);
	}

	function handleUpdateRequired(e: React.FormEvent<HTMLInputElement>) {
		e.preventDefault();
		updateRequired(!required);
		dispatch(
			updateQuestionRequired({
				value: e.currentTarget.value,
				questionIndex: props.index,
			})
		);
	}

	function handleAddChoice(e: React.FormEvent) {
		e.preventDefault();
		dispatch(
			addQuestionChoice({
				index: props.index,
			})
		);
	}

	return (
		<div className="md:w-3/5 text-center mx-auto md:py-10 md:px-10 px-4  bg-white my-8 rounded-lg">
			{title.length > 0 && (
				<img
					src={trashIcon}
					onClick={handleDeleteQuestion}
					className="w-5 float-right relative bottom-5 left-2"
				/>
			)}
			<label className="bg-black text-white px-2 py-1  rounded-full mr-2 md:text-xl">
				{props.index + 1}
			</label>
			<h3
				className={
					title.length > 35
						? 'inline md:text-lg text-xs font-medium'
						: 'inline md:text-lg font-medium'
				}
			>
				{title}
			</h3>
			<div>
				<input
					type="text"
					onChange={handleTitleChange}
					value={title}
					placeholder="Enter question"
					className="block  my-4 border border-black rounded-md p-2 text-md md:tracking-wide w-full"
				/>
				<label className="font-medium block my-2">Question Type</label>
				<select className="p-2" onChange={handleTypeChange}>
					<option value="Multiple Choice">Multiple Choice</option>
				</select>
				<label className="font-medium block my-2">Choices</label>

				{choices.map((choice, i) => (
					<ChoiceInput choiceIndex={i} questionIndex={props.index} />
				))}
				<button
					onClick={handleAddChoice}
					className="bg-black text-white px-4 py-2 rounded-lg block mx-auto border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out"
				>
					Add Choice
				</button>
				<label className="font-medium block my-2">Additional options</label>
				<input
					onClick={handleUpdateRequired}
					type="radio"
					value="required"
					className="mr-2"
					checked={required}
					defaultChecked
				/>
				<label className="">Required question</label>
			</div>
		</div>
	);
};

export default NewQuestionForm;
