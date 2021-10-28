import React, { useEffect, useState } from 'react';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://nameless-caverns-69599.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])


    return (
        <div>
            <h2 className="text-black font-bold text-xl">Our Events are Events</h2>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 md:gap-2  lg:grid-cols-4 lg:gap-3">
                {
                    events.map(event =>
                        <div className="py-10" key={event._id}>
                            <div className="overflow-hidden shadow-lg max-w-sm">
                                <div >
                                    <img className="w-full" src={event.imgThumb} alt="" />
                                </div>
                                <div className="bg-yellow-400 py-4">
                                    <h3 className="font-bold">{event.name}</h3>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Events;