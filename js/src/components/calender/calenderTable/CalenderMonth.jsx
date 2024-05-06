import { useEffect } from 'react';
import CalenderHeader from '../CalenderHeader';
import CalenderWeeks from './CalenderWeeks';
import SingleDay from './SingleDay';

const CalenderMonth = (
	/** @type {
    {
        day: Date;
        events: any[];
		onChangeMonth: (month: number) => void;
		onChangeToday: () => void;
    }
} */ props,
) => {
	const { day, events, onChangeMonth, onChangeToday } = props;
	const hasEvent = ( /** @type {any[]} */ events, /** @type {Date} */ day ) => {
		return events.some( event => {
			return (
				event.date.getDate() == day.getDate() &&
				event.date.getMonth() == day.getMonth() &&
				event.date.getFullYear() == day.getFullYear()
			);
		} );
	};

	const getEventsByDay = ( /** @type {any[]} */ events, /** @type {Date} */ day ) => {
		return events.filter( event => {
			return (
				event.date.getDate() == day.getDate() &&
				event.date.getMonth() == day.getMonth() &&
				event.date.getFullYear() == day.getFullYear()
			);
		} );
	};
	let firstDayOfMonth = new Date( day.getFullYear(), day.getMonth(), 1 );
	let weekdayOfFirstDay = firstDayOfMonth.getDay();

	let allDays = [];

	// loop through the days of the month and add them to the array allDays, the loop will be 42 times to cover all the days of the month
	for ( let i = 0; i < 42; i++ ) {
		// First day of loop

		if ( i === 0 && weekdayOfFirstDay === 0 ) {
			// if the first day of the month is Sunday, then the first day of the loop will be previous month's  last 7th day
			firstDayOfMonth.setDate( firstDayOfMonth.getDate() - 7 );
		} else if ( i === 0 ) {
			// if the first day of the month is not Sunday, then the first day of the loop will be

			firstDayOfMonth.setDate( firstDayOfMonth.getDate() - weekdayOfFirstDay );
		} else {
			// if it is not the first day of the loop, then add 1 day to the previous day
			firstDayOfMonth.setDate( firstDayOfMonth.getDate() + 1 );
		}

		//   create day info object
		let dayInfo = {
			day: firstDayOfMonth.getDate(),
			month: firstDayOfMonth.getMonth(),
			year: firstDayOfMonth.getFullYear(),
			isCurrentMonth: firstDayOfMonth.getMonth() === day.getMonth(),
			isToday: firstDayOfMonth.toDateString() === new Date().toDateString(),
			isEvent: hasEvent( events, firstDayOfMonth ),
			events: getEventsByDay( events, firstDayOfMonth ),
		};

		allDays.push( dayInfo );
	}

	const chunkWeeksDays = [];

	for ( let i = 0; i < allDays.length; i += 7 ) {
		chunkWeeksDays.push( allDays.slice( i, i + 7 ) );
	}

	return (
		<div>
			<div className="container mx-auto mt-10">
				<div className="wrapper bg-white rounded shadow w-full ">
					<CalenderHeader
						day={ day }
						onChangeMonth={ onChangeMonth }
						onChangeToday={ onChangeToday }
					/>
					<table className="w-full">
						<CalenderWeeks />
						<tbody>
							{ chunkWeeksDays.map( ( week, index ) => (
								<tr key={ index }>
									{ week.map( day => (
										<SingleDay key={ day.day } day={ day } />
									) ) }
								</tr>
							) ) }
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default CalenderMonth;
