import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { useHotkeys } from "react-hotkeys-hook";
import { debounce, isMac } from "../../../../Utils/utils";

const Input = React.forwardRef(({ disabled, cmd = "p", allowSpecialChars, sync, value, defaultValue, type = "text", required = false, onChange = () => {}, onFocus = () => {}, placeholder = "", label = "", name, className = "" }, ref) => {
	const id = name || uuidv4();
	const SEARCH = useRef();

	if (ref) {
		SEARCH.current = ref.current;
	}

	useHotkeys("ctrl+" + cmd, () => SEARCH.current.focus());
	const debouncedSearch = debounce(onChange);
	const sanitize = (val) => {
		if (!allowSpecialChars) {
			const HtmlRegex = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
			const SpecialRegex = /[&/\\#,+()^$~%'":*?<>{}]/g;
			let sanitized = val.replace(HtmlRegex, "");
			val = sanitized.replace(SpecialRegex, "");
		}
		debouncedSearch(val);
	};

	return (
		<>
			{label && (
				<label htmlFor={id} className="mb-2 block">
					{label}
				</label>
			)}
			<div className={`align-center relative ${className}`}>
				<input value={value} required={required} ref={SEARCH} defaultValue={defaultValue} onFocus={() => onFocus(true)} onBlur={() => onFocus(false)} onChange={(e) => sanitize(e.target.value)} placeholder={placeholder} type={type} name={id} className="searchbox" />
				<FiSearch className="absolute left-2 text-muted text-sm" />
				<div className="absolute text-xs right-2 text-muted">
					{isMac() ? "^" : "Ctrl"} + <span className="uppercase">{cmd}</span>
				</div>
			</div>
		</>
	);
});

export default Input;
