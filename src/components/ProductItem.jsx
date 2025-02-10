import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import PropTypes from "prop-types";
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
						src={image[0]}
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

// Prop Validation
ProductItem.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // id should be a string or number
	image: PropTypes.arrayOf(PropTypes.string).isRequired, // image should be an array of strings
	name: PropTypes.string.isRequired, // name should be a string
	price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // price can be a number or a string
};

export default ProductItem;
