import { SurveyQuestion } from '../../types';
import Choice from './choice';

const Question = (props: { question: SurveyQuestion; index: number }) => {
	return (
		<div className="my-7 border-b-4 pb-4">
			<h3 className="font-medium text-xl mb-4">
				{props.index + 1}. {props.question.title}
			</h3>
			{props.question.choices.map((choice) => (
				<Choice choice={choice} />
			))}
		</div>
	);
};

export default Question;
