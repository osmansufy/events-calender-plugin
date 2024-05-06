const SingleDay = (
	/** @type {
    {
        day: {
            isToday: boolean;
            isCurrentMonth: boolean;
            day: number;
            events: { 
                id: string | number;
                title: string;
                date: Date;
                time: string;
                eventLink: string;
            }[];


        };	
    }
} */ props,
) => {
	const { day } = props;
	return (
		<td
			className={ `border text-center p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ${
				day.isToday ? 'bg-blue-200' : ''
			} ${ day.isCurrentMonth ? '' : 'bg-gray-100' }` }>
			<div className="top h-5 w-full">
				<span className="text-gray-500 text-xl">{ day.day }</span>
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
						<div key={ index } className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
							<a href={ event?.eventLink } target="_blank">
								<span className="event-name">{ event?.title }</span>

								<span className="time">({ event?.time })</span>
							</a>
						</div>
					),
				) }
			</div>
		</td>
	);
};

export default SingleDay;
