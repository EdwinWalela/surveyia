const StatBar = () => {
	return (
		<div className="md:flow-root mb-8 hidden">
			<div className="md:w-1/4 w-full bg-blue-500 text-white md:float-left p-10 rounded-lg shadow-lg text-center mx-10 cursor-pointer hover:bg-white hover:text-blue-500 border hover:border-blue-500 transition-all ease-in-out">
				<h1 className="text-4xl font-medium">KES 1100</h1>
				<h1 className="text-lg  mt-3  font-medium">Wallet Balance</h1>
			</div>
			<div className="md:w-1/4 w-full bg-slate-700 text-white md:float-left p-10 rounded-lg shadow-lg text-center mx-10 cursor-pointer hover:bg-white hover:text-slate-700 border hover:border-slate-700 transition-all ease-in-out">
				<h1 className="text-4xl  font-medium"> 10</h1>
				<h1 className="text-lg mt-3 font-medium">Total Questionnaires</h1>
			</div>
			<div className="md:w-1/4 w-full bg-indigo-700 text-white md:float-left p-10 rounded-lg shadow-lg text-center mx-10 cursor-pointer hover:bg-white hover:text-indigo-700 border hover:border-indigo-700 transition-all ease-in-out">
				<h1 className="text-4xl  font-medium">34</h1>
				<h1 className="text-lg mt-3 font-medium">Total Respondents</h1>
			</div>
		</div>
	);
};

export default StatBar;
