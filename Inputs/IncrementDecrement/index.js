import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Toast } from "../../..";

function IncrementDecrement({ count = 0, min = 0, max = 10, onChange = () => {}, maxError = "Maximum value reached", minError = "Minimum value reached" }) {
	const decrease = () => {
		if (count - 1 < min) {
			if (minError) {
				Toast.error(minError);
			}
			return;
		} else {
			onChange(count - 1);
		}
	};

	const increase = () => {
		if (count + 1 > max) {
			if (maxError) {
				Toast.error(maxError);
			}
			return;
		} else {
			onChange(count + 1);
		}
	};

	return (
		<>
			<div className="pagination">
				<div onClick={decrease} className="page rounded-l-md">
					<FiMinus />
				</div>
				<div className={`page !font-normal ${count > 0 ? "bg-success border-successText text-successText" : "bg-light"}`}>{count}</div>
				<div onClick={increase} className="page rounded-r-md">
					<FiPlus />
				</div>
			</div>
		</>
	);
}

export default IncrementDecrement;
