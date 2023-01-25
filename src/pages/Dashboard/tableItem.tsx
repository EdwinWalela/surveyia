import { Link } from 'react-router-dom';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import shareIcon from '../../assets/share.svg';

const SurveyListTableItem = () => {
	return (
		<tr className=" even:bg-white odd:bg-gray-110">
			<td style={{ maxWidth: 100 }} className="w-1/4 px-6 py-2 text-sm md:text-md">
				My First Survey
			</td>
			<td className="w-1/4 px-6 py-2 text-sm max-w-xs md:text-md text-center">
				<Link to={``}>
					<img src={editIcon} className="w-5 h-5 inline-block mr-6 cursor-pointer" />
				</Link>
				<img src={deleteIcon} className="w-5 h-5 mr-6 inline-block " />
				<img src={shareIcon} className="w-5 h-5 inline-block " />
			</td>
		</tr>
	);
};

export default SurveyListTableItem;
