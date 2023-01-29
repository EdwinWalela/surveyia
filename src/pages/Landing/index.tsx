import { Link } from 'react-router-dom';
import surveyIcon from '../../assets/2.png';
import topUpScreenShot from '../../assets/3.png';
import dashboardScreenShot from '../../assets/dashboard.png';

const LandingPage = () => {
	return (
		<div>
			<div className="md:flex md:p-10 py-10 px-6 m-0">
				<div className="md:w-1/2">
					<h1 className="md:text-5xl md:mt-16 text-2xl font-medium leading-10">
						Get <strong className="text-blue-500">10x</strong> More Responses{' '}
						<br className="hidden md:block" /> On Your Surveys
					</h1>
					<p className="md:text-lg text-md mt-3">
						Create surveys and incentivize your target audience with{' '}
						<br className="hidden md:block" />{' '}
						<strong className="text-blue-500">airtime rewards </strong>to increase conversion.
					</p>
					<div className="md:w-1/2 w-full">
						<img src={surveyIcon} className="md:w-96 mx-auto md:hidden block" />
					</div>
					<Link to="/sign-up">
						<button className="bg-blue-500 text-white text-lg py-3 px-6 rounded-lg mt-6 w-full md:w-auto">
							Get Started
						</button>
					</Link>
				</div>
				<div className="w-1/2">
					<img src={surveyIcon} className="w-72  mx-auto hidden md:block" />
				</div>
			</div>
			<div className="md:flex md:p-10 py-10 px-6 m-0">
				<div className="w-1/2">
					<img src={topUpScreenShot} className="w-72  mx-auto hidden md:block" />
				</div>
				<div className="md:w-1/2">
					<h1 className="md:text-5xl md:mt-16 text-2xl font-medium leading-10">
						Reward respondents with <strong className="text-blue-500">airtime</strong>
						<br className="hidden md:block" />
					</h1>
					<p className="md:text-lg text-md mt-3">
						Maximize your reach by providing
						<strong className="text-blue-500"> incentives </strong>to increase conversion.
					</p>
					<div className="md:w-1/2 w-full">
						<img src={topUpScreenShot} className="md:w-96 mx-auto md:hidden block" />
					</div>
					<Link to="/sign-up">
						<button className="bg-blue-500 text-white text-lg py-3 px-6 rounded-lg mt-6 w-full md:w-auto hidden md:block">
							Get Started
						</button>
					</Link>
				</div>
			</div>
			<div className="w-full pb-20 px-6">
				<h1 className="md:text-5xl text-center md:mt-16 text-2xl font-medium leading-10">
					Manage Your Surveys With <strong className="text-blue-500">Ease.</strong>
					<br className="hidden md:block" />
				</h1>
				<p className="md:text-lg mb-5 text-center text-md mt-3">
					Our intuitive dashboard provide you with all the information needed to keep track of your
					surveys.
				</p>
				<img src={dashboardScreenShot} className="w-90 mx-auto " />
				<Link to="/sign-up">
					<button className="bg-blue-500 text-white text-lg py-3 px-6 rounded-lg mt-6 md:w-1/4 w-full mx-auto block">
						Create Your First Survey
					</button>
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
