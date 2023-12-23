import React, { useEffect } from "react";
import CoinSound from "./coin.mp3";

function ConfettiAnimation({ show }) {
	const coinSound = new Audio(CoinSound);

	useEffect(() => {
		if (show) {
			coinSound.play();
			setTimeout(shoot, 0);
			setTimeout(shoot, 100);
			setTimeout(shoot, 200);
		}
	}, [show]);

	const defaults = {
		spread: 100,
		ticks: 100,
		gravity: 0,
		decay: 0.9,
		startVelocity: 50,
	};

	function shoot() {
		window.confetti({
			...defaults,
			particleCount: 30,
			scalar: 1.2,
			shapes: ["circle", "square"],
			colors: ["#a864fd", "#29cdff", "#78ff44", "#fdff6a"],
		});
		window.confetti({
			...defaults,
			particleCount: 20,
			scalar: 2,
			shapes: ["emoji"],
			shapeOptions: {
				emoji: {
					value: ["🤑", "🚀"],
				},
			},
		});
	}

	return <></>;
}

export default ConfettiAnimation;
