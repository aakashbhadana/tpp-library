import React, { useEffect, useState } from 'react';

function Logo({className='', error, short}) {

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

    let dotSize = 'w-4 h-4'
    let fontSize = 'text-2xl'
    
    if(short){
        dotSize = 'w-2 h-2'
        fontSize = 'text-sm'
    }
 
    return (
        <div className={`align-center font-bold ${fontSize} ${className}`}>
            {short?'TPP':'The Payment Project'}
            <div className={`${dotSize} ml-2 rounded-full ${!error&&isOnline?'bg-primary':'bg-red-500'}`}></div>
        </div>
    );
}

export default Logo;