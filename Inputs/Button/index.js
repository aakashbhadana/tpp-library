import React from 'react';
import { FaLock } from "react-icons/fa";

const Button = ({loading, variant='dark', disabled, type='button', onClick=()=>{}, className='', children}) => {
    return (
        <>
        <button type={type} onClick={(e)=>{
            e.stopPropagation()
            if(!loading&&!disabled){
                onClick()
            }
        }} className={`btn btn-${disabled ? 'secondary' : variant} ${className}`}>
            {disabled&&<FaLock className='mr-2'/>}
            {
                loading?
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>:
                children
            }
        </button>
        </>
    );
}

export default Button;