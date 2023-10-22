import moment from "moment";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const TimePicker = React.forwardRef(({ disabled, onFocus = () => {}, onClick = () => {}, value, defaultValue, required = false, onChange = () => {}, placeholder = "", label = "", name, className = "", inputClass = "" }, ref) => {
	const id = name || uuidv4();

	const handleChange = (value) => {
		const timestamp = moment(value, "HH:mm").valueOf();
		onChange(timestamp);
	};

	return (
		<div className={`flex flex-col relative ${className}`} onClick={onClick}>
			{label && (
				<label htmlFor={id} className="mb-2">
					{label}
				</label>
			)}
			<input
				value={moment(value).format("HH:mm")}
				disabled={disabled}
				required={required}
				ref={ref}
				defaultValue={moment(defaultValue).format("HH:mm")}
				onFocus={onFocus}
				onChange={(e) => handleChange(e.target.value)}
				placeholder={placeholder}
				type="time"
				name={id}
				className={`input text-sm !ring-1 !ring-inset !ring-muted !bg-canvas shadow-sm rounded-md ${inputClass}`}
			/>
		</div>
	);
});

export default TimePicker;
