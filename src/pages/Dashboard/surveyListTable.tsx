import { Link } from 'react-router-dom';
import SurveyListTableItem from './tableItem';

const SurveyListTable = () => {
	return (
		<>
			<div className="md:flow-root">
				<h1 className="text-xl font-medium md:float-left pt-2">Your Surveys</h1>
				<button className="md:float-right bg-black text-white px-4 py-2 rounded-lg border hover:border-black hover:bg-white hover:text-black active:scale-95 transition-all">
					<Link to="#">Create A Survey</Link>
				</button>
			</div>
			<table className="md:w-full md:mx-auto my-4 mb-16  text-left shadow-md ">
				<thead>
					<tr className="bg-black text-gray-300">
						<th className="w-3/4 px-6 py-3 text-xs">TITLE</th>
						<th className="w-1/4 px-6 py-3 text-xs text-center">ACTIONS</th>
					</tr>
				</thead>
				<tbody>
					<SurveyListTableItem />
					<SurveyListTableItem />
					<SurveyListTableItem />
					<SurveyListTableItem />
					<SurveyListTableItem />
					<SurveyListTableItem />
				</tbody>
			</table>
		</>
	);
};

export default SurveyListTable;
