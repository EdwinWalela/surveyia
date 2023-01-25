import './App.css';
import DashboardPage from './pages/Dashboard';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import SurveyPage from './pages/Survey';
import CreateSurveyPage from './pages/CreateSurvey';
import SurveyDetailPage from './pages/SurveyDetail';
import PostSurveyPage from './pages/PostSurvey';
import NotFoundPage from './pages/Notfound';
import DisbursementPage from './pages/Disbursement';
import NavBar from './layout/Navbar';

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/sign-up" element={<RegisterPage />} />
				<Route path="/dashboard">
					<Route index element={<DashboardPage />} />
					<Route path="survey/:id" element={<SurveyDetailPage />} />
					<Route path="create" element={<CreateSurveyPage />} />
				</Route>
				<Route path="/survey">
					<Route path=":id" element={<SurveyPage />} />
					<Route path=":id/pre-complete" element={<DisbursementPage />} />
					<Route path=":id/complete" element={<PostSurveyPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
};

export default App;
