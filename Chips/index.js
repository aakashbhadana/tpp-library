import React from 'react';
import { FiXCircle } from 'react-icons/fi';

function Chips({options=[], onSelect=()=>{}, onDelete, selected={}, className=''}) {

    if(!options.length) return null;

    return (
        <div className={`flex overflow-x-auto scrollbar-hidden gap-x-2 ${className}`}>
            {
                options.map((option, i)=>{
                    return (
                        <div onClick={()=>onSelect(option)} key={i} className={`chip ${selected.value===option.value ? 'active' : ''} align-center gap-x-2`}>
                            {option.label}
                            {
                                onDelete && <FiXCircle onClick={(e)=>{
                                    e.stopPropagation();
                                    onDelete(option)
                                }}/>
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Chips;