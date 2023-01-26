import checkIcon from '../../assets/check.svg';
import { Link } from 'react-router-dom';

const PostSurveyPage = () => {
	return (
		<div className="p-10">
			<img src={checkIcon} className="w-40 mx-auto block my-10" />
			<h1 className="font-medium text-3xl text-center">Thanks for completing survey</h1>
			<button className="bg-black text-white px-4 py-2 rounded-md block mx-auto my-10">
				<Link to="/"> Return Home</Link>
			</button>
		</div>
	);
};

export default PostSurveyPage;
