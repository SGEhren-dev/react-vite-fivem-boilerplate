import { IState } from "MyMod/Data/State";
import playerSliceReducer from "MyMod/Data/Reducers/PlayerState";
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { useSelector as originalUseSelector, useDispatch as originalUseDispatch, TypedUseSelectorHook } from "react-redux";

const reducers: ReducersMapObject = {
	Player: playerSliceReducer
};

export const store = configureStore({
	reducer: reducers
});

export const useSelector: TypedUseSelectorHook<IState> = originalUseSelector;
export const useDispatch: () => typeof store.dispatch = originalUseDispatch;
