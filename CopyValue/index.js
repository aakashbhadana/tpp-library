import React from 'react';
import { Toast } from '../..';
import { FiCopy } from 'react-icons/fi';

function CopyValue({children, className=''}) {

    const copyValue = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(children);
        Toast.success('Copied to Clipboard');
    }

    return ( 
        <span onClick={copyValue} className={`cursor-pointer align-center gap-x-1 ${className}`}>
            <span>{children}</span>
            <FiCopy className='cursor-pointer'/>
        </span>
     );
}

export default CopyValue;