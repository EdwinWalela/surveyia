import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ChoiceInput from './choiceInput';
import { addQuestionChoice } from './slice';

const NewQuestionForm = (props: { index: number }) => {
	const dispatch = useAppDispatch();
	const questions = useAppSelector((state) => state.createSurvey.questions);
	const choices = questions[props.index].choices;

	const [title, updateTitle] = useState('');
	const [type, updateType] = useState('');
	const [required, updateRequired] = useState(false);

	function handleTitleChange(e: React.FormEvent<HTMLInputElement>) {
		updateTitle(e.currentTarget.value);
	}

	function handleTypeChange(e: React.FormEvent<HTMLSelectElement>) {
		updateType(e.currentTarget.value);
	}

	function handleUpdateRequired() {
		updateRequired(!required);
	}

	function handleAddChoice() {
		dispatch(
			addQuestionChoice({
				index: props.index,
			})
		);
	}

	return (
		<div className="md:w-3/5 text-center mx-auto py-10 px-10 shadow-lg bg-white my-8 rounded-lg">
			<label className="bg-black text-white px-2 py-1  rounded-full mr-2 text-xl">1</label>
			<h3 className="inline text-lg font-medium">{title}</h3>
			<div>
				<input
					type="text"
					onChange={handleTitleChange}
					placeholder="Enter question"
					className="block  my-2 border border-black rounded-md p-2 text-md tracking-wide w-full"
				/>
				<label className="font-medium block my-2">Question Type</label>
				<select className="p-2" onChange={handleTypeChange}>
					<option value="Choice">Choice</option>
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
					value="Required question"
					className="mr-2"
				/>
				<label className="">Required question</label>
			</div>
		</div>
	);
};

export default NewQuestionForm;
