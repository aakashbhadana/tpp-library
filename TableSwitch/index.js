import React, { useEffect } from "react";
import { FiGrid, FiList } from "react-icons/fi";
import ButtonGroup from "../Inputs/ButtonGroup";

function TableSwitch({ mode, setMode = () => {}, variant = "outlined", size = "xs", className = "", btnClass = "!h-[26px]", defaultMode = "card" }) {
	const { pathname } = window.location;

	useEffect(() => {
		//Using localStorage to store the table mode
		const tables_config = JSON.parse(localStorage.getItem("tables_config") || "{}");
		if (tables_config[pathname]) {
			updateMode(tables_config[pathname]);
		} else {
			updateMode(defaultMode);
		}
		// eslint-disable-next-line
	}, [pathname]);

	const updateMode = (mode) => {
		setMode(mode);
		//Using localStorage to store the table mode
		const tables_config = JSON.parse(localStorage.getItem("tables_config") || "{}");
		tables_config[pathname] = mode;
		localStorage.setItem("tables_config", JSON.stringify(tables_config));
	};

	return (
		<>
			<ButtonGroup
				className={className}
				btnClass={btnClass}
				onClick={(options) => updateMode(options.value)}
				size={size}
				selected={{ label: mode, value: mode }}
				options={[
					{ label: <FiGrid />, value: "card" },
					{ label: <FiList />, value: "table" },
				]}
			/>
		</>
	);
}

export default TableSwitch;
