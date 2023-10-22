import React from 'react';

function ErrorMsg({e}) {
    
    if(e)
    return <div className='text-red-500 text-sm mt-2'>{e}</div>

    return null
}

export default ErrorMsg;