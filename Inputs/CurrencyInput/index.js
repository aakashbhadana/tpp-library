import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Select from "../Select";

const CurrencyInput = React.forwardRef(({ disabled, min, max, icon, error, allowSpecialChars, onFocus = () => {}, onClick = () => {}, sync, value, defaultValue, required = false, onChange = () => {}, placeholder = "", label = "", name, className = "" }, ref) => {
	const [Currency, setCurrency] = useState({ label: "INR", value: "INR" });
	const id = name || uuidv4();

	return (
		<div className={`flex flex-col relative ${className}`} onClick={onClick}>
			{label && (
				<label htmlFor={id} className="mb-2">
					{label}
				</label>
			)}
			<div className="flex">
				<Select
					className="max-w-min"
					variant="secondary"
					btnClass="!rounded-r-none min-w-min"
					selected={Currency}
					onChange={setCurrency}
					options={[
						{ label: "INR", value: "INR" },
						// {label: 'USD', value: 'USD'},
						// {label: 'EUR', value: 'EUR'},
						// {label: 'GBP', value: 'GBP'},
						// {label: 'JPY', value: 'JPY'},
						// {label: 'AUD', value: 'AUD'},
						// {label: 'CAD', value: 'CAD'},
						// {label: 'CHF', value: 'CHF'},
						// {label: 'CNY', value: 'CNY'},
					]}
				/>
				<input
					min={min}
					max={max}
					disabled={disabled}
					required={required}
					ref={ref}
					defaultValue={defaultValue}
					value={value}
					onFocus={onFocus}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					type="number"
					name={id}
					className={`input !rounded-l-none flex-grow ${icon ? " indent-6" : ""}`}
				/>
			</div>
			{icon && <div className="absolute left-3 top-0 h-full flex-center">{icon}</div>}
		</div>
	);
});

export default CurrencyInput;
