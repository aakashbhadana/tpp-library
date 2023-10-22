import React from 'react';
import { FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function CloseButton({className='', size='', url, onClick}) {

    const NAVIGATE = useNavigate()

    return ( 
        <div onClick={()=>url ? NAVIGATE(url) : onClick ? onClick() : NAVIGATE(-1)} className={`text-secondary hover:text-dark cursor-pointer text-${size} ${className}`}>
            <FiX/>
        </div>
     );
}

export default CloseButton;