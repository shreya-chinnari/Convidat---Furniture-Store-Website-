import React from "react";

const Title = ({ text1, text2 }) => {
	return (
		<div className="inline-flex gap-2 items-center mb-3">
			<p className="text-gray-500">
				{text1} <span className="text-gray-700 font-medium">{text2}</span>
			</p>
			<p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
		</div>
	);
};

export default Title;

// { text1, text2 } are destructured props.
// These props allow the Title component to receive dynamic text when it is used.

/*
If you use:
   <Title text1="New Arrivals" text2="Collection" />
The Title component receives:
   {
  text1: "New Arrivals",
  text2: "Collection"
   }
*/

/* ALTERNATE WAY WITHOUT DESTRUTURING ------

   const Title = (props) => {
    return (
        <div>
            <p>{props.text1} <span>{props.text2}</span></p>
        </div>
    );
};
*/
