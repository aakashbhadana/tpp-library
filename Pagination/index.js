import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Pagination({total=1, active=0, onChange=()=>{}, className=''}) {

    return (
        <nav className={`pagination ${className}`} aria-label="Pagination">
            <div className='page rounded-l-md'>
              <span className="sr-only">Previous</span>
              <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
            </div>
            {
                [...Array(total)].map((e, i) => {
                    return (
                        <div key={i} onClick={()=>onChange(i+1)} className={`page ${active===i+1 ? 'active' : ''}`}>{i+1}</div>
                    )
                })
            }
            <div className='page rounded-r-md'>
              <span className="sr-only">Next</span>
              <FiChevronRight className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
    );
}

export default Pagination;