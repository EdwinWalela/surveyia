import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

const NavBar = () => {
	const token = useAppSelector((state) => state.login.token);

	return (
		<div className="flex shadow-md md:px-5 py-3">
			<div>
				<h1 className="text-2xl md:pl-0 pl-3">
					<Link to="/">Surveyia</Link>
				</h1>
			</div>
			<div className="flex-1 hidden md:block">
				<ul className="text-center pt-1">
					<li className="inline-block mx-14 font-medium">
						<Link to="#">Solutions</Link>
					</li>
					<li className="inline-block mx-14 font-medium">
						<Link to="#">About</Link>
					</li>
					<li className="inline-block mx-14 font-medium">
						<Link to="#">Pricing</Link>
					</li>
				</ul>
			</div>
			{!token && (
				<div className="pt-1 md:ml-0 ml-10">
					<Link to="/login" className="mx-3 bg-black text-white py-2 px-4 rounded-lg">
						Sign In
					</Link>
					<Link to="/sign-up" className="mx-3  border border-black py-2 px-4 rounded-lg">
						Sign Up
					</Link>
				</div>
			)}
		</div>
	);
};

export default NavBar;
