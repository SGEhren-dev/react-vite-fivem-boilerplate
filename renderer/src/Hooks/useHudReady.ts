import { useEffect } from "react";
import { fetchNui } from "MyMod/Utils/FetchNui";

export const useHudReady = () => {
	useEffect(() => {
		fetchNui('nuiReadyForMessages', undefined, { });
	}, [ ]);
};
