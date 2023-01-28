import ProgressBar from './progressBar';
import SurveyForm from './surveyForm';

const CreateSurveyPage = () => {
	return (
		<div className="py-10 px-4 bg-gray-200 h-full">
			<h1 className="text-center font-medium mb-4 text-xl">Let's Create Your Survey</h1>
			<ProgressBar />
			<SurveyForm />
		</div>
	);
};

export default CreateSurveyPage;
