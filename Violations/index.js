import React from 'react';
import { TbAlertTriangleFilled } from 'react-icons/tb';

function Violations({violations=[], className=''}) {
    
    if(violations.length)
    return ( 
        <div className={`bg-danger p-4 text-dangerText text-xs rounded-md ${className}`}>
            <h5 className='align-center mb-2'><TbAlertTriangleFilled className='mr-2'/>{violations.length} Policy Violations</h5>
            {
                violations.map((violation, index)=>{
                    return <div key={index} className="">{index+1}) {violation}</div>
                })
            }
        </div>
     );

    return null
}

export default Violations;