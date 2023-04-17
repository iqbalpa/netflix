import React from "react";

const GetStartedButton = () => {
	return (
		<>
			<div className="flex flex-row">
				<input type="email" placeholder="Email address" className="bg-slate-700/75 p-4 w-96 border-[1px] border-gray-300 border-r-0 rounded-l-md" />
				<button className="text-white text-3xl bg-red-500 hover:bg-red-600 duration-150 border-[1px] border-gray-300 border-l-0 p-4 rounded-r-md w-56 ">Get Started {">"}</button>
			</div>
		</>
	);
};

export default GetStartedButton;
