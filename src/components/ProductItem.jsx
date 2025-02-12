import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
	// from the props

	const { currency } = useContext(ShopContext); // from ShopContext

	return (
		<>
			<Link
				to={`/product/${id}`}
				onClick={() => window.scrollTo(0, 0)}
				className="text-gray-700 cursor-pointer"
			>
				<div className="hover:font-bold relative overflow-hidden">
					<img
						src={image}
						alt=""
						className="relative h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72 object-contain  transition-transform duration-300 ease-in-out hover:scale-105 "
					/>

					<p className=" pt-3 pb-1 text-sm">{name}</p>
					<p className="text-sm font-medium">
						{currency}
						{price}
					</p>
				</div>
			</Link>
			{/* on clicking on this link it will redirect to the product id  */}
		</>
	);
};



export default ProductItem;
