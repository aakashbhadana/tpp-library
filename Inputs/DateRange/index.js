import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FiCalendar, FiChevronRight } from "react-icons/fi";
import { addDays } from "date-fns";
import { Transition } from "@headlessui/react";
import moment from "moment";
import { usePopper } from "react-popper";

function DateRangePicker({ label = "", range = {}, setRange = () => {}, className = "", inputClass = "", minDate, maxDate }) {
	const nativeRange = {
		startDate: range.startDate ? new Date(range.startDate) : new Date(),
		endDate: range.endDate ? new Date(range.endDate) : addDays(new Date(), 7),
		key: "selection",
	};

	const [ShowPicker, setShowPicker] = useState(false);

	//Popper stuff
	const [PopRef, setPopRef] = useState(null);
	const [PopElem, setPopElem] = useState(null);
	const { styles, attributes } = usePopper(PopRef, PopElem, {
		placement: "bottom-start",
	});

	return (
		<div className={`relative ${className}`}>
			{label && <label className="mb-2 block">{label}</label>}
			<div ref={setPopRef} className={`text-sm ring-1 ring-inset ring-muted bg-canvas shadow-sm rounded-md p-2.5 align-center cursor-pointer ${inputClass}`} onClick={() => setShowPicker(!ShowPicker)}>
				{range.startDate && range.endDate ? (
					<>
						<FiCalendar className="mr-2" />
						<div className="whitespace-nowrap">{moment(nativeRange.startDate).format("DD MMM YY")}</div>
						<FiChevronRight className="ml-1 mr-1" />
						<div className="whitespace-nowrap">{moment(nativeRange.endDate).format("DD MMM YY")}</div>
					</>
				) : (
					"Select Dates"
				)}
			</div>
			<Transition ref={setPopElem} style={styles.popper} {...attributes.popper} className="z-10 mt-2" show={ShowPicker ? true : false}>
				<DateRange
					className="rounded-lg overflow-hidden shadow-lg border"
					editableDateInputs={true}
					onChange={(item) => {
						const { startDate, endDate } = item.selection;
						setRange({
							startDate: moment(startDate).valueOf(),
							endDate: moment(endDate).valueOf(),
						});
						if (!moment(startDate).isSame(moment(endDate))) {
							setShowPicker(false);
						}
					}}
					minDate={minDate && new Date(minDate)}
					maxDate={maxDate && new Date(maxDate)}
					moveRangeOnFirstSelection={false}
					ranges={[nativeRange]}
					months={2}
					direction="horizontal"
					rangeColors={["#1BDB17"]}
				/>
			</Transition>
		</div>
	);
}

export default DateRangePicker;
