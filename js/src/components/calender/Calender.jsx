import { useState } from "react";

const Calender = () => {

    const [events, setEvents] = useState([]);

    const daysInShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsInShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getDaysInMonth = (/** @type {number} */ month, /** @type {number} */ year) => {
    return new Date(year, month, 0).getDate();
    };
    
    
    
    return (
        <div>
            
        </div>
    );
};

export default Calender;