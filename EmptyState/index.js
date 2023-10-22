import Empty from "./ghost.png";
function EmptyState({ label = "Nothing in here", className = "" }) {
	return (
		<div className={`p-4 flex-center w-full col-span-full text-secondary ${className}`}>
			<div className="flex items-center gap-2 floating">
				<img src={Empty} alt="Empty Icon" className="w-8 m-auto" />
				<div className="text-xs">{label}</div>
			</div>
		</div>
	);
}

export default EmptyState;
