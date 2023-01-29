import { Link } from 'react-router-dom';
import SurveyListTableItem from './tableItem';

const SurveyListTable = () => {
	return (
		<>
			<div className="flow-root">
				<h1 className="text-xl font-medium float-left pt-2">Your Surveys</h1>
				<button className="float-right bg-blue-500 text-white px-4 py-2 rounded-lg border hover:border-black hover:bg-white hover:text-black active:scale-95 transition-all">
					<Link to="create">Create A Survey</Link>
				</button>
			</div>
			<table className="md:w-full md:mx-auto my-4 mb-16  text-left shadow-md ">
				<thead>
					<tr className="bg-blue-900 text-gray-300">
						<th className="w-3/4 px-6 py-3 text-xs">TITLE</th>
						<th className="w-1/4 px-6 py-3 text-xs text-center">ACTIONS</th>
					</tr>
				</thead>
				<tbody>
					<SurveyListTableItem title="Final Year Project Research - Impact of drought on low income families" />
					<SurveyListTableItem title="New Year Office Party Feedback" />
					<SurveyListTableItem title="Impact Of The Shift To Remote Work" />
				</tbody>
			</table>
		</>
	);
};

export default SurveyListTable;
