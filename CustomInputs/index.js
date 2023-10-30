import React from "react";

function CustomInputs({ fields = {}, className = "" }) {
	if (Object.keys(fields).length)
		return (
			<div className={`text-xs rounded-md ${className}`}>
				<h5 className="align-center mb-2">Additional Information</h5>
				{Object.entries(fields).map(([key, value], index) => {
					return (
						<div key={index}>
							{index + 1}) <span className="capitalize">{key}</span> - {value}
						</div>
					);
				})}
			</div>
		);

	return null;
}

export default CustomInputs;
