import { PlayerStat } from "MyMod/Data/Enums";
import { IIndexSignature } from "MyMod/Data/Global";

export interface IState {
	Player: IPlayerState;
}

// Create the player state slice
export interface IPlayerState {
	playerStats: IIndexSignature<number>;
	isTalking: boolean;
}
