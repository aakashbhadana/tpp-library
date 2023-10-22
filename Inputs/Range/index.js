import React from 'react';

function RangeInput({onChange=()=>{}, step=500, value=0, min=0, max=1000, unit='', className=''}) {
    return (
        <>
        <input onChange={e=>onChange(e.target.value)} value={value} type="range" className={`w-full ${className}`} step={step} min={min} max={max} />
        <div className='flex justify-between items-start text-xs text-secondary'>
            <div>{unit}{min}</div>
            <div>{unit}{max}</div>
        </div>
        </>
    );
}

export default RangeInput;