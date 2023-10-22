import React from 'react';
import { useNavigate } from 'react-router-dom';

function Breadcrumbs({crumbs, className=''}) {
    
    const NAVIGATE = useNavigate()
    
    return (
        <div className={`align-center px-2 ${className}`}>
            {
                crumbs.map((crumb, index) => {
                    const lastItem = index === crumbs.length - 1
                    return (
                        <span key={index} className='text-secondary text-sm capitalize cursor-pointer hover:text-black'>
                            <span className={lastItem?'text-black':'mr-2'} onClick={()=>NAVIGATE(crumb.route)}>{crumb.label}</span>
                            {!lastItem && <span className='mr-2'>/</span>}
                        </span>
                    )
                })
            }
        </div>
    );
}

export default Breadcrumbs;