import React from "react";
import { Button, Modal } from "..";
import { useState } from "react";

function OnOffGame({ className = "" }) {
	const [StartGame, setStartGame] = useState();

	return (
		<>
			<Button onClick={() => setStartGame(true)} variant="outlined" className={`btm-sm m-auto ${className}`}>
				Play a Game
			</Button>
			<Modal zIndex="z-30" open={StartGame} onClose={() => setStartGame()} contentClass="!max-w-[80%] !h-[80%] !rounded-2xl !overflow-hidden">
				<iframe title="game" src="https://js13kgames.com/games/onoff/index.html" className="w-full h-full border-none"></iframe>
			</Modal>
		</>
	);
}

export default OnOffGame;
