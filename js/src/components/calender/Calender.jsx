import { useEffect, useState } from 'react';
import CalenderMonth from './calenderTable/CalenderMonth';

const Calender = () => {
	const [ currentDate, setCurrentDate ] = useState( new Date() );

	const [ events, setEvents ] = useState( [] );

	const formatEvents = ( /** @type {any[]} */ events ) => {
		return events.map( event => {
			return {
				id: event.id,
				title: event.title.rendered,
				date: new Date( event[ 'post-meta-fields' ].cs_event_date[ 0 ] ),
				time: event[ 'post-meta-fields' ]?.cs_event_time[ 0 ],
				eventLink: event.link,
			};
		} );
	};

	useEffect( () => {
		fetch( '/wp-json/wp/v2/events/?_fields=post-meta-fields,title,id,link' )
			.then( res => res.json() )
			.then( data => {
				const formattedEvents = formatEvents( data );
				// @ts-ignore
				setEvents( formattedEvents );
			} );
	}, [] );
	const onChangeMonth = ( /** @type {number} */ month ) => {
		let newDate = new Date( currentDate );
		newDate.setMonth( newDate.getMonth() + month );
		setCurrentDate( newDate );
	};

	// implement the onChangeYear function here later
	const onChangeYear = ( /** @type {number} */ year ) => {
		let newDate = new Date( currentDate );
		newDate.setFullYear( newDate.getFullYear() + year );
		setCurrentDate( newDate );
	};

	const onChangeToday = () => {
		setCurrentDate( new Date() );
	};
	return (
		<div>
			<CalenderMonth 
			day={ currentDate } 
			events={ events } 
			onChangeMonth={ onChangeMonth } 
			onChangeToday={ onChangeToday }
			/>
		</div>
	);
};

export default Calender;
