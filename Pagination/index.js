import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Pagination({ total = 1, active = 0, onChange = () => {}, className = "" }) {
	return (
		<nav className={`pagination ${className}`} aria-label="Pagination">
			<div className="page rounded-l-md">
				<span className="sr-only">Previous</span>
				<FiChevronLeft className="w-5 h-5" aria-hidden="true" />
			</div>
			<div className="flex gap-1 scrollbar-hidden max-w-[30rem] overflow-y-auto">
				{[...Array(total)].map((e, i) => {
					return (
						<div key={i} onClick={() => onChange(i + 1)} className={`page px-2 !w-auto ${active === i + 1 ? "active" : ""}`}>
							{i + 1}
						</div>
					);
				})}
			</div>
			<div className="page rounded-r-md">
				<span className="sr-only">Next</span>
				<FiChevronRight className="w-5 h-5" aria-hidden="true" />
			</div>
		</nav>
	);
}

export default Pagination;