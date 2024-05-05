class OS_Main {
	constructor() {
		this.eventTimer();
	}

	eventTimer = () => {
		const eventTimeDiv = document.querySelector( '#os-event-timer' );
		//   get the event time from the data attribute data-event-date
		// @ts-ignore
		const eventDate = eventTimeDiv?.dataset.eventDate || '';
		// @ts-ignore
		const eventTime = eventTimeDiv?.dataset.eventTime || '';

		const eventDateTime = new Date( `${ eventDate } ${ eventTime }` ).getTime();
		const now = new Date().getTime();
		const distance = eventDateTime - now;

		console.log( distance );

		if ( distance < 0 && eventTimeDiv ) {
			eventTimeDiv.innerHTML = 'Event Started';
		} else if ( eventTimeDiv ) {
			let days = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) );
			let hours = Math.floor( ( distance % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
			let minutes = Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
			let seconds = Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 );

			setInterval( () => {
				if ( seconds > 0 ) {
					seconds--;
				} else {
					seconds = 59;
					if ( minutes > 0 ) {
						minutes--;
					} else {
						minutes = 59;
						if ( hours > 0 ) {
							hours--;
						} else {
							hours = 23;
							if ( days > 0 ) {
								days--;
							}
						}
					}
				}

				if ( days === 0 && hours === 0 && minutes === 0 && seconds === 0 ) {
					return;
				}

				this.countDown( days, hours, minutes, seconds );
			}, 1000 );
		}
	};

	countDown = (
		/** @type {number} */ days,
		/** @type {number} */ hours,
		/** @type {number} */ minutes,
		/** @type {number} */ seconds,
	) => {
		const eventTimeDiv = document.querySelector( '#os-event-timer' );
		if ( eventTimeDiv ) {
			eventTimeDiv.innerHTML = `${ days }d ${ hours }h ${ minutes }m ${ seconds }s`;
		}
	};
}

new OS_Main();
