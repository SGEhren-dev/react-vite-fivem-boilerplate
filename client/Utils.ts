export const sendIpcMessage = <T = unknown>(action: string, data: T) => {
	SendNUIMessage({ action, data });
};
