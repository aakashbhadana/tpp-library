import React from "react";
import { TbPencil } from "react-icons/tb";

function Remarks({ remarks = [], className = "" }) {
	if (remarks.length)
		return (
			<div className={`bg-light p-4 text-xs rounded-md ${className}`}>
				<h5 className="align-center mb-2">
					<TbPencil className="mr-2" />
					Remarks from Approver
				</h5>
				{remarks.map((remark, index) => {
					return (
						<div key={index} className="">
							{index + 1}) {remark}
						</div>
					);
				})}
			</div>
		);

	return null;
}

export default Remarks;
