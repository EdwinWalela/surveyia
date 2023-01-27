import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

const NavBar = () => {
	const token = useAppSelector((state) => state.login.token);
	const location = useLocation();
	const home = location.pathname == '/';

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
					<NavLink
						to="/login"
						className={({ isActive }) =>
							!isActive
								? 'mx-3 bg-black text-white py-2 px-4 rounded-lg border-2 border-black'
								: 'mx-3 bg-white text-black py-2 px-4 rounded-lg border-2 border-black'
						}
					>
						Sign In
					</NavLink>
					{!home && (
						<NavLink
							to="/sign-up"
							className={({ isActive }) =>
								!isActive && !home
									? 'mx-3 bg-black text-white py-2 px-4 rounded-lg border-2 border-black'
									: 'mx-3 bg-white text-black py-2 px-4 rounded-lg border-2 border-black'
							}
						>
							Sign Up
						</NavLink>
					)}
				</div>
			)}
		</div>
	);
};

export default NavBar;
