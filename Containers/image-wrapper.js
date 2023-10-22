import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import Modal from "../Modal";

function Image({ src, alt = "Image", placeholder = "", className = "", style = {}, onClick = () => {}, preview = false, original }) {
	const [PreviewPhoto, setPreviewPhoto] = useState();
	const previewAvailable = preview && src;
	return (
		<div onClick={onClick} className={`group overflow-hidden bg-light relative ${previewAvailable ? "cursor-pointer" : ""} ${className}`} style={style}>
			{(src || placeholder) && <img src={src || placeholder} alt={alt} className="w-full h-full object-cover" />}
			{previewAvailable && (
				<div
					onClick={(e) => {
						e.stopPropagation();
						setPreviewPhoto(true);
					}}
					className="hidden absolute inset-0 bg-black bg-opacity-50 text-canvas group-hover:align-center justify-center"
				>
					<FiExternalLink />
				</div>
			)}
			<Modal open={PreviewPhoto} onClose={() => setPreviewPhoto()} contentClass="!max-w-[50rem]">
				<img src={src} alt="Preview" className="w-full" />
			</Modal>
		</div>
	);
}

export default Image;
