import { useEffect } from 'react';
import Question from './question';
import { useParams } from 'react-router-dom';

const SurveyPage = () => {
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			// fetch questions
		}
	}, []);
	return (
		<div className="p-10">
			<h1 className="text-center font-medium text-3xl">Survey Title</h1>
			<p className="text-center mt-3">Survey Description</p>
			<Question />
			<Question />
			<Question />
			<Question />
			<label className="block text-center">Enter your phone number to receive the payout</label>
			<input
				type="text"
				className="border border-black px-2 py-3 rounded-lg block mx-auto my-4 w-1/3"
				placeholder="Enter phone number"
			/>
			<button className="text-white bg-black py-4 px-4 rounded-lg block mx-auto w-1/3">
				Complete Survey
			</button>
		</div>
	);
};

export default SurveyPage;
