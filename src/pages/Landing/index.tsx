import { Link } from 'react-router-dom';
import surveyIcon from '../../assets/survey.svg';

const LandingPage = () => {
	return (
		<div className="md:flex p-10 m-0">
			<div className="md:w-1/2">
				<h1 className="md:text-5xl text-2xl font-medium leading-relaxed">
					Get <strong className="text-blue-500">10x</strong> More Responses{' '}
					<br className="hidden md:block" /> On Your Surveys
				</h1>
				<p className="text-lg mt-3">
					Create surveys and incentivize your target audience with{' '}
					<br className="hidden md:block" /> airtime rewards to increase conversion
				</p>
				<div className="md:w-1/2 w-full">
					<img src={surveyIcon} className="md:w-96 mx-auto md:hidden block" />
				</div>
				<Link to="/sign-up">
					<button className="bg-black text-white text-lg py-3 px-6 rounded-lg mt-6 w-full md:w-auto">
						Get Started
					</button>
				</Link>
			</div>
			<div className="w-1/2">
				<img src={surveyIcon} className="w-96 mx-auto hidden md:block" />
			</div>
		</div>
	);
};

export default LandingPage;
