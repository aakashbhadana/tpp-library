import React, {useState, useRef} from 'react';
import Button from '../Button';
import Modal from '../../Modal';
import Form from '../Form';

function EditableInput({value, type, label='', required=false, onChange=()=>{}, onUpdate=()=>{}, className='', Input, inputClass=''}) {

    const [Edit, setEdit] = useState();
    const INPUT = useRef()
    
    const onSubmit = () => {
        const val = INPUT.current.value;
        onUpdate(val);
        setEdit()
    }

    return (
        <>
        <Button onClick={()=>setEdit(true)} variant='outlined' className={`!inline-block align-middle btn-xs mr-2 ${className}`}>Edit</Button>
        <Modal open={Edit} onClose={()=>setEdit()}>
                <Form onSubmit={onSubmit}>
                    <div className='p-3 flex gap-x-2'>
                        {
                            Input ?
                            <Input className={inputClass} onSelect={obj=>{
                                onUpdate(obj)
                                setEdit()
                            }} selected={value} placeholder={label}/> :
                            <>
                                <input required={required} ref={INPUT} placeholder={label} type={type} defaultValue={value} onChange={onChange} className='input flex-grow'/>
                                <Button type='submit'>Update</Button>
                            </>
                        }
                    </div>
                </Form>
        </Modal>
        </>
    );
}

export default EditableInput;