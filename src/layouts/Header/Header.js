import React from "react";
import Logo from "../../assets/netflix-logo.png";
import LanguageDropdown from "../../components/LanguageDropdown/LanguageDropdown";

const Header = () => {
	return (
		<div className="bg-gradient-to-b from-black/90 to-black/30 p-4 px-44 flex flex-row items-center justify-between">
			<img src={Logo} alt="Netflix Logo" className="w-40" />
			<div className="flex flex-row items-center">
				<LanguageDropdown />
				<a href="/signin">
					<button className="bg-red-500 ml-3 hover:bg-red-600 duration-150 rounded-md text-white px-5 py-2">Sign In</button>
				</a>
			</div>
		</div>
	);
};

export default Header;
