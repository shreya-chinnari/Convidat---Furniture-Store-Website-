import { createContext, useState } from "react";
import { products } from "../assets/assets";

// React Context API (ShopContext)

export const ShopContext = createContext();

// createContext() creates a new React "Context" [object] named ShopContext.
// Context allows components to share values (like products, currency, delivery_fee) without passing them explicitly as props.
// The React Context API allows data to be shared globally across multiple components without manually passing props down through each level.

const ShopContextProvider = (props) => {
	// ShopContextProvider is a wrapper component that provides data to its children.
	// All these are stored inside an object called value.
	// The value prop provides data to any child components that consume ShopContext.
	const currency = "$";
	const delivery_fee = 10;

	const [search, setSearch] = useState("");
	const [showSearch, setShowSearch] = useState(true);

	const value = {
		products,
		currency,
		delivery_fee,
		search,
		setSearch,
		showSearch,
		setShowSearch,
	};

	return (
		<ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
	);
	// {props.children} --- This renders child components inside the provider.
	// It ensures that any descendant component inside <ShopContextProvider> can access the provided values.
};

export default ShopContextProvider;

// ALL THIS IS USED IN "ProductItem.jsx"
