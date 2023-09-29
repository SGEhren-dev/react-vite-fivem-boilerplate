<div align="center">
	Simple FiveM Nui boilerplate written with react and typescript
</div>
<div align="center">
	![Discord](https://img.shields.io/discord/1124006604195504229)
	![GitHub Repo stars](https://img.shields.io/github/stars/SGEhren-dev/react-vite-fivem-boilerplate)
</div>

This is a basic boilerplate for FiveM Nui mods. It uses the blazing fast vite frontend framework to deliver a fast development environment. This boilerplate contains a simple implementation of the ProdigyRP style player stat bars.

## Requirements
* [Node >= v16](https://nodejs.org/en/)
* Basic understanding of web development, react and redux.

## Getting started

First, start by running `git clone https://github.com/SGEhren-dev/react-vite-fivem-boilerplate.git`. This will create a clone of the repository. You can do this within your resources folder.

Install the dependencies by navigating to the renderer folder and typing `npm i` or `yarn`. Same applies for the base directory.

This project makes use of TsConfig Paths to allow for clean resource paths rather than absolute paths. To change the name from "MyMod", navigate into `renderer/tsconfig.json` and change the following

```json
...
"paths": {
	"YourModName/*": [ "./src/*" ]
}
...
```
Where your mod name is the name of your mod. You can then change all imports in the renderer folder to use this new path name.

## Interprocess Communication

There is a wrapper for sending messages across to the front-end using `SendNuiMessage`. The front-end implements a hook that watches for messages called `useNuiEvent`.

```typescript
/**
 * @param action - Event name
 * @param data - Data to send
 * @type T - Type of the payload being sent
 */
export const sendIpcMessage<T = unknown>(action: string, data: T)
```

**Usage**
```typescript
sendIpcMessage<boolean>("setIsTalking", false);
```

## Renderer

The renderer side uses React and Vite to give you a blazingly fast development environment. There are a few hooks here, one of which was mentioned above.

**useNuiEvent**

This is a react hook that is designed to handle messages dispatched by game scripts. This is the main way to create listeners.

**Usage**
```tsx
const Component = () => {
	const [ health, setHealth ] = useState(100);

	useNuiEvent<number>("setHealth", (value: number) => {
		// data is the payload being sent from the main process

		setHealth(data);
	});

	return (
		<>
			<h1>This is an example</h1>
		</>
	);
}
```

**fetchNui**

This is a simple wrapper for fetching data or triggering callbacks in the main process.

**Usage**
```typescript
fetchNui<ReturnType>("getSomeData")
	.then((data: ReturnType) => {
		console.log(data);
	});
```

### Redux

This app is equipped with Redux for state management. It makes use of the redux toolkit as well to make the development process a little easier. All state interfaces are found in `renderer/src/Data/State.ts` and the reducers, actions, selectors, and store can be found in the *Data* directory as well.

There are custom typed redux hooks that are exported from the `Data/Store.ts` file that will help make development a little bit simpler.

Here are links to some useful resources if you are new to redux:

* https://redux.js.org/introduction/getting-started
* https://redux-toolkit.js.org/

## Building
When you are finished with your development process, you can simply run `npm run build` in the renderer folder to build the renderer for production. And in the base directory, you can run `npm start` to create a production build. All build related files are found in the `dist/` directories of the related process. 

## Inspiration

This boilerplate was inspired by projecterror. They created a react project that bootstrapped CRA, but with Vite being a faster framework, that spawned this repository. Most of the hooks remain the same to help users that want to switch over to this boilerplate.

Here are the links to the original repository:

* https://github.com/project-error/pe-ui/tree/master
