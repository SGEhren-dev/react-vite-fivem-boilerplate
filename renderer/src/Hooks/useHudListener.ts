import { useDispatch } from "MyMod/Data/Store";
import { setPlayerIsTalkingAction, setPlayerStatAction } from "MyMod/Data/Actions/PlayerState";
import { PlayerStat } from "MyMod/Data/Enums";
import { useNuiEvent } from "./useNuiEvent";

export const useHudListener = () => {
	const dispatch = useDispatch();
	const setPlayerHealth = (value: number) =>
		dispatch(setPlayerStatAction({ stat: PlayerStat.HEALTH, value }));

	const setPlayerArmor = (value: number) =>
		dispatch(setPlayerStatAction({ stat: PlayerStat.ARMOR, value }));

	const setPlayerBreath = (value: number) =>
		dispatch(setPlayerStatAction({ stat: PlayerStat.BREATH, value }));
	
	const setIsTalking = (value: boolean) => dispatch(setPlayerIsTalkingAction(value));

	useNuiEvent("setHealth", setPlayerHealth);
	useNuiEvent("setArmor", setPlayerArmor);
	useNuiEvent("setBreath", setPlayerBreath);
	useNuiEvent("setIsTalking", setIsTalking);
};
