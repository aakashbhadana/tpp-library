import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Button from "../Inputs/Button";

function ReadMore({ height = "h-24", className = "", children }) {
	const [Expand, setExpand] = useState(false);

	return (
		<div className="relative">
			<div className={`${Expand ? "h-auto" : height} overflow-hidden ${className}`}>{children}</div>
			<div className="absolute w-full h-12 bottom-8" style={{ background: Expand ? "" : "linear-gradient(to bottom, rgba(255,255,255,0) 20%,rgba(255,255,255,1))" }} />
			<Button onClick={() => setExpand(!Expand)} className="mt-2 btn-xs" variant="outlined">
				More
				{Expand ? <FiChevronUp /> : <FiChevronDown />}
			</Button>
		</div>
	);
}

export default ReadMore;
