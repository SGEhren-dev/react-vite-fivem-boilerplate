import React from "react";
import { createRoot } from "react-dom/client";
import App from "MyMod/Components/App";
import { Provider } from "react-redux";
import { store } from "MyMod/Data/Store";
import "MyMod/Styles.less";

const rootComponent = (
	<React.StrictMode>
		<Provider store={ store }>
			<App />
		</Provider>
	</React.StrictMode>
);

createRoot(document.getElementById("root") as Element)
	.render(rootComponent);
