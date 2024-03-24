import React from "react";
import { FiPaperclip } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import Attachments from "../../Attachments";
import { useState } from "react";
import Spinner from "../../Spinner";
import { useRef } from "react";
import { uploadFile, uploadFileToUrl } from "../../../../Utils/axios";
import { Toast } from "../../..";

function FileInput({ label, name, required = false, className = "", onUpload = () => {}, files = [], file, onDelete, multiple = false, children, extensions = [".jpg", ".jpeg", ".png"], url, data }) {
	const id = name || uuidv4();
	const FILE_REF = useRef();
	const [Uploading, setUploading] = useState();

	const checkExtension = (name) => {
		extensions.forEach((ext) => {
			if (!name?.toLowerCase()?.endsWith(ext)) {
				return false;
			}
		});
		return true;
	};

	const onSelect = () => {
		let file = FILE_REF.current.files;
		if (multiple) {
			//If multiple files are selected
			Object.keys(file).forEach((item) => {
				uploader(file[item]);
			});
		} else {
			file = file[0];
			uploader(file);
		}
	};

	const uploader = (file) => {
		if (file?.name && checkExtension(file.name)) {
			setUploading(true);
			if (url && data) {
				//File will be uploaded to a url with data
				uploadFileToUrl(file, url, data, (r, e) => {
					if (r) {
						onUpload(r);
						setUploading();
					} else if (e) {
						Toast.handleError(e);
						setUploading();
					}
				});
			} else {
				//Common file upload
				uploadFile(file, (r, e) => {
					if (r) {
						onUpload(r);
						setUploading();
					} else if (e) {
						Toast.handleError(e);
						setUploading();
					}
				});
			}
		} else {
			Toast.error(`Only ${extensions.join(",")} files are allowed`);
		}
	};

	return (
		<div className={`${className}`}>
			<input multiple={false} required={required} accept={extensions.join(",")} ref={FILE_REF} onChange={onSelect} name={id} type="file" className="hidden" />
			{children ? (
				//For extending the button functionality
				<div onClick={() => FILE_REF.current.click()}>{children}</div>
			) : (
				<>
					{label && (
						<label htmlFor={id} className="block mb-2">
							{label}
						</label>
					)}
					<div className="align-center gap-x-2">
						{files.length > 0 && <Attachments onDelete={onDelete} files={files} />}
						{file && <Attachments onDelete={onDelete} files={file ? [file] : []} />}
						{!multiple && files.length === 0 && (
							<div onClick={() => FILE_REF.current.click()} className="transition-all duration-300 cursor-pointer w-14 h-14 rounded-2xl bg-light flex-center hover:rotate-90 hover:bg-primary">
								{Uploading ? <Spinner /> : <FiPaperclip />}
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
}

export default FileInput;
