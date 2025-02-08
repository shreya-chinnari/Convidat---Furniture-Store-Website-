import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
	const [bestSeller, setBestSeller] = useState([]);
	const { products } = useContext(ShopContext);

	useEffect(() => {
		const bestProduct = products.filter((item) => item.bestSeller);
		setBestSeller(bestProduct.slice(0, 5));
	}, [products]);

	return (
		<div className="my-10">
			<div className="text-center text-3xl py-8">
				<Title
					text1={"BEST"}
					text2={"SELLERS"}
				></Title>
				<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
					perferendis sint laborum labore hic ea quod in placeat mollitia
					aliquid.
				</p>
			</div>
			{/* Below code takes an array named bestSeller, iterates over it, and creates a ProductItem component for each item in the array while passing specific props to it. 
         
         The .map() function loops through the bestSeller array.

         It processes each product object inside the array.

         For every product in bestSeller, a <ProductItem /> component is created.

         Passing Props to ProductItem Each ProductItem component receives the following props:key,id,image,name,price
         */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
				{bestSeller.map((item, index) => (
					<ProductItem
						key={index}
						id={item._id}
						image={item.image}
						name={item.name}
						price={item.price}
					></ProductItem>
				))}
			</div>
		</div>
	);
};

export default BestSeller;
