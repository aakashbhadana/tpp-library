import React from "react";
import { UserPhoto, FileInput } from "../..";
import { FaEdit } from "react-icons/fa";

function ProfilePhoto({ photo, onUpdate = () => {}, name = "a", className = "", size = "xl" }) {
	const SIZES = {
		xs: "w-6 h-6",
		sm: "w-8 h-8",
		md: "w-10 h-10",
		lg: "w-12 h-12",
		xl: "w-24 h-24",
	};

	return (
		<div className={`relative group max-w-min ${className}`}>
			<UserPhoto photo={photo} className={SIZES[size]} />
			<FileInput file={photo} onUpload={onUpdate}>
				<div className={`${SIZES[size]} rounded-full absolute left-0 top-0 flex-center bg-dark opacity-0 group-hover:opacity-70 cursor-pointer text-white`}>
					<FaEdit />
				</div>
			</FileInput>
		</div>
	);
}

export default ProfilePhoto;
