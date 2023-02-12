import React from "react";

const Section = ({ text1, text2, image, imageRight }) => {
	return (
		<>
			<div className="h-2 bg-gray-800"></div>
			{imageRight && (
				<div className="grid grid-cols-2 bg-black text-white py-20 px-40 items-center">
					<div className="text-center w-full">
						<h1 className="text-5xl text-left tracking-wider font-extrabold mb-6">{text1}</h1>
						<p className="text-3xl text-left">{text2}</p>
					</div>
					<img alt="tv" src={image} />
				</div>
			)}
			{!imageRight && (
				<div className="grid grid-cols-2 bg-black text-white py-20 px-40 items-center">
					<img alt="tv" src={image} />
					<div className="text-center w-full">
						<h1 className="text-5xl text-left tracking-wider font-extrabold mb-6">{text1}</h1>
						<p className="text-3xl text-left">{text2}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Section;
