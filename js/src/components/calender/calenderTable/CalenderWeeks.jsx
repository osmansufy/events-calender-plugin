const CalenderWeeks = () => {
	const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	return (
		<thead>
			<tr>
				{ weekdays.map( ( day, index ) => (
					<th key={ index } className="h-12">
						{ day }
					</th>
				) ) }
			</tr>
		</thead>
	);
};

export default CalenderWeeks;
