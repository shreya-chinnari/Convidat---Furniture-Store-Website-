import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
	const { products } = useContext(ShopContext);
	const [showFilter, setShowFilter] = useState(false);
	const [filterProducts, setFilterProducts] = useState([]);
	const [category, setCategory] = useState([]);
	const [subCategory, setSubCategory] = useState([]);
	const [sortType, setSortType] = useState("relavent");

	const toggleCategory = (e) => {
		if (category.includes(e.target.value)) {
			setCategory((prev) => prev.filter((item) => item !== e.target.value));
		} else {
			setCategory((prev) => [...prev, e.target.value]);
		}
	};
	const toggleSubCategory = (e) => {
		if (subCategory.includes(e.target.value)) {
			setSubCategory((prev) => prev.filter((item) => item !== e.target.value)); // removes the value if already selected
		} else {
			setSubCategory((prev) => [...prev, e.target.value]);
		}
	};

	const applyFilter = () => {
		let productsCopy = products.slice(); // copy of products array in productsCopy
		if (category.length > 0) {
			productsCopy = productsCopy.filter((item) =>
				category.includes(item.category)
			);
		}
		if (subCategory.length > 0) {
			productsCopy = productsCopy.filter((item) =>
				subCategory.includes(item.subCategory)
			);
		}

		setFilterProducts(productsCopy);
	};

	const sortProduct = () => {
		let fpCopy = filterProducts.slice();

		switch (sortType) {
			case "low-high":
				setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
				break;
			case "high-low":
				setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
				break;
			default:
				applyFilter();
				break;
		}
	};

	useEffect(() => {
		// execute this function whenever either gets updated
		applyFilter();
	}, [category, subCategory]);

	useEffect(() => {
		sortProduct();
	}, [sortType]);

	return (
		<div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
			{/* Filter Options */}
			<div className="min-w-60">
				<p
					onClick={() => setShowFilter(!showFilter)}
					className="my-2 text-xl flex items-center cursor-pointer gap-2"
				>
					FILTERS
					<img
						src={assets.dropdown_icon}
						alt=""
						className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
					/>
				</p>

				{/* Category Filter */}
				<div
					className={`border border-gray-300 pl-5 py-3 mt-6 ${
						showFilter ? "" : "hidden"
					} sm:block`} // box will always be hidden in small screens and always visible on desktop screens, on small screens it will be visible when we click on Filters button
				>
					<p className="mb-3 text-sm font-medium ">CATEGORIES</p>

					<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"Men"}
								onChange={toggleCategory}
							/>
							Men
						</p>
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"Women"}
								onChange={toggleCategory}
							/>
							Women
						</p>
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"Kids"}
								onChange={toggleCategory}
							/>
							Kids
						</p>
					</div>
				</div>

				{/* Sub Category Filter */}

				<div
					className={`border border-gray-300 pl-5 py-3 my-5 ${
						showFilter ? "" : "hidden"
					} sm:block`}
				>
					<p className="mb-3 text-sm font-medium ">TYPE</p>

					<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"Topwear"}
								onChange={toggleSubCategory}
							/>
							Topwear
						</p>
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"Bottomwear"}
								onChange={toggleSubCategory}
							/>
							Bottomwear
						</p>
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"Winterwear"}
								onChange={toggleSubCategory}
							/>
							Winterwear
						</p>
					</div>
				</div>
			</div>

			{/* Right Side */}
			<div className="flex-1">
				<div className="flex justify-between text-base sm:text-2xl mb-4 flex-wrap">
					<Title
						text1={"ALL"}
						text2={"COLLECTIONS"}
					></Title>

					{/* Product Sort */}
					<select
						onChange={(e) => setSortType(e.target.value)}
						className="border-2 ml-6 border-gray-300 text-sm px-2 h-[40px]"
					>
						<option value="relevant">Sort by : Relavent</option>
						<option value="low-high">Sort by : Low to High</option>
						<option value="high-low">Sort by : High to Low</option>
					</select>
				</div>

				{/* Mapping products */}

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
					{Array.isArray(filterProducts) &&
						filterProducts.map((item, index) =>
							item && item._id ? (
								<ProductItem
									key={index}
									id={item._id}
									image={item.image[0]}
									name={item.name}
									price={item.price}
								/>
							) : null
						)}

					{/* 
						had to make it an array, otherwise it was showing 53 items : 
  filterProducts.map((item, index) => (
    item && item._id ? (
      <ProductItem
        key={index}
        id={item._id}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    ) 
  ))
}

						*/}
				</div>
			</div>
		</div>
	);
};

export default Collection;
