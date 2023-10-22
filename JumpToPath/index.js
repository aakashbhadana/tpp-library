import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function JumpToPath({children, path='', className=''}) {

    const NAVIGATE = useNavigate()

    const goTo = (e) => {
        e.stopPropagation();
        NAVIGATE(path)
    }

    if(children)
    return ( 
        <span onClick={goTo} className={`cursor-pointer align-center gap-x-1 ${className}`}>
            <span>{children}</span>
            <FiArrowUpRight className='cursor-pointer'/>
        </span>
     );
     return null;
}

export default JumpToPath;