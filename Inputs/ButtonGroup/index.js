import React from 'react';
import { FaLock } from 'react-icons/fa';

const ButtonGroup = ({variant='outlined', activeVariant='secondary', size='sm', onClick=()=>{}, className='', btnClass='', options=[], selected}) => {
    return (
        <div className={`flex rounded-md overflow-hidden border border-muted max-w-min divide-x ${className}`}>
            {
                options.map((option, index) => {
                    const {disabled, label, value} = option
                    const isActive = selected && selected.value === value;
                    return (
                        <button key={index} type='button' onClick={()=>onClick(option)} className={`btn btn-${size} btn-${isActive ? activeVariant : variant} !px-3 !rounded-none !ring-0 ${btnClass}`}>
                            {disabled&&<FaLock className='mr-2'/>}
                            {label}
                        </button>
                    )
                })
            }
        </div>
    );
}

export default ButtonGroup;