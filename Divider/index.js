import React from 'react';

function Divider({className='mt-2 mb-2'}) {
    return (
        <div className={`border-t border-muted ${className}`}></div>
    );
}

export default Divider;