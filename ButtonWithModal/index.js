import React, {useState} from 'react';
import Button from '../Inputs/Button';
import Modal from '../Modal';

function ButtonWithModal({className='', variant='outlined', btnClass='btn-xs', buttonLabel='Button', children}) {

    const [Show, setShow] = useState();

    return (
        <>
        <Button onClick={()=>setShow(true)} variant={variant} className={`${btnClass} ${className}`}>{buttonLabel}</Button>
        <Modal open={Show} onClose={()=>setShow()}>
            {children}
        </Modal>
        </>
    );
}

export default ButtonWithModal;