import React from "react";
import Modal from "../Modal";
import Button from "../Inputs/Button";
import { FiCopy } from "react-icons/fi";
import { Toast } from "..";

function CodeViewer({ data, onClose = () => {} }) {
	const copyJsonToClipboard = () => {
		navigator.clipboard.writeText(JSON.stringify(data));
		Toast.success("Copied to clipboard");
	};

	return (
		<>
			<Modal contentClass="!max-w-[50rem] !bg-black" open={!!data} onClose={onClose}>
				<div className="p-4 overflow-x-auto text-white relative">
					<pre className="text-xs select-text">{JSON.stringify(data, null, 3)}</pre>
					<Button onClick={copyJsonToClipboard} className="btn-sm fixed top-4 right-4 gap-2" variant="primary">
						<FiCopy />
						Copy
					</Button>
				</div>
			</Modal>
		</>
	);
}

export default CodeViewer;
