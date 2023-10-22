import React, { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FiCalendar } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import { usePopper } from "react-popper";
import moment from "moment";

function DatePicker({ label = "", minDate, maxDate, backDateSelection, disabledDates, date, setDate = () => {}, className = "", btnClass = "" }) {
	const [ShowPicker, setShowPicker] = useState(false);

	//Popper stuff
	const [PopRef, setPopRef] = useState(null);
	const [PopElem, setPopElem] = useState(null);
	const { styles, attributes } = usePopper(PopRef, PopElem, {
		placement: "bottom-start",
	});

	return (
		<div className={`relative ${className}`}>
			{label && <label className="block mb-2">{label}</label>}
			<div ref={setPopRef} className={`text-sm ring-1 ring-inset ring-muted bg-canvas shadow-sm rounded-md p-2.5 align-center cursor-pointer ${btnClass}`} onClick={() => setShowPicker(!ShowPicker)}>
				<FiCalendar className="mr-2" />
				<div className="whitespace-nowrap">{date ? moment(date).format("DD MMM YY") : "Select Date"}</div>
			</div>
			<Transition ref={setPopElem} style={styles.popper} {...attributes.popper} className="z-10 mt-2" show={ShowPicker ? true : false}>
				<Calendar
					className="rounded-lg overflow-hidden shadow-lg border"
					onChange={(item) => {
						setDate(moment(item).valueOf());
						setShowPicker(false);
					}}
					date={date && moment(date).toDate()}
					minDate={minDate ? minDate : !backDateSelection ? new Date() : undefined}
					maxDate={maxDate ? moment(maxDate).toDate() : undefined}
					disabledDates={disabledDates}
					color="#1BDB17"
					rangeColors={["#1BDB17"]}
				/>
			</Transition>
		</div>
	);
}

export default DatePicker;
