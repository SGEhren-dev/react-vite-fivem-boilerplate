import { createAction } from "@reduxjs/toolkit";
import { PlayerStateActions } from "MyMod/Data/Actions/ActionTypes";
import { IPlayerStatUpdatePayload } from "MyMod/Data/Global";

export const setPlayerStatAction = createAction<IPlayerStatUpdatePayload>(PlayerStateActions.UPDATE_STAT);
export const setPlayerIsTalkingAction = createAction<boolean>(PlayerStateActions.SET_IS_TALKING);
