import React from 'react';

function KeyValueLeftRight({label='', placeholder='None', equal=false, children='', className='', contentClass=''}) {
    return (
        <>
        <div className={`text-sm ${className}`}>
            <div className='grid grid-cols-12 items-center'>
                <div className={equal ? 'col-span-6' : 'col-span-4'}>
                    <div className='text-secondary'>{label}</div>
                </div>
                <div className={`${equal ? 'col-span-6 pl-6' : 'col-span-8'} ${contentClass}`}>
                    {children?children:placeholder}
                </div>
            </div>
        </div>
        </>
    );
}

export default KeyValueLeftRight;