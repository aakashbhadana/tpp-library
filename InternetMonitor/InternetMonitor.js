import React, { useEffect, useState } from 'react';
import { MdSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import OnOffGame from '../Games/onOff';

function InternetMonitor() {
    
    const [isOnline, setOnline] = useState(true);

    useEffect(()=>{
        setOnline(navigator.onLine)
    },[])

    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });
    
    if(isOnline)
    return null

    return (
        <div className='w-full h-full bg-black bg-opacity-80 absolute left-0 top-0 flex-center z-20 text-white'>
            <div className='text-center'>
                <MdSignalWifiStatusbarConnectedNoInternet4 className='text-8xl m-auto'/>
                <div className='text-4xl font-bold mt-6'>It's your Wifi</div>
                <div className='text-small mt-5'>
                    We are unable to reach our server,<br/>please check your internet connection while we keep trying.
                </div>
                <OnOffGame className="mt-6 text-dark"/>
            </div>
        </div>
    );
}

export default InternetMonitor;