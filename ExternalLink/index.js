import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

function ExternalLink({children, className=''}) {

    const openLink = (e) => {
        e.stopPropagation();
        window.open(children, '_blank');
    }

    return ( 
        <span onClick={openLink} className={`cursor-pointer align-center gap-x-1 ${className}`}>
            <span>{children}</span>
            <FiExternalLink className='cursor-pointer'/>
        </span>
     );
}

export default ExternalLink;