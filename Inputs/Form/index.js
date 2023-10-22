import React from 'react';

function Form({onSubmit=()=>{}, className='', loading, children}) {

    return (
        <form className={className} onSubmit={e=>{
            e.preventDefault();
            if(!loading){
                onSubmit(e)
            }
        }}>
            {children}
        </form>
    )
}

export default Form;