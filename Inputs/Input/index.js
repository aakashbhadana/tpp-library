import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Input = React.forwardRef(({disabled, icon, error, allowSpecialChars, onFocus=()=>{}, onClick=()=>{}, sync, value, defaultValue, type='text', required=false, onChange=()=>{}, placeholder='', label='', name, className='', inputClass='', min, max, maxLength}, ref) => {
    
    const id = name||uuidv4();

    const sanitize = (val) => {
        if(allowSpecialChars){
            onChange(val)
        }else{
            const HtmlRegex = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
            const SpecialRegex = /[&/\\#,+()^$~%'":*?<>{}]/g;
            let sanitized = val.replace(HtmlRegex, '')
            sanitized = sanitized.replace(SpecialRegex, '')
            onChange(sanitized)
        }
    }

    return (
        <div className={`flex flex-col relative ${className}`} onClick={onClick}>
            {label&&<label htmlFor={id} className="mb-2">{label}</label>}
            <input maxLength={maxLength} min={min} max={max} value={value} disabled={disabled} required={required} ref={ref} defaultValue={defaultValue} onFocus={onFocus} onChange={e=>sanitize(e.target.value)} placeholder={placeholder} type={type} name={id} className={`input ${icon ? ' indent-6' : ''} ${inputClass}`}/>
            {
                icon && 
                <div className={`absolute left-3 ${label ? 'top-3.5' : 'top-0'} h-full flex-center`}>{icon}</div>
            }
        </div>
    );
})

export default Input;