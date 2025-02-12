import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
	const [latestProducts, setLatestProducts] = useState([]);
	const { products } = useContext(ShopContext);

	// LatestProducts - state variable
	// setLatestProducts - function to update LatestProducts
	// useState - React hook to initialise the state with an empty array

	// State variables in React are dynamic values that React tracks and updates when they change. They allow components to re-render when the data updates.

	useEffect(() => {
		if (products.length > 0) {
			setLatestProducts(products.slice(0, 10));
		}
	}, [products]);
	// useEffect is a React Hook that runs side effects (like fetching data, event listeners, etc.).
	return (
		<div className="my-10">
			<div className="text-center py-8 text-3xl">
				<Title
					text1={"LATEST"}
					text2={"COLLECTIONS"}
				></Title>
				{/* Props (text1, text2) pass dynamic data from the parent to the Title
				component, making it reusable. */}
				<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim rerum
					quaerat.
				</p>
			</div>

			{/* rendering products  */}

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
				{latestProducts.map((item, index) => (
					<ProductItem
						key={index}
						id={item._id}
						image={item.image[0]}
						name={item.name}
						price={item.price}
					></ProductItem>
				))}
			</div>
		</div>
	);
};

export default LatestCollection;
