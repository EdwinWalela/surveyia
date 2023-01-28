import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updatePayout, updateTopUp, updateActivePage } from './slice';

const TopupForm = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.createSurvey);

	const payout = state.payout;
	let topup = state.topup;
	let responses = topup / payout;

	if (payout > topup && topup != 0) {
		// alert('Payout should be more than amount to load');
	}

	function handleTopUpChange(e: React.FormEvent<HTMLInputElement>) {
		dispatch(updateTopUp(Number(e.currentTarget.value)));
	}

	function handlePayoutChange(e: React.FormEvent<HTMLInputElement>) {
		dispatch(updatePayout(Number(e.currentTarget.value)));
	}

	function handlePreviousStep(e: React.FormEvent) {
		e.preventDefault();
		dispatch(updateActivePage(1));
	}

	return (
		<div className="mt-8">
			<button
				onClick={handlePreviousStep}
				className="bg-black text-white float-left px-4 py-2 rounded-lg  mx-6 border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out"
			>
				Go Back
			</button>
			<div className="flex justify-center">
				<div className="mx-5">
					<label className="font-medium block my-2">Specify Payout Per Respondent</label>
					<input
						onChange={handlePayoutChange}
						type="number"
						value={payout}
						placeholder="Enter amount"
						className="block  my-2 border border-black rounded-md p-2 text-md tracking-wide"
					/>
				</div>
				<div className="mx-5">
					<label className="font-medium block my-2">Specify Amount To Load</label>
					<input
						onChange={handleTopUpChange}
						type="number"
						value={topup}
						placeholder="Enter amount"
						className="block  my-2 border border-black rounded-md p-2 text-md tracking-wide"
					/>
				</div>
			</div>

			<h3 className="font-medium block my-2 text-center">Maximum Responses</h3>
			<h1 className="text-center text-6xl font-bold">
				{topup == 0 && payout == 0 ? 0 : responses}
			</h1>
		</div>
	);
};

export default TopupForm;
