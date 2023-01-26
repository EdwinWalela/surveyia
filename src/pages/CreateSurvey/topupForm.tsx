import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updatePayout, updateTopUp } from './slice';

const TopupForm = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.createSurvey);

	const payout = state.payout;
	const topup = state.topup;

	const responses = topup / payout;

	function handleTopUpChange(e: React.FormEvent<HTMLInputElement>) {
		dispatch(updateTopUp(e.currentTarget.value));
	}

	function handlePayoutChange(e: React.FormEvent<HTMLInputElement>) {
		dispatch(updatePayout(e.currentTarget.value));
	}

	return (
		<div className="mt-8">
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
			<h1 className="text-center text-6xl font-bold">{responses}</h1>
		</div>
	);
};

export default TopupForm;
