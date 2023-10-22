import React from 'react';

function CountBadge({count, className=''}) {
    return (
        <div className={`align-center justify-center px-1 py-0.5 rounded-md border bg-light text-xs ${className}`}>
            {count}
        </div>
    );
}

export default CountBadge;