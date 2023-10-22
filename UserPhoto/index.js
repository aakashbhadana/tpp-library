import React, { useMemo } from "react";
import { getAvatar } from "../../../Utils/utils";
import { Img } from "../..";

function UserPhoto({ letter = "a", photo, className = "w-6 h-6", preview }) {
	const avatar = useMemo(() => getAvatar(letter), [letter]);
	return (
		<>
			<Img preview={preview} placeholder={avatar} src={photo} className={`rounded-full pixelated ${className}`} />
		</>
	);
}

export default UserPhoto;
