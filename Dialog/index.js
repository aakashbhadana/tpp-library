import React, { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { FiAlertTriangle, FiCheck, FiHelpCircle } from "react-icons/fi";
import Modal from "../Modal";
import Button from "../Inputs/Button";

function DialogPane({ open = false, variant = "success", title = "Title", description = "Title", onClose = () => {}, onSubmit = () => {}, submitLabel = "Submit", cancelLabel = "Cancel", children }) {
	const variants = {
		danger: "bg-red-100 text-red-600",
		success: "bg-green-100 text-green-600",
		warning: "bg-yellow-100 text-yellow-600",
		info: "bg-blue-100 text-blue-600",
	};

	return (
		<Modal open={open ? true : false} onClose={onClose} onSubmit={onSubmit}>
			<div className="bg-white rounded-lg overflow-hidden">
				<div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
					<div className="sm:flex sm:items-start">
						{variant && (
							<div className={`sm:mr-4 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 ${variants[variant]}`}>
								{variant === "danger" ? <FiAlertTriangle className="h-6 w-6" aria-hidden="true" /> : variant === "success" ? <FiCheck className="h-6 w-6 " aria-hidden="true" /> : variant === "warning" ? <FiHelpCircle className="h-6 w-6" aria-hidden="true" /> : <></>}
							</div>
						)}
						<div className="mt-3 text-center sm:mt-0 sm:text-left">
							<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-dark">
								{title}
							</Dialog.Title>
							<div className="mt-2">
								<p className="text-sm text-secondary">{description}</p>
							</div>
						</div>
					</div>
				</div>
				{children}
				<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
					<Button variant={variant} type="button" onClick={onSubmit}>
						{submitLabel}
					</Button>
					<Button className="mr-3" variant="outlined" type="button" onClick={() => onClose()}>
						{cancelLabel}
					</Button>
				</div>
			</div>
		</Modal>
	);
}

export default DialogPane;
