import { Portal } from "@headlessui/react";
import React, { useState } from "react";
import { FileInput, Img } from "../..";
import { FiPlus, FiX } from "react-icons/fi";

function FileViewer({ files = [], defaultIndex = 0, onClose, onUpload }) {
	const [ActiveIndex, setActiveIndex] = useState(defaultIndex);

	return (
		<Portal>
			<div className="fade-in fixed z-20 top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] bg-black frosted flex flex-col p-[4vh] gap-[4vh]">
				<div className="h-[78vh]">
					<img src={files[ActiveIndex]} alt="attachment" className="h-full object-cover m-auto rounded-2xl" />
				</div>
				<div className="h-[10vh] flex-center gap-4 flex-nowrap scrollbar-hidden">
					{files.map((attachment, index) => (
						<div className="relative group">
							<Img onClick={() => setActiveIndex(index)} key={index} src={attachment} className={`w-[10vh] h-[10vh] hover:scale-110 cursor-pointer transition-all rounded-xl ${ActiveIndex === index ? "ring-2 ring-primary" : ""}`} />
						</div>
					))}
					{onUpload && (
						<FileInput onUpload={onUpload}>
							<div className="p-4 border text-surface border-dashed rounded-lg cursor-pointer">
								<FiPlus className="text-4xl" />
							</div>
						</FileInput>
					)}
				</div>
				{onClose && (
					<div className="absolute top-0 right-0 z-50 p-[2vh]">
						<div onClick={() => onClose()} className="rounded-xl p-2 shadow-lg bg-white text-xl cursor-pointer hover:scale-125 transition-all">
							<FiX />
						</div>
					</div>
				)}
			</div>
		</Portal>
	);
}

export default FileViewer;
