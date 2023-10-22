import React, {useState, useEffect} from 'react';
import moment from 'moment';

function Clock() {

    const [CurrentTime, setCurrentTime] = useState('Time to Shine');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format('hh:mm A'));
        }, 1000);
        return () => clearInterval(interval);    
    }, []);

    return ( <>{}{CurrentTime}</> );
}

export default Clock;