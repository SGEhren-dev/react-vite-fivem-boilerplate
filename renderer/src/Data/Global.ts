import { PlayerStat } from "MyMod/Data/Enums";

export interface IIndexSignature<T> {
	[key: string]: T;
}

export interface IPlayerStatUpdatePayload {
	stat: PlayerStat;
	value: number;
}
