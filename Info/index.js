import React from "react";
import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import Modal from "../Modal";
import DynamicPricing from "./dynamicPricing";

function Info({ className = "", type }) {
	const [ShowInfo, setShowInfo] = useState();

	const INFO_MAPPING = {
		dynamicPricing: DynamicPricing,
	};

	return (
		<>
			<FiInfo onClick={() => setShowInfo(type)} className={`cursor-pointer inline-item ${className}`} />
			<Modal open={ShowInfo} onClose={() => setShowInfo()}>
				{INFO_MAPPING[type]}
			</Modal>
		</>
	);
}

export default Info;
