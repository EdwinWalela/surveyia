const Choice = (props: { choice: string }) => {
	return (
		<>
			<input type="radio" className="mr-4 " />
			<label className="">{props.choice}</label>
			<br />
		</>
	);
};

export default Choice;
