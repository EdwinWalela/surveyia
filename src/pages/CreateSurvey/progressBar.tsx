import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateActivePage } from './slice';

const ProgressBar = () => {
	const activePage = useAppSelector((state) => state.createSurvey.activePage);
	const dispatch = useAppDispatch();
	const activePageStyle =
		'w-10 h-10 bg-blue-500 text-white mx-auto rounded-full text-lg  flex items-center';
	const inactivePageStyle = 'w-10 h-10 bg-white mx-auto rounded-full text-lg flex items-center';

	const activeBarStyle =
		'bg-blue-500 text-xs leading-none py-1 text-center text-grey-darkest rounded ';
	const inactiveBarStyle =
		'bg-white text-xs leading-none py-1 text-center text-grey-darkest rounded ';

	function handleNavigation(index: number) {
		dispatch(updateActivePage(index));
	}

	return (
		<div className="max-w-xl mx-auto my-4 border-b-2 pb-4">
			<div className="flex pb-3">
				<div className="flex-1"></div>

				<div className="flex-1 cursor-pointer" onClick={() => handleNavigation(0)}>
					<div className={activePage >= 0 ? activePageStyle : inactivePageStyle}>
						<span className=" text-center w-full">
							<span className="text-grey-darker text-center w-full">1</span>
						</span>
					</div>
				</div>

				<div className="w-1/6 align-center items-center align-middle content-center flex">
					<div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
						<div
							className={activePage > 0 ? activeBarStyle : inactiveBarStyle}
							style={{ width: '100%' }}
						></div>
					</div>
				</div>

				<div className="flex-1 cursor-pointer" onClick={() => handleNavigation(1)}>
					<div className={activePage >= 1 ? activePageStyle : inactivePageStyle}>
						<span className="text-center w-full">
							<span className="text-grey-darker text-center w-full">2</span>
						</span>
					</div>
				</div>

				<div className="w-1/6 align-center items-center align-middle content-center flex">
					<div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
						<div
							className={activePage > 1 ? activeBarStyle : inactiveBarStyle}
							style={{ width: '100%' }}
						></div>
					</div>
				</div>

				<div className="flex-1 cursor-pointer" onClick={() => handleNavigation(2)}>
					<div className={activePage >= 2 ? activePageStyle : inactivePageStyle}>
						<span className="text-grey-darker text-center w-full">3</span>
					</div>
				</div>

				<div className="w-1/6 align-center items-center align-middle content-center flex">
					<div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
						<div
							className={activePage > 2 ? activeBarStyle : inactiveBarStyle}
							style={{ width: '100%' }}
						></div>
					</div>
				</div>

				<div className="flex-1 cursor-pointer" onClick={() => handleNavigation(3)}>
					<div className={activePage >= 3 ? activePageStyle : inactivePageStyle}>
						<span className="text-grey-darker text-center w-full">4</span>
					</div>
				</div>

				<div className="flex-1"></div>
			</div>

			<div className="flex text-xs content-center text-center">
				<div className={activePage == 0 ? 'w-1/4 font-medium pr-3 md:pr-0' : 'w-1/4 pr-3 md:pr-0'}>
					Survey Title
				</div>

				<div className={activePage == 1 ? 'w-1/4 font-medium pr-3 md:pr-0' : 'w-1/4 pr-3 md:pr-0'}>
					Questions
				</div>

				<div className={activePage == 2 ? 'w-1/4 font-medium pl-3 md:pl-0' : 'w-1/4 pl-3 md:pl-0'}>
					Payout
				</div>

				<div className={activePage == 3 ? 'w-1/4 font-medium pr-3 md:pl-0' : 'w-1/4 pl-3 md:pr-0'}>
					Confirmation
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
