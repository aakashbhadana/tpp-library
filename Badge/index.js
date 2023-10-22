import React from 'react';

function Badges({variant='', className='', children, onClick=()=>{}}) {
    return (
        <span onClick={onClick} className={`badge ${variant} ${className}`}>
            {children}
        </span>
      )
}

export default Badges;