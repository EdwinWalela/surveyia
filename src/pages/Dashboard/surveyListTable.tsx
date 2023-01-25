import SurveyListTableItem from './tableItem';

const SurveyListTable = () => {
	return (
		<table className="md:w-full md:mx-auto my-4 mb-16  text-left shadow-md ">
			<thead>
				<tr className="bg-slate-700 text-gray-300">
					<th className="w-3/4 px-6 py-2 text-xs">TITLE</th>
					<th className="w-1/4 px-6 py-2 text-xs text-center">ACTIONS</th>
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
	);
};

export default SurveyListTable;
