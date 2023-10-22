import React, { useState } from "react";
import { FileViewer, Img } from "../..";
import { FiX } from "react-icons/fi";

function Attachments({ files = [], onDelete, className = "" }) {
	const [OpenViewer, setOpenViewer] = useState();

	const deleteFile = (index) => {
		const newFiles = files.filter((file, i) => i !== index);
		onDelete(newFiles);
	};

	return (
		<div className={`align-center gap-x-4 ${className}`}>
			{files.map((file, i) => (
				<div className="relative" key={i}>
					<Img onClick={() => setOpenViewer(true)} preview src={file} className="w-14 h-14 rounded-full" />
					{onDelete && (
						<div
							onClick={(e) => {
								e.stopPropagation();
								deleteFile(i);
							}}
							className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-dark text-white text-xs flex-center cursor-pointer"
						>
							<FiX />
						</div>
					)}
				</div>
			))}
			{OpenViewer && <FileViewer files={files} onClose={setOpenViewer} />}
		</div>
	);
}

export default Attachments;
