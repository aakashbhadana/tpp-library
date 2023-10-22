import React from 'react';
import Modal from '../Modal';

function OptionsPopup({open=false, className='!max-w-[40rem]', row=1, col=2, options=[], onClose=()=>{}}) {
    return ( 
        <Modal open={open} onClose={onClose} contentClass={`p-6 !bg-light ${className}`}>
            <div className={`grid grid-cols-${col} grid-rows-${row} gap-4`}>
                {
                    options.map((option,index)=>(
                        <div onClick={option.onClick} key={index} className='border bg-canvas rounded-lg hover:bg-light cursor-pointer p-6'>
                            {option.render}
                        </div>
                    ))
                }
            </div>
        </Modal>
     );
}

export default OptionsPopup;