import { useEffect } from 'react';
import CalenderHeader from './CalenderHeader';
import CalenderWeeks from './CalenderWeeks';

const CalenderMonth = (
	/** @type {
    {
        day: Date;
        events: any[];
		onChangeMonth: (month: number) => void;
    }
} */ props,
) => {
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
	let firstDayOfMonth = new Date( props.day.getFullYear(), props.day.getMonth(), 1 );
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
			isCurrentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
			isToday: firstDayOfMonth.toDateString() === new Date().toDateString(),
			isEvent: hasEvent( props.events, firstDayOfMonth ),
			events: getEventsByDay( props.events, firstDayOfMonth ),
		};

		// check if the day has any event
		// let events = props.events.filter((/** @type {{ start_date: string | number | Date; }} */ event) => {
		//     let eventDate = new Date(event.start_date);
		//     return eventDate.getDate() === dayInfo.day && eventDate.getMonth() === dayInfo.month && eventDate.getFullYear() === dayInfo.year;
		// });

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
					<CalenderHeader day={ props.day } onChangeMonth={ props.onChangeMonth } />
					<table className="w-full">
						<CalenderWeeks />
						<tbody>
							{ chunkWeeksDays.map( ( week, index ) => (
								<tr key={ index }>
									{ week.map( ( day, index ) => (
										<td
											key={ index }
											className={ `border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ${
												day.isToday ? 'bg-blue-200' : ''
											} ${ day.isCurrentMonth ? '' : 'bg-gray-100' }` }>
											<div className="top h-5 w-full">
												<span className="text-gray-500">{ day.day }</span>
											</div>
											<div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
												{ day.events.map(
													(
														/** @type {
    {
       
            
            id: string | number;
            title: string;
			date: Date;
			time: string;
			eventLink: string;
			}
      
    }
} */ event,
														index,
													) => (
														<div
															key={ index }
															className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
															<a href={ event?.eventLink } target="_blank">
																<span className="event-name">{ event?.title }</span>

																<span className="time">({ event?.time })</span>
															</a>
														</div>
													),
												) }
											</div>
										</td>
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
