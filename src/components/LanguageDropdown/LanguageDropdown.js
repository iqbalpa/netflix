import React from "react";

const LanguageDropdown = () => {
	return (
		<>
			<select className="rounded-md p-2 w-52 text-white bg-slate-700/75">
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
		</>
	);
};

export default LanguageDropdown;
