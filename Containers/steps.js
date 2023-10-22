import React, { useEffect, useState } from "react";
import Button from "../Inputs/Button";

function Steps({ goNext, loading, steps = [], onChange = () => {} }) {
	const [ActiveStep, setActiveStep] = useState(1);

	const nextStep = (step) => {
		//Go to next step if onChange handler returns true
		if (onChange(step)) {
			setActiveStep(step);
		}
	};

	useEffect(() => {
		if (goNext) {
			goNext.current = () => {
				setActiveStep((prev) => prev + 1);
			};
		}
	}, [goNext, ActiveStep]);

	return (
		<div className="border rounded-md">
			{steps.map((step, index) => {
				const active = index + 1 === ActiveStep;
				return (
					<div key={index} className={`p-4 ${active ? "" : "bg-light"} border-b`}>
						<div className="align-center">
							<div className={`${active ? "bg-primary" : "bg-dark"} text-white text-xs font-bold w-6 h-6 rounded-full flex-center mr-4`}>{index + 1}</div>
							<div>
								<h3>{step.heading}</h3>
								<div className="text-xs text-secondary">{step.description}</div>
							</div>
						</div>
						{active && (
							<div className="pt-4">
								<div className="mt-4">{step.content}</div>
								<div className="flex mt-6">
									{ActiveStep < steps.length + 1 && (
										<Button loading={loading} onClick={() => nextStep(ActiveStep + 1)} className="btn-sm mr-2" variant="primary">
											Continue
										</Button>
									)}
									{ActiveStep > 1 && (
										<Button onClick={() => setActiveStep((prev) => prev - 1)} className="btn-sm" variant="outlined">
											Go Back
										</Button>
									)}
								</div>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}

export default Steps;
