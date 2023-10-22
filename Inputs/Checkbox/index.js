import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Checkbox({checked, label='', onChange=()=>{}, className=''}) {

    const id = label||uuidv4();

    return (
        <div className={`align-center ${className}`}>
            <input id={id} checked={checked} onChange={(e)=>onChange(e.target.checked)} type="checkbox" className='w-4 h-4 accent-primary mr-2 cursor-pointer'/>
            {label&&<label className='font-normal text-secondary text-xs' htmlFor={id}>{label}</label>}
        </div>
    );
}

export default Checkbox;