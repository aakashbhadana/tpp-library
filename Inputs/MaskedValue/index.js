import React, { useEffect, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function MaskedValue({children, defaultShow=false, className='', label='***'}) {

    const [Show, setShow] = useState(defaultShow);

    useEffect(() => {
        if(Show){
            setTimeout(() => {
                setShow(false)
            }, 6000);
        }
    }, [Show]);

    return ( 
        <span className={`cursor-pointer align-center gap-x-1 ${Show ? '': 'text-secondary'} ${className}`}>
            <span>
                {
                    Show ? children : `${label}`
                }
            </span>
            {
                Show ? 
                <FiEyeOff onClick={()=>setShow(!Show)} className='cursor-pointer'/> :
                <FiEye onClick={()=>setShow(!Show)} className='cursor-pointer'/>
            }
        </span>
     );
}

export default MaskedValue;