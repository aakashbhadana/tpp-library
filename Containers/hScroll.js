import React from "react";
import Button from "../Inputs/Button";

function HScroll({ className = "", children, heading = "", onButton, button = "View more" }) {
	return (
		<div className={className}>
			{heading && (
				<div className="flex-center-between mb-3">
					<h4>{heading}</h4>
					{onButton && (
						<Button variant="outlined" onClick={onButton} className="btn btn-xs">
							{button}
						</Button>
					)}
				</div>
			)}
			<div className={`flex gap-x-4 overflow-x-auto overflow-y-hidden scrollbar-hidden pt-1 pb-1`}>{children}</div>
		</div>
	);
}

export default HScroll;
