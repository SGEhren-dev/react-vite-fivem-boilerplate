export const sendReactMessage = <T = unknown>(action: string, data: T) => {
	SendNUIMessage({ action, data });
};
