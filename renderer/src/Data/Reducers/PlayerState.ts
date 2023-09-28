import { createReducer, ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { IPlayerState } from "MyMod/Data/State";
import { IPlayerStatUpdatePayload } from "MyMod/Data/Global";
import { PlayerStat } from "MyMod/Data/Enums";
import { setPlayerIsTalkingAction, setPlayerStatAction } from "MyMod/Data/Actions/PlayerState";

const defaultState: IPlayerState = {
	playerStats: {
		[ PlayerStat.HEALTH ]: 100,
		[ PlayerStat.ARMOR ]: 100,
		[ PlayerStat.BREATH ]: 100
	},
	isTalking: false
};

export const handlePlayerStatsUpdate = (state: IPlayerState, action: PayloadAction<IPlayerStatUpdatePayload>) => {
	const { stat, value } = action.payload;

	state.playerStats[ stat ] = value;
};

export const handleSetPlayerIsTalking = (state: IPlayerState, action: PayloadAction<boolean>) => {
	state.isTalking = action.payload;
};

export const reducer = (builder: ActionReducerMapBuilder<IPlayerState>) => {
	builder.addCase(setPlayerStatAction, handlePlayerStatsUpdate);
	builder.addCase(setPlayerIsTalkingAction, handleSetPlayerIsTalking);
};

export default createReducer(defaultState, reducer);
