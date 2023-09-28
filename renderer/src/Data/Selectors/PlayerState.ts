import { createSelector } from "@reduxjs/toolkit";
import { IPlayerState, IState } from "MyMod/Data/State";
import { PlayerStat } from "MyMod/Data/Enums";

const getPlayerState = (state: IState) => {
	return state.Player;
};

const allPlayerStats = (state: IPlayerState) => {
	return state.playerStats;
};

const getStat = (state: IPlayerState, stat: PlayerStat) => {
	return state.playerStats[ stat ];
};

const getPlayerTalking = (state: IPlayerState) => {
	return state.isTalking;
};

export const getPlayerStat = createSelector(
	[ getPlayerState, (state: IState, stat: PlayerStat) => (stat) ],
	getStat
);

export const getPlayerIsTalking = createSelector(
	getPlayerState,
	getPlayerTalking
);

export const getAllPlayerStats = createSelector(getPlayerState, allPlayerStats);
