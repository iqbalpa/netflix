import React from "react";
import Logo from "../../assets/netflix-logo.png";

const Header = () => {
	return (
		<div className="flex flex-row justify-between">
			<img src={Logo} alt="Netflix Logo" />
			<div className="flex flex-row">
				<select>
					<option value="en">English</option>
					<option value="fr">French</option>
				</select>
				<button>Sign In</button>
			</div>
		</div>
	);
};

export default Header;
