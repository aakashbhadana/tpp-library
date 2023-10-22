import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { usePopper } from "react-popper";

function EditableSelect({ selected = {}, onChange = () => {}, options = [], label = "", className = "" }) {
	const handleChange = (value) => {
		const selectedOption = options.find((option) => option.value === value);
		onChange(selectedOption);
	};

	//Popper stuff
	const [PopRef, setPopRef] = useState(null);
	const [PopElem, setPopElem] = useState(null);
	const { styles, attributes } = usePopper(PopRef, PopElem, {
		placement: "bottom-start",
	});

	return (
		<>
			<Listbox as="div" value={selected} onChange={handleChange} className={`select`}>
				{label && <Listbox.Label className="mb-2 block">{label}</Listbox.Label>}
				<Listbox.Button ref={setPopRef} className={`btn btn-outlined !inline-block align-middle btn-xs mr-2 ${className}`}>
					<div className="w-full flex-center-between">
						{selected.label}
						<FiChevronDown className="ml-1" />
					</div>
				</Listbox.Button>
				<Transition ref={setPopElem} style={styles.popper} {...attributes.popper} className="z-10 min-w-full">
					<Listbox.Options className={`options`}>
						{options.length > 0 ? (
							options.map((option, i) => {
								if (typeof option === "string") {
									return (
										<div key={i} className="mt-2 font-bold text-xs px-4 py-2">
											{option}
										</div>
									);
								} else {
									return (
										/* Use the `active` state to conditionally style the active option. */
										<Listbox.Option key={i} value={option.value} as={Fragment} className="item">
											{({ active, selected }) => {
												return (
													<li className={`${active ? "bg-light" : "bg-white"}`}>
														{option.label}
														{selected && <FiCheck />}
													</li>
												);
											}}
										</Listbox.Option>
									);
								}
							})
						) : (
							<li className={"item bg-white"}>No Options</li>
						)}
					</Listbox.Options>
				</Transition>
			</Listbox>
		</>
	);
}

export default EditableSelect;
