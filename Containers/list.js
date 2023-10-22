import React from 'react';

function List({list=[], className='', children}) {
    
    return (
        <ul className={`divide-y divide-light border border-surface rounded-md ${className}`}>
            {list.map((item, index) => (
                <li key={index} className="flex-center-between p-4">
                    <div className="flex">
                        {item.left}
                    </div>
                    <div>
                        {item.right}
                    </div>
                </li>
            ))}
        </ul>
      )
}

export default List;