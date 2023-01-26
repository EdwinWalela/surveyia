import StatBar from './statBar';
import SurveyListTable from './surveyListTable';
import { useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const DashboardPage = () => {
	const token = useAppSelector((state) => state.login.token);
	const navigate = useNavigate();
	useEffect(() => {
		if (!token) {
			navigate('/login', { replace: true });
		}
	}, []);
	return (
		<div className="p-10">
			<StatBar />
			<SurveyListTable />
		</div>
	);
};

export default DashboardPage;
