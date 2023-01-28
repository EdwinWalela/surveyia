import Loader from '../../common/loader';
import { useAppSelector } from '../../hooks';

const ConfirmSurvey = () => {
	const state = useAppSelector((state) => state.createSurvey);
	const questionCount = state.questions.length;
	const title = state.title;
	const description =
		state.description.length > 30 ? `${state.description.slice(0, 30)}...` : state.description;
	const topup = state.topup;
	const payout = state.payout;

	return (
		<div className="py-3 w-3/4 mx-auto">
			{state.hasError && (
				<p className="bg-red-400 text-white p-3 mb-3 text-center rounded-md shadow-md">
					{state.errorMessage}
				</p>
			)}
			<h1 className="text-center font-medium mb-4 text-lg">Your Survey Summary</h1>
			<div className="flow-root">
				<h3 className="font-medium text-sm float-left">Title:</h3>
				<h3 className="float-right">{title}</h3>
			</div>
			<div className="flow-root">
				<h3 className="font-medium text-sm float-left">Description:</h3>
				<h3 className="float-right">{description}</h3>
			</div>
			<div className="flow-root">
				<h3 className="font-medium text-sm float-left">No. of questions:</h3>
				<h3 className="float-right">{questionCount}</h3>
			</div>
			<div className="flow-root">
				<h3 className="font-medium text-sm float-left">Payout per respondent:</h3>
				<h3 className="float-right">{payout}</h3>
			</div>
			<div className="flow-root">
				<h3 className="font-medium text-sm float-left">Amount to topup:</h3>
				<h3 className="float-right">KES {topup}</h3>
			</div>

			<button className="w-full md:w-3/5 bg-black text-white px-4 py-3 rounded-lg block mx-auto my-8 border hover:border-black active:scale-95 hover:bg-white hover:text-black transition-all ease-in-out">
				{state.isLoading ? <Loader /> : 'Create Survey'}
			</button>
		</div>
	);
};

export default ConfirmSurvey;
