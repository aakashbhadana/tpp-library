import React from 'react';

function Indicators({className='', variant='success', label=''}) {

    return (
        <div className={`indicator ${variant} ${className}`}>
            <div className='pulse'>
                <div className='dot' />
            </div>
            { label && <p className="text-xs leading-5 text-gray-500">{label}</p> }
        </div>

    );
}

export default Indicators;