import React, { useState, useRef } from "react";
import Button from "../Button";
import Modal from "../../Modal";
import Form from "../Form";

function EditableInput({ value, type, label = "", required = false, onChange = () => {}, onUpdate = () => {}, className = "", loading }) {
	const [Edit, setEdit] = useState();
	const INPUT = useRef();

	const onSubmit = () => {
		const val = INPUT.current.value;
		onUpdate(val);
		setEdit();
	};

	return (
		<>
			<Button onClick={() => setEdit(true)} variant="outlined" className={`!inline-block align-middle btn-xs mr-2 ${className}`}>
				Edit
			</Button>
			<Modal open={Edit} onClose={() => setEdit()}>
				<Form onSubmit={onSubmit}>
					<div className="p-3 flex gap-x-2">
						<input required={required} ref={INPUT} placeholder={label} type={type} defaultValue={value} onChange={(e) => onChange(e.target.value)} className="input flex-grow" />
						<Button loading={loading} type="submit">
							Update
						</Button>
					</div>
				</Form>
			</Modal>
		</>
	);
}

export default EditableInput;
