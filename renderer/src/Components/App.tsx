import React, { memo } from "react";
import PlayerStats from "MyMod/Components/PlayerStats";
import { useHudListener } from "MyMod/Hooks/useHudListener";
import { useHudReady } from "MyMod/Hooks/useHudReady";

const App = () => {
	useHudListener();
	useHudReady();

	return (
		<div className="app">
			<PlayerStats />
		</div>
	);
};

export default memo(App);
