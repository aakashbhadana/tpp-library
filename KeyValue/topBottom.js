import React from 'react';

function TopBottom({className='', label, children}) {
    return ( 
        <div className={`text-sm ${className}`}>
            {label && <div className='text-secondary mb-1'>{label}</div>}
            <div className='text-sm font-semibold'>
                {children}
            </div>
        </div>
     );
}

export default TopBottom;