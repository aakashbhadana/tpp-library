import React, { useEffect } from "react";
import { confetti } from "https://cdn.jsdelivr.net/npm/tsparticles-confetti/+esm";

function ConfettiAnimation({ show }) {
	// go Buckeyes!
	const colors = ["#1BDB17", "#F1C93B"];

	useEffect(() => {
		if (show) {
			run(Date.now());
		}
	}, [show]);

	const run = (startTime) => {
		(function frame() {
			confetti({
				particleCount: 2,
				angle: 60,
				spread: 55,
				origin: { x: 0 },
				colors: colors,
			});

			confetti({
				particleCount: 2,
				angle: 120,
				spread: 55,
				origin: { x: 1 },
				colors: colors,
			});

			if (Date.now() < startTime + 1000) {
				requestAnimationFrame(frame);
			}
		})();
	};

	return <></>;
}

export default ConfettiAnimation;
