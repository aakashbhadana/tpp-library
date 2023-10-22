import React from "react";

function Progress({ label = "Used", showLabels = true, value = 0, symbol = "", size = "xs", className = "" }) {
	let sizes = {
		xs: "h-1.5",
		sm: "h-2",
		md: "h-2.5",
		lg: "h-3",
	};

	return (
		<div className={className}>
			{showLabels && (
				<div className="flex justify-between mb-2">
					<span className="text-sm font-medium">{label}</span>
					<span className="text-xs font-medium">
						{value}
						{symbol}
					</span>
				</div>
			)}
			<div className={`w-full bg-surface rounded-full ${sizes[size]}`}>
				<div className={`bg-primary rounded-full transition-all duration-300 ${sizes[size]}`} style={{ width: `${value}%` }} />
			</div>
		</div>
	);
}

export default Progress;
