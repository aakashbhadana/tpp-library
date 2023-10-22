import React from "react";
import EmptyState from "../../EmptyState";
import Input from "../Input";
import Button from "../Button";
import { FaTrash } from "react-icons/fa";
import Select from "../Select";

function CustomInput({ fields = [] }) {
	return (
		<>
			{fields.length > 0 ? (
				fields.map((field, i) =>
					field.type === "text" || field.type === "number" ? (
						<div key={i} className="flex gap-2 mb-4">
							<Input className="flex-grow" type={field.type} key={i} label={field.placeholder} placeholder={field.placeholder} />
							<Button variant="danger" className="mt-7 btn-sm">
								<FaTrash />
							</Button>
						</div>
					) : field.type === "select" ? (
						<div key={i} className="flex gap-2 mb-4">
							<Select btnClass="w-full" className="flex-grow" options={field.options?.split(",").map((option) => ({ label: option?.trim(), value: option?.trim() }))} key={i} label={field.placeholder} placeholder={field.placeholder} />
							<Button variant="danger" className="mt-7 btn-sm">
								<FaTrash />
							</Button>
						</div>
					) : null
				)
			) : (
				<EmptyState label="No Fields added" />
			)}
		</>
	);
}

export default CustomInput;
