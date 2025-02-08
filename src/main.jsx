import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ShopContextProvider>
			<App />
		</ShopContextProvider>
	</BrowserRouter>
);

/* Here, <App /> is nested inside <ShopContextProvider>.
		[props.children] ensures <App /> (and all its children) can access the ShopContext.
		[props.children] is a special React prop that represents the content nested inside a component.
		It allows components to be wrapped inside another component. */
