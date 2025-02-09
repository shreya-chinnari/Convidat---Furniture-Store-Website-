import React from "react";

const NewsletterBox = () => {
	return (
		<div className="text-center">
			<p className="text-2xl font-medium text-gray-800">
				Subscribe now & get 20% OFF
			</p>
			<p className="text-gray-400 mt-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
				voluptatem quod libero atque pariatur sed ipsam esse. Aut, dicta
				laudantium.
			</p>

			<form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
				<input
					className="w-full sm:flex-1 outline-none"
					type="text"
					placeholder="Enter your email id"
					required
				/>
				<button
					className="bg-black text-white text-xs px-10 py-4 cursor-pointer"
					type="submit"
				>
					SUBSCRIBE
				</button>
			</form>
		</div>
	);
};

export default NewsletterBox;
