import { useDispatch } from "MyMod/Data/Store";
import { setPlayerStatAction } from "MyMod/Data/Actions/PlayerState";
import { PlayerStat } from "MyMod/Data/Enums";
import { useNuiEvent } from "./useNuiEvent";

export const useHudListener = () => {
	const dispatch = useDispatch();
	const setPlayerHealth = (value: number) =>
		dispatch(setPlayerStatAction({ stat: PlayerStat.HEALTH, value }));

	const setPlayerArmor = (value: number) =>
		dispatch(setPlayerStatAction({ stat: PlayerStat.ARMOR, value }));

	const setPlayerFood = (value: number) =>
		dispatch(setPlayerStatAction({ stat: PlayerStat.FOOD, value }));

	const setPlayerWater = (value: number) =>
		dispatch(setPlayerStatAction({ stat: PlayerStat.WATER, value }));

	const setPlayerSanity = (value: number) =>
		dispatch(setPlayerStatAction({ stat: PlayerStat.SANITY, value }));

	const setPlayerBreath = (value: number) =>
		dispatch(setPlayerStatAction({ stat: PlayerStat.BREATH, value }));

	useNuiEvent("setHealth", setPlayerHealth);
	useNuiEvent("setArmor", setPlayerArmor);
	useNuiEvent("setFood", setPlayerFood);
	useNuiEvent("setWater", setPlayerWater);
	useNuiEvent("setSanity", setPlayerSanity);
	useNuiEvent("setBreath", setPlayerBreath);
};
