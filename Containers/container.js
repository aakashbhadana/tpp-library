import React from 'react';

function Container({variant='outlined', className='', children}) {
    return (
        <div className={`container ${variant} ${className}`}>
            {children}
        </div>
    );
}

export default Container;