import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function BackButton({className='', size='', url}) {

    const NAVIGATE = useNavigate()

    return ( 
        <div onClick={()=>NAVIGATE( url || -1 )} className={`p-1 text-secondary rounded-md hover:bg-light hover:text-dark cursor-pointer text-${size} ${className}`}>
            <FiChevronLeft/>
        </div>
     );
}

export default BackButton;