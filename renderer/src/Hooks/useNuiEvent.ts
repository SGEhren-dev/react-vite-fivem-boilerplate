import { MutableRefObject, useEffect, useRef } from "react";
import { noop } from "MyMod/Utils/Miscellaneous";

interface INuiMessageData<T = unknown> {
	action: string;
	data: T;
}

type NuiHandlerSignature<T> = (data: T) => void;

export const useNuiEvent = <T = any>(action: string, handler: NuiHandlerSignature<T>) => {
	const savedHandler: MutableRefObject<NuiHandlerSignature<T>> = useRef(noop);

	useEffect(() => {
		savedHandler.current = handler;
	}, [ handler ]);

	useEffect(() => {
		const eventListener = (event: MessageEvent<INuiMessageData<T>>) => {
			const { action: eventAction, data } = event.data;

			if (savedHandler.current) {
				if (eventAction === action) {
					savedHandler.current(data);
				}
			}
		};

		window.addEventListener("message", eventListener);

		return () => window.removeEventListener("message", eventListener);
	}, [ action ]);
};
