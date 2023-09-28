import React, { memo } from "react";
import PlayerStats from "MyMod/Components/PlayerStats";
import BackgroundImg from "/GTABackground.jpeg";
import { useHudListener } from "MyMod/Hooks/useHudListener";
import { useHudReady } from "MyMod/Hooks/useHudReady";

const App = () => {
	useHudListener();
	useHudReady();

	return (
		<div className="app">
			<img src={ BackgroundImg } />
			<PlayerStats />
		</div>
	);
};

export default memo(App);
