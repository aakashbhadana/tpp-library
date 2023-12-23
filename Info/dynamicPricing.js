import React from "react";
import Graph from "./images/graph.png";

function DynamicPricing() {
	return (
		<>
			<div className="p-6">
				<h2>Dynamic Pricing</h2>
				<img src={Graph} alt="Graph" className="mt-6" />
				<div className="mt-6">
					Dynamic pricing is a smart way to both save cost and also provide flexibility of choice to user. When dynamic price is set system automatically finds the median price available at the time of booking and allows user to select a fare that is within the provided tolerance.
				</div>
				<div className="p-4 mt-6 rounded-lg bg-light">
					<h4>Example</h4>
					<div className="text-sm">If you have set dynamic pricing to 20% and the user will search flights. Suppose the median fare at the time is INR 5000, then uer will be able to choose a flight which is within the range INR 4000 to INR 6000</div>
				</div>
			</div>
		</>
	);
}

export default DynamicPricing;
