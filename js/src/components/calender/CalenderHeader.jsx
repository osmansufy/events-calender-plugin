const CalenderHeader = (
	/** @type {
    {
        day: Date;
		onChangeMonth: (month: number) => void;
    
    }
} */ props,
) => {
	let currentMonth = props.day.toLocaleString( 'default', { month: 'long' } );
	let currentYear = props.day.getFullYear();
	return (
		<div className="header flex justify-between border-b p-8">
			<div className="buttons">
				<button
					className="p-4"
					onClick={
						/** @type {any} */
						() => props.onChangeMonth( -1 )
					}>
					<svg
						width="2em"
						fill="gray"
						height="2em"
						viewBox="0 0 16 16"
						className="bi bi-arrow-left-circle"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
						/>
						<path
							fillRule="evenodd"
							d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
						/>
						<path
							fillRule="evenodd"
							d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
						/>
					</svg>
				</button>
				<button
					className="p-1"
					onClick={
						/** @type {any} */
						() => props.onChangeMonth( 1 )
					}>
					<svg
						width="2em"
						fill="gray"
						height="2em"
						viewBox="0 0 16 16"
						className="bi bi-arrow-right-circle"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
						/>
						<path
							fillRule="evenodd"
							d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
						/>
						<path
							fillRule="evenodd"
							d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
				</button>
			</div>
			<span className="text-lg font-bold">
				{ ' ' }
				{ currentYear } { currentMonth }{ ' ' }
			</span>
		</div>
	);
};

export default CalenderHeader;
