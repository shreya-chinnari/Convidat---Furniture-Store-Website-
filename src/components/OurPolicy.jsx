import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
			<div>
				<img
					className="w-12 m-auto mb-5"
					src={assets.exchange_icon}
					alt=""
				/>
				{/* m-auto (margin auto) is applied to the <img>, which makes it        centered inside a block-level parent (div).
               m-auto only works on block-level elements if the parent has a defined width (or is implicitly taking full width). */}
				<p className="font-semibold">Easy Exchange Policy</p>
				<p className="text-gray-400">We offer hassle free exchange policy</p>

				{/* A <div> is a block-level element, so all child elements are stacked vertically.
            The <p> tags naturally follow the <img> and are not forced into a row.
            
            The <div> stacks its children (<img> and <p> elements) vertically because each of them is a block element (except <img>, which behaves like inline-block but is alone in its row).
            
            */}
			</div>
			<div>
				<img
					className="w-12 m-auto mb-5"
					src={assets.quality_icon}
					alt=""
				/>
				<p className="font-semibold">7 Days Return Policy</p>
				<p className="text-gray-400">We provide 7 days free return policy </p>
			</div>
			<div>
				<img
					className="w-12 m-auto mb-5"
					src={assets.support_img}
					alt=""
				/>
				<p className="font-semibold">Best customer support</p>
				<p className="text-gray-400">we provide 24/7 customer support</p>
			</div>
		</div>
	);
};

export default OurPolicy;
