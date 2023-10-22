import React from 'react';
import { useState } from 'react';
import { FiInfo } from "react-icons/fi";
import Modal from '../Modal';

function Info({className='', children}) {

    const [ShowInfo, setShowInfo] = useState();

    return ( 
        <>
        <FiInfo onClick={()=>setShowInfo(true)} className={`cursor-pointer inline-item ${className}`}/>
        <Modal open={ShowInfo} onClose={()=>setShowInfo(false)} >
            {children}
        </Modal>
        </>
     );
}

export default Info;