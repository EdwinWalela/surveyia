import ProgressBar from './progressBar';
import SurveyForm from './surveyForm';

const CreateSurveyPage = () => {
	return (
		<div className="py-10 px-4 bg-gray-200 h-full">
			<ProgressBar />
			<SurveyForm />
		</div>
	);
};

export default CreateSurveyPage;
