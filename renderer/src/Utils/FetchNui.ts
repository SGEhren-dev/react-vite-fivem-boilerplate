import { RequestMethod } from "MyMod/Data/Enums";
import { isEnvBrowser } from "MyMod/Utils/Miscellaneous";

export async function fetchNui<T = any>(
	eventName: string, data?: any, mockData?: T
): Promise<T> {
	const opts = {
		method: RequestMethod.POST,
		headers: {
			"Content-Type": "application/json;charset=UTF-8"
		},
		body: JSON.stringify(data)
	};

	if (isEnvBrowser() && mockData !== undefined) {
		return mockData;
	}

	const resourceName = (window as any).GetParentResourceName
		? (window as any).GetParentResourceName()
		: "nui-frame-app";

	const resp = await fetch(`https://${ resourceName }/${ eventName }`, opts);

	return await resp.json();
};