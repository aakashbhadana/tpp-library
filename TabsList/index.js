import { Fragment } from "react";
import { Tab } from "@headlessui/react";

function TabsList({ className = "", menuClass = "", heading, children, options = [], onChange = () => {} }) {
	const params = new URLSearchParams(window.location.search);
	const defaultTab = params.get("tab") || 0;

	return (
		<Tab.Group onChange={onChange} vertical defaultIndex={defaultTab} as="div" className={`border rounded-lg flex ${className}`}>
			<Tab.List className={`rounded-l-lg p-3 border-r bg-whitish shadow-sm overflow-hidden min-w-min text-sm ${menuClass}`}>
				{heading && <h4 className="p-1 mb-3">{heading}</h4>}
				{options.map((option, index) => {
					return (
						<Tab key={index} as={Fragment}>
							{({ selected }) => <div className={`whitespace-nowrap my-1 px-3 py-2 hover:bg-surface rounded-md cursor-pointer ${selected ? "bg-surface" : ""}`}>{option}</div>}
						</Tab>
					);
				})}
			</Tab.List>
			<Tab.Panels className={`flex-grow`}>{children}</Tab.Panels>
		</Tab.Group>
	);
}

export default TabsList;
