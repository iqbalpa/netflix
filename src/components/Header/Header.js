import React from "react";
import Logo from "../../assets/netflix-logo.png";

const Header = () => {
	return (
		<div className="bg-gradient-to-b from-black/50 to-transparent p-4 px-44 flex flex-row items-center justify-between">
			<img src={Logo} alt="Netflix Logo" className="w-40" />
			<div className="flex flex-row items-center">
				<select className="m-2 mr-3 rounded-md p-2 w-52 text-white bg-slate-700/75">
					<option value="en" className="bg-white text-black">
						English
					</option>
					<option value="fr" className="bg-white text-black">
						French
					</option>
					<option value="es" className="bg-white text-black">
						Spanish
					</option>
					<option value="de" className="bg-white text-black">
						German
					</option>
					<option value="it" className="bg-white text-black">
						Italian
					</option>
				</select>
				<button className="bg-red-500 ml-3 hover:bg-red-600 duration-150 rounded-md text-white px-5 py-2">Sign In</button>
			</div>
		</div>
	);
};

export default Header;
