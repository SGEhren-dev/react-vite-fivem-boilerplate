export const noop = () => {};

export const getResourceName = (): string => {
	return (window as any).GetParentResourceName
		? (window as any).GetParentResourceName()
		: "pe-ui";
};

export const delay = (ms: number) => new Promise((resp => setTimeout(resp, ms)));

export const isEnvBrowser = (): boolean => !(window as any).invokeNative;
